BX.ready(function(){



   var lightBox = BX.proxy(function(){

      var links = BX.findChildren(

         document,

         function(el){ 

            return (

               !!el.tagName 

               && el.hasAttribute('data-lightbox') 

            ); 

         },

         true

      );

      for(var i in links) {

         BX.bind(links[i], 'click', BX.proxy(function(e) {

            e.preventDefault();

            var link = BX.proxy_context;

            var obLightBox, prev, next, title, gallery;

            if(!!link.getAttribute('data-lightbox')) gallery = BX.findChildren(

               document,

               function(el){ 

                  return (

                     !!el.tagName 

                     && el.getAttribute('data-lightbox')==link.getAttribute('data-lightbox')

                  ); 

               },

               true

            );

            var setNavActivity = function(index) {

               if(index==0)

                  BX.addClass(prev,'lightbox-inactive');

               else 

                  BX.removeClass(prev,'lightbox-inactive');

               if(index==(gallery.length-1))

                  BX.addClass(next,'lightbox-inactive');

               else 

                  BX.removeClass(next,'lightbox-inactive');

            }

            var navigate = function(e) {

               e.preventDefault();

               var cur_index = BX.util.array_search(link,gallery);

               cur_index=BX.data(this,'nav')=='prev'?cur_index-1:cur_index+1;

               if(cur_index <0 || cur_index>=gallery.length)

                  return;

               var img = BX.findChild(obLightBox, { tag: 'img' });

               link = gallery[cur_index];

               BX.adjust(img, { props: { src: link.href } });

               BX.adjust(title, { html: link.hasAttribute('title')?link.getAttribute('title'):'' });

               setNavActivity(cur_index);

            };

            obLightBox = BX.create({

               tag: 'div',

               props: { className: 'lightbox' },

               events: {}, 

               children: [

                  BX.create({

                     tag: 'img',

                     props: { src: link.href },

                     events: {}

                  }),

                  title = BX.create({

                     tag: 'div',

                     props: { className: 'lightbox-title' },

                     html: link.hasAttribute('title')?link.getAttribute('title'):'',

                  }),

                  BX.create({

                     tag: 'a',

                     props: { className: 'lightbox-close', title: "Закрыть", href: "#" },

                     events: {

                        click: function(e) {

                           e.preventDefault();

                           BX.remove(obLightBox);

                        }

                     }

                  }),

                  prev = BX.create({

                     tag: 'a',

                     props: { className: 'lightbox-prev lightbox-inactive', title: "Предыдущий", href: "#" },

                     attrs: { 'data-nav': 'prev' },

                     events: {

                        click: navigate

                     }

                  }),

                  next = BX.create({

                     tag: 'a',

                     props: { className: 'lightbox-next lightbox-inactive', title: "Следующий", href: "#" },

                     attrs: { 'data-nav': 'next' },

                     events: {

                        click: navigate

                     }

                  })                        

               ]

            });

            if(!!gallery && gallery.length>1) {

               setNavActivity(BX.util.array_search(link,gallery));                     

            } else {

               BX.remove(prev);

               BX.remove(next);

            }                  

            BX.append(obLightBox,document.getElementsByTagName("BODY")[0]);

         }, this));

      }

      return false;

   },this);

   

   lightBox();



});