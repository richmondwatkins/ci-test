(function(){

  var $login;
  var $cart;
  var $search;
  var $sub;
  var $sideMenuNav;
  var $originalPosition;
  var $container;
  var $viewWindow;

	$(document).ready(function(){
    $login = $('.login');
    $cart = $('.cart');
    $search = $('.search');
    $sub = $('.side-menu__subscribe');
    $sideMenuNav = $('.side-menu');
    $originalPosition = $('.header-menu__right-menu-items');
    $container = $('<div>');
    $viewWindow = $(window);

    checkScrollPosition();

    window.onscroll = checkScrollPosition;
	});

  function checkScrollPosition(){

      if($viewWindow.scrollTop() >= 480){
      
        $login.addClass('movable-center');
        $search.addClass('movable-search'); 

        $container.append($search);
        $container.append($login);
        $container.append($cart);

        $sub.addClass('movable-hide-subscribe');
        $sideMenuNav.append($container);

      }else {

        $login.removeClass('movable-center');
        $search.removeClass('movable-search');
        $sub.removeClass('movable-hide-subscribe');

        $originalPosition.append($login);
        $originalPosition.append($cart);
        $originalPosition.append($search);

      }
    }


})();

