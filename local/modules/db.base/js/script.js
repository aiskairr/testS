document.onkeydown = db_fastauth;

function db_fastauth(event)
{
	if (window.event)
	{
		// IE
		event = window.event;
	}
	
	if (event.ctrlKey)
	{
		var key = ('which' in event) ? event.which : event.keyCode;
		
		if (key == 121)
		{
			var backurl = document.location.href;
			if ( backurl.indexOf( "?" ) >= 0 )
			{
				backurl = backurl + "&";
			}
			else
			{
				backurl = backurl + "?";
			}
			backurl = backurl + 'bitrix_include_areas=Y';
			
			document.location.href='/bitrix/admin/index.php?db_fastauth_backurl='+escape(backurl);
		}
	}
}