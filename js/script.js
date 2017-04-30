var render = new Framework7({
    animateNavBackIcon: true,
    precompileTemplates: true,
	swipeBackPage: false,
	swipePanelOnlyClose: true,
	pushState: true,
    template7Pages: true
});

var mainView = render.addView('.view-main', {
    dynamicNavbar: false,
});

render.onPageInit('photos', function (page) {
	$(".swipebox").swipebox();
	$("a.switcher").on("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#photoslist");
		var classNames = $(this).attr('class').split(' ');
	});	
})