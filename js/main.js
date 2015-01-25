(function(){

	$(document).ready(function(){
    checkScrollPosition();
		$(window).scroll(checkScrollPosition); 
    $('.member > img').hover(addOverlay);
	});

  function checkScrollPosition(){

      if($(window).scrollTop() >= 418){

        $('#subscribe').hide();
        $('#scroll-search').show();
      }else {
        $('#subscribe').show();
        $('#scroll-search').hide();
      }
    }

  function addOverlay(){
    // $(this).addClass('hover');
  }

})();

