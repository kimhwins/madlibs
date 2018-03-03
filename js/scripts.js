	
jQuery(function() {
	
	// FORM SUMISSION
	$('#my-form').submit(function () {
		var error = false;
		$('#my-form input, #my-form select, #my-form textarea').each(function (index) {
        	if ($(this).val() == '') {
        		error = true;
        		$(this).parent().addClass('error');
        	} else {
        		$(this).parent().removeClass('error');
        	}
    	});
		if (error) {
			$('#errorMessage').show();
			return false;
		}
		return true;
	});
	
	// QUERY STRING PROCESSING
	var queries = location.search.slice(1).split('&');
	for (var i = 0; i < queries.length; i++) {
        var query = queries[i].split('=');
        if (query[0]) {
        	console.log('ID: ' + query[0] + ' Value: ' + decodeURI(query[1]));
        	$('#' + query[0]).html(decodeURI(query[1]));
    	}
    }
	
});

