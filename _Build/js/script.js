"use strict";

import * as Utility from "./libs/utility";

(function(){
	if(navigator.userAgent === 'jsdom'){ return; }
	
    require('fastclick')(document.body);

    // Used for capturing pdf as part of preprocess deploy
	if (Utility.parse_query_string(window.location.search.substring(1)).capture === 'true') {
		document.querySelector('html').classList.add('capture');
		window.capture = true;
	}

	document.querySelector('html').classList.remove('loading');
	document.querySelector('html').classList.add('loaded');
})();