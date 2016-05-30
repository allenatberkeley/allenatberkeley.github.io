var square = document.querySelector('.square')

// window.onscroll = function() {
//     dynamics.animate(square, {
//         translateY: 100
//     }, {
//         type: dynamics.bounce,
//         duration: 1700,
//         frequency: 42,
//         friction: 100,
//     });
// };

var scroll_pos = 0;
var prev_pos = 0;
var ticking = false;

function squareBounce(scroll_pos) {
    var y_val = 100;

    if (scroll_pos < prev_pos) {
        y_val *= -1;
    }

    dynamics.animate(square, {
        translateY: y_val;
    }, {
        type: dynamics.bounce,
        duration: 1700,
        frequency: 42,
        friction: 100,
    });
};

window.addEventListener('scroll', function(e) {
  scroll_pos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
        squareBounce(scroll_pos);
        ticking = false;
    });
  }
  ticking = true;
});