import { createTimeline, stagger, utils, splitText, animate, spring } from 'https://esm.sh/animejs';;


const searchbar = document.getElementsByClassName('menuSearch')[0]
const searchicon = document.getElementById('search-icon')
const menuicons = document.querySelectorAll('.menu-icons')
const menutext = document.querySelectorAll('.menu-text')


//menu icons animation on hover
menuicons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    animate(icon, {
      scale: 1.1,
      duration: 300,
      color: "#2b434eff",
      ease: spring({
        bounce: 0.5,
        duration: 300
      })
    })
    

  })
  icon.addEventListener('mouseleave', () => {
    animate(icon, {
      scale: 1,
      duration: 300,
      color: "#ffffff",
      ease: spring({
        bounce: 0.5,
        duration: 300
      })
    })
  })
})




//search bar colour differing animation while focused
searchbar.addEventListener('focus', () => {
  animate(searchbar, {
    rotateX: 25,
    boxShadow: "0px 5px 0px rgba(0, 0, 0, 0.2),inset 1px 1px 20px 0px rgba(0, 0, 0, 0.082)",
    color: "#ffffffff",
    duration: 500,
    direction: "alternate"
  })
  animate(searchicon, {
    fill: "#ffffffff",
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
    color: "#ffffff67",
    boxShadow: "inset 1px 1px 20px 0px rgba(0, 0, 0, 0.082), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.082)",
    easing: "easeOutElastic(1, .6)",
    duration: 500,
    direction: "alternate"
  })
  animate(searchicon, {
    rotateX: 0,
    fill: "#ffffff67",
    easing: "easeOutElastic(1, .6)",
    duration: 500,
    direction: "alternate"
  })
})

//search icon animation on pressing enter
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

