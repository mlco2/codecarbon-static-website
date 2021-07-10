var timer_id = 0;
var SlimStatHeartbeat = {
	request : false,
	init_http_request : function() {
		try {
			if ( window.XMLHttpRequest ) {
				request = new XMLHttpRequest;
			}
			else if ( window.ActiveXObject ) {
				request = new ActiveXObject( "Microsoft.XMLHTTP" );
			}
		}
		catch( n ) {
			return false;
		}
	},
	ping : function() {
		if ( this.request === false ) {
			this.request = this.init_http_request();
		}

		if ( request && typeof SlimStatParams.ajaxurl != 'undefined' && typeof SlimStat._id != 'undefined' ) {
			request.open( "POST", SlimStatParams.ajaxurl, true );
			request.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
			request.send( "action=wp_slimstat_heartbeat&id=" + SlimStat._id );
		}
	},
	
	call_ping : function(){
		if ( typeof SlimStat._id != 'undefined' && parseInt( SlimStat._id ) > 0 ) {
			if ( typeof timer_id != 'undefined' ){
				clearInterval( timer_id );
			}

			setInterval( SlimStatHeartbeat.ping, ( ( typeof SlimStatHeartbeatParams.frequency == "undefined" ) ? 10 : parseInt( SlimStatHeartbeatParams.frequency ) ) * 1000 );
		}
	}
}

window.onload = function(){
	timer_id = setInterval( SlimStatHeartbeat.call_ping, 1000 );
}