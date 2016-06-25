var QueryString = new Array();

function unspace( qs_element ) 
{
	return qs_element.split( '+' ).join( ' ' );
}

if ( location.search.length != null
&& location.search.length > 1 ) {
	var qs_query = location.search.substring( 1, location.search.length );
	if (qs_query.indexOf('&')>0)
		var qs_pairs = qs_query.split( '&' );
	else
		var qs_pairs = qs_query.split( '%26' );

	for ( var qs_index = 0; qs_index < qs_pairs.length; qs_index++ ) 
	{
		var qs_element = qs_pairs[qs_index].split( '=' );
		QueryString[qs_element[0]] = unspace( unescape( qs_element[1] ) );
	}
} else {
}
//using: var myVar = QueryString["parameter"];
