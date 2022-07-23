//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//}
 
  
   
/////////   HEADER ANIMATION    ///////////

// Fade Up Hero 01 
var fadeUpHero01 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHero01 
  .add({
    targets: '.fu-hero-01 .tricksword',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 150 * i
  })
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero01.play();
    fadeUpHero01.restart();
  } else {
    fadeUpHero01.seek(0);
  }
});

// Fade Up Hero 02 
var fadeUpHero02 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHero02
  .add({
    targets: '.fu-hero-02 .tricksword',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 350 + 150 * i
  })
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero02.play();
    fadeUpHero02.restart();
  } else {
    fadeUpHero02.seek(0);
  }
});

// Fade Up Hero 03 
var fadeUpHero03 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHero03
  .add({
    targets: '.fu-hero-03 .tricksword',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 550 + 150 * i
  })
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero03.play();
    fadeUpHero03.restart();
  } else {
    fadeUpHero03.seek(0);
  }
});


// Fade Up Hero 04
var fadeUpHero04 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHero04
  .add({
    targets: '.fu-hero-04 .tricksword',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 600 + 150 * i
  })
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero04.play();
    fadeUpHero04.restart();
  } else {
    fadeUpHero04.seek(0);
  }
});


// Fade Up Hero 05
var fadeUpHero05 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpHero05
  .add({
    targets: '.fu-hero-05 .tricksword',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 1000 + 150 * i
  })
  
// Play animation when scrolled into view
$('#hero').on('inview', function(event, isInView) {
  if (isInView) {
    fadeUpHero05.play();
    fadeUpHero05.restart();
  } else {
    fadeUpHero05.seek(0);
  }
});





/////////   PROGRESS STEPS    ///////////


//////////////////// FADE OUT STEPS ////////////////////

// Fade Out Step 01
var fadeOutStep01 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeOutStep01
  .add({
    targets: '.fu-step-01 .tricksword',
    translateY: [0,"-1em"],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })


// Fade Out Step 02
var fadeOutStep02 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeOutStep02
  .add({
    targets: '.fu-step-02 .tricksword',
    translateY: [0,"-1em"],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })


// Fade Out Step 03
var fadeOutStep03 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeOutStep03
  .add({
    targets: '.fu-step-03 .tricksword',
    translateY: [0,"-1em"],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })


// Fade Out Step 04
var fadeOutStep04 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeOutStep04
  .add({
    targets: '.fu-step-04 .tricksword',
    translateY: [0,"-1em"],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })



//////////////////// FADE IN STEPS ////////////////////

// Fade Up Step 01
var fadeUpStep01 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpStep01
  .add({
    targets: '.fu-step-01 .tricksword',
    translateY: ["2em",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })



// Fade Up Step 02
var fadeUpStep02 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpStep02
  .add({
    targets: '.fu-step-02 .tricksword',
    translateY: ["2em",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })



// Fade Up Step 03
var fadeUpStep03 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpStep03
  .add({
    targets: '.fu-step-03 .tricksword',
    translateY: ["2em",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })



// Fade Up Step 04
var fadeUpStep04 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpStep04
  .add({
    targets: '.fu-step-04 .tricksword',
    translateY: ["2em",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 100 + 100 * i
  })

//////////////////// FADE OUT PARAGRAPHS ////////////////////

// Fade Out Paragraph 01
var fadeOutParagraph01 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeOutParagraph01
  .add({
    targets: '.fu-p-01',
    translateY: [0,"100%"],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 400,
    delay: (el, i) => 300 + 100 * i
  })
  
  
//////////////////// FADE IN PARAGRAPHS ////////////////////

// Fade In Paragraph 01
var fadeInParagraph01 = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeInParagraph01
  .add({
    targets: '.fu-p-01',
    translateY: ["-100%",0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 400,
    delay: (el, i) => 300 + 100 * i
  })

//////////// Play animation when scrolled into view ////////////

//REST STEPS
$('#scroll-anim').on('inview', function(event, isInView) {
  if (isInView) {
    fadeOutStep01.play()
    fadeOutStep01.restart()
    fadeOutParagraph01.play()
    fadeOutParagraph01.restart()
    $('#divider-step-01').addClass('hidden');
  }else {
  }
});

//Fade in steps
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

var direction = ""

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log('UP');
    direction = "UP"
  } else {
    console.log('Down');
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
    console.log("Dir"+direction)
  } else {
    console.log("Dir"+direction)
  	if (isInView) {
        console.log("Sono in view");
        fadeUpStep01.play();
        fadeInParagraph01.play();
        $('#headline-step-01').removeClass('step-idle');
        $('#number-step-01').removeClass('step-idle');
        $('#divider-step-01').removeClass('hidden');
        $('#p-step-01').removeClass('step-idle');
    }else {

    }
    }
  });


$('#trigger-step-05').on('inview', function(event, isInView) {
  if (isInView) {
    $('#headline-step-04').addClass('step-idle');
    $('#p-step-04').addClass('step-idle');
  }else {    
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
  
