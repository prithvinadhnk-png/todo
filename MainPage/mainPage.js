import { createTimeline, stagger, utils, splitText, animate, spring } from 'https://esm.sh/animejs';;


const searchbar = document.getElementsByClassName('menuSearch')[0]
const searchicon = document.getElementById('search-icon')
const menutext = document.querySelectorAll('.menu-text')




//search bar colour differing animation while focused
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


document.querySelector('.theme-toggle').addEventListener('click', function() {
    this.classList.toggle('theme-toggle--toggled');

});

// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-toggle');
    if (!themeBtn) return;

    // Ensure smooth animated scaling (applied via JS so no CSS changes needed)
    themeBtn.style.transition = 'transform 160ms cubic-bezier(.2,.8,.2,1)';
    themeBtn.style.transformOrigin = 'center';
    themeBtn.style.willChange = 'transform';

    // Ensure aria state exists
    if (themeBtn.getAttribute('aria-pressed') === null) {
        themeBtn.setAttribute('aria-pressed', 'false');
    }

    // Toggle scale on click: larger when "pressed"/toggled on, normal otherwise
    themeBtn.addEventListener('click', () => {
        const pressed = themeBtn.getAttribute('aria-pressed') === 'true';
        themeBtn.setAttribute('aria-pressed', String(!pressed));
        themeBtn.style.transform = !pressed ? 'scale(1.18)' : 'scale(1)';
    });

    // Optional: quick press feedback (keeps final scale consistent with toggle state)
    themeBtn.addEventListener('pointerdown', () => {
        themeBtn.style.transition = 'transform 80ms';
        themeBtn.style.transform = 'scale(1.05)';
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(evt => {
        themeBtn.addEventListener(evt, () => {
            themeBtn.style.transition = 'transform 160ms cubic-bezier(.2,.8,.2,1)';
            const pressed = themeBtn.getAttribute('aria-pressed') === 'true';
            themeBtn.style.transform = pressed ? 'scale(1.18)' : 'scale(1)';
        });
    });
});

// ...existing code...
