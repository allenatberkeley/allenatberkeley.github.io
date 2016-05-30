var leaf = document.querySelector('.leaf')

// window.onscroll = function() {
//     dynamics.animate(leaf, {
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

function leafBounce(scroll_pos) {

    // console.log("scroll: " + scroll_pos);
    // console.log("prev: " + prev_pos);

    var y_val = 100;

    if (scroll_pos < prev_pos) {
        y_val *= -1;
    }

    dynamics.animate(leaf, {
        translateY: y_val
    }, {
        type: dynamics.bounce,
        duration: 1700,
        frequency: 42,
        friction: 100
    });

    prev_pos = scroll_pos;
};

window.addEventListener('scroll', function(e) {
  scroll_pos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
        leafBounce(scroll_pos);
        squareBounce(scroll_pos);
        ticking = false;
    });
  }
  ticking = true;
});

/* SQUARE EXAMPLE FIX */
var square = document.querySelector('.square')
var prev_posS = 0;
function squareBounce(scroll_pos) {

    // console.log("scroll: " + scroll_pos);
    // console.log("prev: " + prev_pos);

    var y_val = 100;

    if (scroll_pos < prev_posS) {
        y_val *= -1;
    }

    dynamics.animate(square, {
        translateY: y_val
    }, {
        type: dynamics.bounce,
        duration: 1700,
        frequency: 42,
        friction: 100
    });

    prev_posS = scroll_pos;
};