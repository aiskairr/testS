var ShefFormSimple = {

    initialize: function(params){
        var self = this;
        this.objForm = $('#form-'+params.frmID);
        this.frmFieldset = $('#fieldset_all-'+params.frmID);
        this.idForm = 'form-'+params.frmID;
        this.idarResultForm = params.frmID;
        $('#'+this.idarResultForm+'OK_TEXT').addClass('hide').html('');
        $('#'+this.idarResultForm+'Loader').addClass('hide');
        $('#'+this.idarResultForm+'Form').removeClass('hide');
        if (params.useAjax){
            this.objForm.append('<input name="isAJAX" value="Y" type="hidden" >');


            var sendAjax = function(e)  {
                self.disableSubmitButtom();
                BX.ajax({
                    url: self.objForm.attr('action'),
                    method: 'POST',
                    data: self.GetParameters(),
                    dataType: 'json',
                    scriptsRunFirst: false,
                    onsuccess: BX.proxy(function(dataJson){
                        BX.debug('AJAX-RESP', dataJson);
                        BX.onCustomEvent("ShefFormValidateAjaxGet", [self.idForm, dataJson]);
                        var alertMsg = null,
                            flagError = false;
                        if(null != dataJson.redirect && dataJson.redirect.length){
                            window.location = dataJson.redirect;
                            return true;
                        }
                        if(null != dataJson.error && dataJson.error.length){
                            alertMsg = dataJson.error;
                            flagError = true;
                        }
                        if(null != dataJson.success && dataJson.success.length && flagError == false){
                            alertMsg = dataJson.success;
                        }
                        if(null != dataJson.serv && dataJson.serv.length){
                            BX('captcha_sid_'+self.idarResultForm).value = dataJson.serv;
                            BX('field-captcha_word_'+self.idarResultForm).value = '';
                            BX('CAPTCHA_'+self.idarResultForm).setAttribute("src", '/bitrix/tools/captcha.php?captcha_sid='+dataJson.serv);
                        }
                        if (null !== alertMsg && alertMsg != ''){
                            var $js_descr = $('#'+self.idarResultForm+'DESCR');
                            if(flagError == false){
                            	$('#'+self.idarResultForm+'DEFAULT_TITLE').addClass('hide');
                                if($js_descr.length){
                                    $js_descr.hide();
                                }
                            	$('#'+self.idarResultForm+'OK_TITLE').removeClass('hide');
                            	$('#'+self.idarResultForm+'ERROR_TITLE').addClass('hide');
                                $('#'+self.idarResultForm+'Loader').addClass('hide');
                                $('#'+this.idarResultForm+'Button').removeClass('hide');
                                $('#'+self.idarResultForm+'OK_TEXT').removeClass('hide').html(alertMsg);
                                $('#'+self.idarResultForm).modal('show');
                                $('#'+self.idarResultForm).on('hidden.bs.modal', function () {
                                    $('#'+self.idarResultForm+'OK_TEXT').addClass('hide').html('');
                                    $('#'+self.idarResultForm+'DEFAULT_TITLE').removeClass('hide');
                                    if($js_descr.length){
                                        $js_descr.show();
                                    }
                                    $('#'+self.idarResultForm+'OK_TITLE').addClass('hide');
                                    $('#'+self.idarResultForm+'ERROR_TITLE').addClass('hide');
                                    self.enableSubmitButtom();
                                    self.objForm.find('.form-group').removeClass('has-success').removeClass('has-warning').removeClass('has-error');
                                    document.getElementById( self.idForm ).reset();
                                    self.objForm.find('.error ').hide();
                                    BX.onCustomEvent(
                                        BX(self.idForm),
                                        'ShefFormReload'
                                    );
                                });

                                return
                            }else{
                            	$('#'+self.idarResultForm+'OK_TITLE').addClass('hide');
                            	$('#'+self.idarResultForm+'ERROR_TITLE').removeClass('hide');
                            	$('#'+self.idarResultForm+'OK_TEXT').removeClass('hide').html(alertMsg);
                            	$('#'+self.idarResultForm).modal('show');
                            }

                        }

                        self.enableSubmitButtom();
                        self.objForm.find('.form-group').removeClass('has-success').removeClass('has-warning').removeClass('has-error');

                        if (flagError) {
                            for (j_counter in dataJson.arrerror){
                                $('#'+j_counter).addClass('has-error').find('.error-block').html(dataJson.arrerror[j_counter]);
                                $('#'+j_counter).find('.form-control').eq(0).focus();

                            }

                        } else {
                            document.getElementById( self.idForm ).reset();
                            BX.onCustomEvent(
                                BX(self.idForm),
                                'ShefFormReload'
                            );

                        }
                    }, self)

                });
            };

            this.objForm.validate({
                debug: false
                ,rules: params.validateRules
                ,submitHandler: function(form) {
                    sendAjax();
                },
                errorPlacement: function(error, element) {
                    error.appendTo( element.parent().siblings('.controls') );
                },
                highlight: function(element) {
                    $(element).closest('.control-group').removeClass('has-success').addClass('has-error');
                },
                success: function(element) {
                    element.addClass('valid').closest('.control-group').removeClass('has-error').addClass('has-success');
                }

            });

        }
    },
    disableSubmitButtom: function () {
        $('#'+this.idarResultForm+'Loader').removeClass('hide');
        $('#'+this.idarResultForm+'Button').addClass('hide');
        $('#'+this.idarResultForm+'Form').addClass('hide');
        this.frmFieldset.attr('disabled', 'disabled');
    },
    enableSubmitButtom: function () {
        $('#'+this.idarResultForm+'Loader').addClass('hide');
        $('#'+this.idarResultForm+'Button').removeClass('hide');
        $('#'+this.idarResultForm+'Form').removeClass('hide');
        this.frmFieldset.attr('disabled', false);
    },
    GetParameters: function(form_name) {
        var form = BX(this.idForm);

        if(!form)
            return "";

        var i, s = "";
        var n = form.elements.length;

        var delim = '';
        for(i=0; i<n; i++)
        {
            if (s != '') delim = '&';
            var el = form.elements[i];
            if (el.disabled)
                continue;
            if (!!el.type){
                switch(el.type.toLowerCase())
                {
                    case 'text':
                    case 'textarea':
                    case 'password':
                    case 'email':
                    case 'url':
                    case 'tel':
                    case 'date':
                    case 'month':
                    case 'week':
                    case 'datetime-local':
                    case 'time':
                    case 'number':
                    case 'color':
                    case 'hidden':
                        if (null == form_name && el.name.substr(el.name.length-4) == '_alt' && form.elements[el.name.substr(0, el.name.length-4)])
                            break;
                        s += delim + el.name + '=' + BX.util.urlencode(el.value);
                        break;
                    case 'radio':
                        if(el.checked)
                            s += delim + el.name + '=' + BX.util.urlencode(el.value);
                        break;
                    case 'checkbox':
                        s += delim + el.name + '=' + BX.util.urlencode(el.checked ? 'Y':'N');
                        break;
                    case 'select-one':
                        var val = "";
                        if (null == form_name && form.elements[el.name + '_alt'] && el.selectedIndex == 0)
                            val = form.elements[el.name+'_alt'].value;
                        else
                            val = el.value;
                        s += delim + el.name + '=' + BX.util.urlencode(val);
                        break;
                    case 'select-multiple':
                        var j, bAdded = false;
                        var l = el.options.length;
                        for (j=0; j<l; j++)
                        {
                            if (el.options[j].selected)
                            {
                                s += delim + el.name + '=' + BX.util.urlencode(el.options[j].value);
                                bAdded = true;
                            }
                        }
                        if (!bAdded)
                            s += delim + el.name + '=';
                        break;
                    default:
                        break;
                }
            }
        }

        return s;
    }
};