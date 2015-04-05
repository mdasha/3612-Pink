var titleElem = document.getElementsByClassName("main-navigation__list");
var pageHeaderLogo = document.getElementsByClassName("page-header__logo");
var downloadTitle = document.getElementsByClassName("download__title--open");

titleElem[0].onclick = function() {
  var menu = this.parentNode
  if (hasClass(menu, 'main-navigation--open')) {
    removeClass(menu, 'main-navigation--open');
  } else {
    addClass(menu, 'main-navigation--open');
  }
  
  var logo = pageHeaderLogo[0];
  if (hasClass(logo, 'page-header__logo--close')) {
    removeClass(logo, 'page-header__logo--close');
  } else {
    addClass(logo, 'page-header__logo--close');
  }
  
    var download = downloadTitle[0];
  if (hasClass(download, 'download__title--invisible')) {
    removeClass(download, 'download__title--invisible');
  } else {
    addClass(download, 'download__title--invisible');
  }

}



// -------------- helpers --------------

function addClass(el, cls) {
	for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return;
	}
  if (el.className == "") el.className = cls
	else el.className += ' '+cls
}

function hasClass(el, cls) {
	for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return true;
	}
}

function removeClass(el, cls) {
  for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) c.splice(i,1);
	}

	el.className = c.join(' ');
}
