import { createTimeline, stagger, utils, splitText, animate, spring } from 'https://esm.sh/animejs';;

//list font hover animation
const listfont = document.querySelectorAll('.listfont');
listfont.forEach(listfonts => {
  listfonts.addEventListener('mouseover', () => {
    animate(listfonts, {
      color: "#ffffffff",
      scale: 1.1,
      duration: 300,
      ease: 'outBack(1.7)'
    })
  })
  listfonts.addEventListener('mouseout', () => {
    animate(listfonts, {
      color: "#E7FBB4",
      scale: 1,
      ease: 'outBack(1.7)'
    })
  })
  listfonts.addEventListener('click', () => {
    animate(listfonts, {
      color: ["#ffffffa2", "#ffffffff"],
      scale: [1.02, 1.1],
      duration: 500,
      ease: 'outBack(1.7)'
    })
  })
})

//navbar font animation & listbar & menubar slide-in animation
const menubar = document.querySelector('.menubar')
const listbar = document.querySelector('.list-background')
const { chars } = splitText('.split', {
  words: { wrap: 'clip' },
  chars: true,
});

createTimeline({
  loop: false,
  defaults: { ease: 'inOut(3)', duration: 650 },
  direction: "normal"
})
  .add(menubar, {
    translateY: [-100, 0],
    duration: 1000,
    ease: 'outExpo'

  }, 0)
  .add(listbar, {
    translateX: [-200, 0],
    duration: 1000,
    ease: 'outExpo'

  }, 0)
  .add(chars, {
    y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
    delay: stagger(125)
  }, 10)
  .init();

//menu icon hover animation
const menuicon = document.querySelectorAll('.menu-icons-animation')
menuicon.forEach(element => {
  element.addEventListener('mouseover', () => {
    animate(element, {
      scale: 1.2,
      ease: spring({
        bounce: 0.65,
        duration: 400
      })

    })
  })

  element.addEventListener('mouseout', () => {
    animate(element, {
      scale: 1,
      ease: spring({
        bounce: 0.65,
        duration: 400
      })

    })
  })
  if (element === menuicon[1]) return;
  element.addEventListener('click', () => {
    animate(element, {
      color: "#000000a2",
      scale: [1.02, 1.2],
      duration: 1000,
      ease: 'outBack(1.7)'
    })
  })

})

//search bar colour differing animation while focused
const searchbar = document.getElementsByClassName('menuSearch')[0]
searchbar.addEventListener('focus', () => {
  animate(searchbar, {
    rotateX: 25,
    color: "#000000ff",
    boxShadow: "0px 5px 0px rgba(0, 0, 0, 0.2),inset 1px 1px 20px 0px rgba(0, 0, 0, 0.082)",
    duration: 500,
    direction: "alternate"
  })
  animate(searchicon, {
    fill: "#000000ff",
    rotateX: 30,
    easing: "easeOutElastic(1, .6)",
    duration: 500,
    direction: "alternate"
  })

})

//search bar colour differing animation while focused out
searchbar.addEventListener('blur', () => {
  animate(searchbar, {
    rotateX: 0,
    color: "#00000088",
    boxShadow: "inset 1px 1px 20px 0px rgba(0, 0, 0, 0.082), inset -1px -1px 0px 0px rgba(255, 255, 255, 0.082)",
    easing: "easeOutElastic(1, .6)",
    duration: 500,
    direction: "alternate"
  })
  animate(searchicon, {
    rotateX: 0,
    fill: "#00000088",
    easing: "easeOutElastic(1, .6)",
    duration: 500,
    direction: "alternate"
  })
})

//search icon animation on pressing enter
const searchicon = document.getElementById('search-icon')
searchbar.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    animate(searchicon, {
      rotate: [0, 360],
      scale: [1, 1.2],
      duration: 400,
      easing: "easeOutQuart",
      onComplete: e => {
        animate(searchicon, {
          delay: 1,
          scale: 1,
          ease: spring({
            bounce: 0.65,
            duration: 400
          })
        })
      }
    });

  }
});

document.querySelector('.theme-toggle').addEventListener('click', function () {
  this.classList.toggle('theme-toggle--toggled');

});


