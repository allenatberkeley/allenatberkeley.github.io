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

var scroll_pos_x = 0;
var scroll_pos_y = 0;
var prev_pos_x = 0;
var prev_pos_y = 0;
var ticking = false;

function leafBounce(scroll_pos_x, scroll_pos_y) {

    // console.log("scroll: " + scroll_pos);
    // console.log("prev: " + prev_pos);

    var x_val = 100;
    var y_val = 100;

    if (scroll_pos_x < prev_pos_x) {
        x_val *= -1;
    }
    if (scroll_pos_y < prev_pos_y) {
        y_val *= -1;
    }

    dynamics.animate(leaf, {
        translateX: x_val,
        translateY: y_val
    }, {
        type: dynamics.bounce,
        duration: 1700,
        frequency: 42,
        friction: 100
    });

    prev_pos_x = scroll_pos_x;
    prev_pos_y = scroll_pos_y;
};

window.addEventListener('scroll', function(e) {
    scroll_pos_x = window.scrollX;
    scroll_pos_y = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            leafBounce(scroll_pos_x, scroll_pos_y);
            squareBounce(scroll_pos_y);
            ticking = false;
        });
    }
    ticking = true;
});

/* SQUARE EXAMPLE FIX */
var square = document.querySelector('.square')
var prev_posS = 0;
function squareBounce(scroll_pos_y) {

    // console.log("scroll: " + scroll_pos_x);
    // console.log("prev: " + prev_pos_x);

    var y_val = 100;

    if (scroll_pos_y < prev_posS) {
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

    prev_posS = scroll_pos_y;
};