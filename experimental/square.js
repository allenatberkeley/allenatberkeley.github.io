var square = document.querySelector('.square')
//var svg = document.querySelector('.square svg')

function squareBounce() {
    dynamics.animate(square, {
        translateY: 100
    }, {
        type: dynamics.bounce,
        duration: 1700,
        frequency: 42,
        friction: 100,
    });
};

// function verticalSpringUp() {
//     dynamics.animate(square, {
//         translateY: -100
//     }, {
//         type: dynamics.spring,
//         duration: 1200,
//         frequency: 600,
//         friction: 200,
//         delay: 100,
//         complete: verticalSpringDown
//     })
// }

// verticalSpringDown()