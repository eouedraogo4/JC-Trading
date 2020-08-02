// JavaScript source code
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document .querySelector(".navbar").style.backgroundColor = 'black';
    document .querySelector(".navbar").style.padding = '0.5em';

    document .querySelector('#logo').style.width = '50px';
    document .querySelector('#logo').style.height = '60px';

    document .querySelector('.navbar-brand').style.fontSize = '1.5em';
} else {
    document .querySelector(".navbar").style.backgroundColor = 'rgba(0, 0, 0, 0.50)';
    document .querySelector(".navbar").style.padding = '1em';

    document .querySelector('#logo').style.width = '70px';
    document .querySelector('#logo').style.height = '80px';

    document .querySelector('.navbar-brand').style.fontSize = '2em';
}
}