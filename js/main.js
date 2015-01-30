(function(){

	$(document).ready(function(){

    checkScrollPosition();
		$(window).scroll(checkScrollPosition); 
	});

  var $login = $('.login');
  var $cart = $('.cart');
  var $search = $('.search');
  var $sub = $('.side-menu__subscribe');
  var $sideMenuNav = $('.side-menu');
  var $originalPosition = $('.header-menu__right-menu-items');
  var $container = $('<div>');

  function checkScrollPosition(){

      if($(window).scrollTop() >= 418){
      
        $login.addClass('movable-center');
        $search.addClass('movable-search'); 

        $container.append($search);
        $container.append($login);
        $container.append($cart);

        $sub.addClass('hide-subscribe');
        $sideMenuNav.append($container);

      }else {

        $login.removeClass('movable-center');
        $search.removeClass('movable-search');
        $sub.removeClass('hide-subscribe');

        $originalPosition.append($login);
        $originalPosition.append($cart);
        $originalPosition.append($search);

      }
    }


})();

