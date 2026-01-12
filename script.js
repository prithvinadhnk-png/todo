
import { createTimeline, stagger, utils, splitText, animate, spring } from 'https://esm.sh/animejs';;

const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => {
});
const { chars } = splitText('.split', {
  words: { wrap: 'clip' },
  chars: true,
});

const { words } = splitText('.splitPara', {
  words: { wrap: 'clip' },
  chars: true,
});



createTimeline({
  loop: false,
  defaults: { ease: 'inOut(3)', duration: 650 },
  direction: "normal"
})
  .add(chars, {
    y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    delay: stagger(125)
  })
  .add(words, {
    y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    delay: stagger(125),
  }, '50') // overlap previous animation
  .init();


function isMobile() {
  return window.innerWidth <= 992;
}

function desktopAnimation() {
  createTimeline({
    ease: 'easeOutBack',
    duration: 300
  })

    .add(buttons[0], {
      translateX: [100, 0],
    })
    .add(buttons[1], {
      translateX: [-100, 0],
    }, '100')
}

function mobileAnimation() {
  createTimeline({
    ease: 'easeOutBack',
    duration: 300
  })

    .add(buttons[0], {
      translateY: [50, 0],
    })
    .add(buttons[1], {
      translateY: [-50, 0],
    }, '100')
}

const openbtn = document.getElementById("open")
const closebtn = document.getElementById("close")
const popup = document.getElementById("SignUpPopUp")

openbtn.addEventListener("click", () => {
  popup.style.display = "block";
  animate(popup, {
    translateY: [100, 0],
    opacity: [0, 1],
    ease: spring({
      bounce: 0.5,
      duration: 628
    })
  })
})

closebtn.addEventListener("click", () => {

  animate(popup, {
    translateY: [0,1000],
    duration:600,
    ease: spring({
      bounce: 0.5,

    }),
    loop:0,
    alternate:true,
    onComplete: () => {
      popup.style.display='none'
    }
  })
 
})


if (isMobile()) {
  mobileAnimation()
} else {
  desktopAnimation()
}



