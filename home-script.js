//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}
 
  
   
/////////   HEADER ANIMATION    ///////////

// Fade Up Hero 01 
var fadeUpHero01 = anime({
  targets: '.fu-hero-01 .tricksword',
  translateY: [100,0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 150 * i,
  loop: false,
  autoplay: false,
});
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero01.play();
    fadeUpHero01.restart();
  } else {
    fadeUpHero01.seek(0);
  }
});


////////////////////   PROGRESS STEPS    ////////////////////


//////// FADE OUT STEPS //////// 

// Fade Out Step 01
var fadeOutStep01 = anime.timeline({
  targets: '.fu-step-01 .tricksword',
  translateY: [0,"-1em"],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false
});

// Fade Out Step 02
var fadeOutStep02 = anime.timeline({
  targets: '.fu-step-02 .tricksword',
  translateY: [0,"-1em"],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false
});

// Fade Out Step 03
var fadeOutStep03 = anime.timeline({
  targets: '.fu-step-03 .tricksword',
  translateY: [0,"-1em"],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false
});

// Fade Out Step 04
var fadeOutStep04 = anime.timeline({
  targets: '.fu-step-04 .tricksword',
  translateY: [0,"-1em"],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false
});


//////// FADE IN STEPS ////////

// Fade Up Step 01
var fadeUpStep01 = anime.timeline({
  targets: '.fu-step-01 .tricksword',
  translateY: ["2em",0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false,
});


// Fade Up Step 02
var fadeUpStep02 = anime.timeline({
  targets: '.fu-step-02 .tricksword',
  translateY: ["2em",0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false,
});

// Fade Up Step 03
var fadeUpStep03 = anime.timeline({
  targets: '.fu-step-03 .tricksword',
  translateY: ["2em",0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false,
});


// Fade Up Step 04
var fadeUpStep04 = anime.timeline({
  targets: '.fu-step-04 .tricksword',
  translateY: ["2em",0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 100 + 100 * i,
  loop: false,
  autoplay: false,
});


//////////////////// FADE OUT PARAGRAPHS ////////////////////

// Fade Out Paragraph 01
var fadeOutParagraph01 = anime.timeline({
  targets: '.fu-p-01',
  translateY: [0,"-100%"],
  opacity: [1,0],
  easing: "easeOutExpo",
  duration: 400,
  delay: (el, i) => 300 + 100 * i,
  loop: false,
  autoplay: false,
});


//////////////////// FADE IN PARAGRAPHS ////////////////////

// Fade In Paragraph 01
var fadeInParagraph01 = anime.timeline({
  targets: '.fu-p-01',
  translateY: ["-100%",0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 400,
  delay: (el, i) => 300 + 100 * i,
  loop: false,
  autoplay: false,
});


//////////// Play animation when scrolled into view ////////////

//REST STEPS
$('#scroll-anim').on('inview', function(event, isInView) {
  if (isInView) {
    fadeOutStep01.seek(0)
    // $('#number-step-01').addClass('hidden');
    // $('#headline-step-01').addClass('hidden');
    // $('#divider-step-01').addClass('hidden');
    // $('#headline-step-02').addClass('hidden');
    // $('#number-step-02').addClass('hidden');
    // $('#divider-step-02').addClass('hidden');
    // $('#headline-step-03').addClass('hidden');
    // $('#number-step-03').addClass('hidden');
    // $('#divider-step-03').addClass('hidden');
    // $('#headline-step-04').addClass('hidden');
    // $('#number-step-04').addClass('hidden');
    // $('#divider-step-04').addClass('hidden');
  }else {
  }
});

//Fade in steps
document.body.addEventListener('wheel', checkScrollDirection);

var direction = ""

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    direction = "UP"
  } else {
    direction = "DOWN"
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

//Fade in steps
$('#trigger-step-01').on('inview', function(event, isInView) {
  if(direction == "UP"){
  } else {
  	if (isInView) {
        fadeUpStep01.play();
        fadeInParagraph01.play();
        $('#headline-step-01').removeClass('step-idle');
        $('#number-step-01').removeClass('step-idle');
        $('#divider-step-01').removeClass('hidden');
        $('#p-step-01').removeClass('step-idle');
        $('#headline-step-02').addClass('hidden');
        $('#number-step-02').addClass('hidden');
        $('#divider-step-02').addClass('hidden');
        $('#p-step-02').addClass('hidden');
    }else {
    }
  }
});


$('#trigger-step-02').on('inview', function(event, isInView) {
  if(direction == "UP"){
  } else {
    if (isInView && $('#headline-step-02').hasClass('hidden')) {
        fadeUpStep02.play();
        fadeOutParagraph01.play();
        $('#headline-step-01').addClass('step-idle');
        $('#number-step-01').addClass('step-idle');
        $('#p-step-01').addClass('step-idle');
        $('#headline-step-02').removeClass('hidden');
        $('#number-step-02').removeClass('hidden');
        $('#divider-step-02').removeClass('hidden');
        $('#p-step-02').removeClass('hidden');
    }else {
    }
  }
});

$('#trigger-step-03').on('inview', function(event, isInView) {
  if(direction == "UP"){
  } else {
    if (isInView && $('#headline-step-03').hasClass('hidden')) {
      fadeUpStep03.play();
      $('#headline-step-02').addClass('step-idle');
      $('#number-step-02').addClass('step-idle');
      $('#p-step-02').addClass('step-idle');
      $('#headline-step-03').removeClass('hidden');
      $('#number-step-03').removeClass('hidden');
      $('#divider-step-03').removeClass('hidden');
      $('#p-step-03').removeClass('hidden');
    }else {
    }
  }
});
  


$('#trigger-step-04').on('inview', function(event, isInView) {
  if(direction == "UP"){
  } else {
    if (isInView && $('#headline-step-04').hasClass('hidden')) {
      fadeUpStep04.play();
      $('#headline-step-03').addClass('step-idle');
      $('#number-step-03').addClass('step-idle');
      $('#p-step-03').addClass('step-idle');
      $('#headline-step-04').removeClass('hidden');
      $('#number-step-04').removeClass('hidden');
      $('#divider-step-04').removeClass('hidden');
      $('#p-step-04').removeClass('hidden');
    }else {
    }
  }
});




/////////   PROJECTS    ///////////

$('#projects-wrapper').on('inview', function(event, isInView) {
  if (isInView) {
    $('.body').toggleClass('background-dark-green');
  }else {   
    $('.body').toggleClass('background-dark-green'); 
  }
});

/////////   HOME CONTACT    ///////////

// Fade Up Contact Intro
var fadeUpContact = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpContact
  .add({
    targets: '.fu-contact .tricksword',
    translateY: ["4em",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 80 * i
  })
  
// Play animation when scrolled into view
$('#contact-trigger').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpContact.play();
    fadeUpContact.restart();
  } else {
    fadeUpContact.seek(0);
  }
});

// Fade Up Hover Home Contact Form Button
var fadeUpHover = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHover 
.add({
  targets: '.fade-up-hover .tricksword',
  translateY: [50,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 50 + 50 * i
})

$('.link-button').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHover.play();
  } else {
  }
});

// Play animaton when hovered in
$( ".link-button" ).mouseenter(function() {
  fadeUpHover.play();
  fadeUpHover.restart();
});
  
