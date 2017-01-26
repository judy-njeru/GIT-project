// $(document).ready(function() {
// 	$('.open-menu').click(function(){
// 		$('body').toggleClass('menu-opened');Toggle between adding and removing the "menu-opened" class name from selected
// 		 elements:This method checks each element for the specified class names.
// 		 The class names are added if missing, and removed if already set - This creates a toggle effect.
// 		return false;
// 	});
// });


$(document).ready(function(){
		$('<span class="fader"/>').appendTo('header');
		$('.open-menu').click(function () {
			$('body').toggleClass('menu-opened');
			return false;
		}); 

		$('.fader').click(function(){
			$('body').removeClass('menu-opened');
		});
		
});