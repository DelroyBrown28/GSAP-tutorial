const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('nav-open');


// Stops animation from playing unless refreshed
const tl = new TimelineLite({
    paused: true,
    reversed: true
});

// Cover will animate first...
tl.to('.cover', 1, {
        width: '60%',
        ease: Power2.easeOut,
    })
// ...and then thenav
    .to('nav', 1, {
        height: '100%',
        ease: Power2.easeOut,
    }, '-= 0.3')
// The opened nav will go from opacity0 to opacity 1
    .fromTo('.nav-open', 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut,
    }, {
        opacity: 1,
        x: 0,
// onComplete the pointer events will be reactivated
        onComplete: function () {
            navOpen.style.pointerEvents = "auto";
        }
    })

// Button to toggle animation
navButton.addEventListener('click', () => {

    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl)
})

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}