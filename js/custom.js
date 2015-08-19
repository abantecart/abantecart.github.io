$(document).ready(function() {
	// Start writing your custom functions here.
	// All the necessary pluigns are already loaded.
	
	//Activate click on submenus with URLs
	$('.sub_menu_link').on('click',function() {
		var href = $(this).attr('href');
		if ( href  && href != '#') {
			location = href;	
		}
	});
	
	//Automaticaly open submenus for selected menus
	$('.active-submenu').children('ul').show();
		
});