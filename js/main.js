// When the user scrolls the page, execute stickyHeader() 
window.onscroll = function() {stickyHeader()}

function navFunction () {
  var x = document.getElementById('navigation')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }

  var y = document.getElementById('nav-collapse')
  if (y.className === 'nav-right') {
    y.className = 'nav-left'
  } else {
    y.className = 'nav-right'
  }
}

function stickyHeader() {
  let nav = document.getElementById('navigation')
  // get offset position of navbar
  let sticky = nav.offsetTop


  if (window.pageYOffset > sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}


