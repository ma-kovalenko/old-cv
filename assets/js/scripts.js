// read more для блоку "Чому вибрати нас"

jQuery(function() {
    jQuery( ".button1" ).click(function() {
      jQuery(this).toggleClass( "hide_more", 400, "easeOutSine" );
      jQuery( ".readmore1" ).toggleClass( "show_more_text", 500, "easeOutSine" );
    });
        jQuery( ".button2" ).click(function() {
        jQuery(this).toggleClass( "hide_more", 400, "easeOutSine" );
      jQuery( ".readmore2" ).toggleClass( "show_more_text", 500, "easeOutSine" );
    });
        jQuery( ".button3" ).click(function() {
        jQuery(this).toggleClass( "hide_more", 400, "easeOutSine" );
      jQuery( ".readmore3" ).toggleClass( "show_more_text", 500, "easeOutSine" );
    }); 

}); 


//плавний скрол меню до секции

jQuery(document).ready(function(){
	jQuery(".scroll-item").on("click","a", function (event) {
        
        event.preventDefault();

		//Забираємо Айди з Урла
		var id  = jQuery(this).attr('href'),

		//Получаєм висоту до якоря
			top = jQuery(id).offset().top;
		
		//Анімуємо перехід до якоря
		jQuery('body,html').animate({scrollTop: top-60}, 1500);
	});
});