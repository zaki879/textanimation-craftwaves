// Select all the h1 elements
var textWrappers = document.querySelectorAll('.ml12');

// Loop through each h1 element and wrap each letter in a span
textWrappers.forEach(textWrapper => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Set up the timeline to run sequentially
var animationTimeline = anime.timeline({loop: true});

textWrappers.forEach((textWrapper, index) => {
    animationTimeline
    .add({
        targets: textWrapper.querySelectorAll('.letter'),
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    })
    .add({
        targets: textWrapper.querySelectorAll('.letter'),
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
        offset: '-=800' // Start next animation before the previous fully finishes
    });
});
