import { createTimeline, stagger, utils, splitText, animate, spring } from 'https://esm.sh/animejs';;

//list font hover animation
const listfont = document.querySelectorAll('.desktop_UI .listfont');
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



//menu icon hover animation
const menuicon = document.querySelectorAll('.desktop_UI .menu-icons-animation')
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
const searchbar = document.querySelector('.desktop_UI .menuSearch')
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
const searchicon = document.querySelector('.desktop_UI .search-icon')
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

//filter button selected animation
const filterbuttons = document.querySelectorAll('.desktop_UI .filter-button');
filterbuttons.forEach(button => {
  button.addEventListener('click', () => {
    animate(button, {
      "background-color": "rgba(26, 53, 22, 0.788)"
    })
    filterbuttons.forEach(otherButton => {
      if (otherButton !== button) {
        animate(otherButton, {
          "background-color": "rgba(26, 53, 22, 0.475)"
        })
      }
    })
  })
})


//Calendar Month, Year & Date display
const monthYear = document.querySelector('.desktop_UI .Month-Year');
const date = new Date();
const options = { month: 'long', year: 'numeric' };
monthYear.textContent = date.toLocaleDateString(undefined, options);

const calendarDaysContainer = document.querySelector('.desktop_UI .date');
let weekDay = 0;
let html = '';
const weekHeaders = document.querySelectorAll('.dayForAnimation');

function clearCalendar() {
  // reset counters whenever calendar is rebuilt

  const noOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const noOfDaysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  html = '';
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="dateElementGreyed d-flex justify-content-center">${noOfDaysInPrevMonth - firstDay + i + 1}</div>`
  }
  for (let i = 0; i < noOfDays; i++) {
    weekDay = (i + firstDay) % 7;
    if (weekDay % 7 == 0) {
      html += `<div class="dateElement d-flex justify-content-center"  data-day='${weekDay}' style="color:#D97742">${i + 1}</div>`
      continue;
    }
    html += `<div class="dateElement d-flex justify-content-center" data-day='${weekDay}'>${i + 1}</div>`
  }
  for (let i = 0; i < 42-(firstDay+noOfDays); i++) {
    html += `<div class="dateElementGreyed d-flex justify-content-center">${i + 1}</div>`
  }
  calendarDaysContainer.innerHTML = html;

  // attach hover listeners to the newly created date elements
  calendarDaysContainer.addEventListener('mouseover', e => {
    if (!e.target.classList.contains('dateElement')) return;
    animationHover(e.target, true);
  })
  calendarDaysContainer.addEventListener('mouseout', e => {
    if (!e.target.classList.contains('dateElement')) return;
    animationHover(e.target, false);
  })
}
function animationHover(element, isHovering) {
 
  if (!isHovering){
    animate(element, {
        scale: [1],
        duration: 300,
        easing: "easeOutElastic(1, .6)",
        direction: "alternate"
      })
      if (element.dataset.day == 0) {
        animate(weekHeaders[element.dataset.day], {
          scale: [1],
          duration: 300,
          easing: "easeOutElastic(1, .6)",
          direction: "alternate",
          color: '#D97742'
        })
        return;
      }
      animate(weekHeaders[element.dataset.day], {
        scale: [1],
        duration: 300,
        easing: "easeOutElastic(1, .6)",
        direction: "alternate",
        color: 'rgb(131, 175, 131)'
      })
      return;
  } 
  animate(element, {
    scale: [1, 1.3],
    duration: 300,
    easing: "easeOutElastic(1, .6)",
    direction: "alternate"
  })

  if (element.dataset.day == 0) {
    animate(weekHeaders[element.dataset.day], {
      scale: [1.3],
      duration: 300,
      easing: "easeOutElastic(1, .6)",
      direction: "alternate",
      color: '#c78c6dff'
    })
    return;
  }
  animate(weekHeaders[element.dataset.day], {
    scale: [1.3],
    duration: 300,
    easing: "easeOutElastic(1, .6)",
    direction: "alternate",
    color: 'rgb(131, 175, 131)'
  })
}
clearCalendar();



//Prev and Next month button functionality
const prevButton = document.querySelector('.desktop_UI .arrowPrev');
const nextButton = document.querySelector('.desktop_UI .arrowNext');
prevButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  console.log(date);
  const options = { month: 'long', year: 'numeric' };
  monthYear.textContent = date.toLocaleDateString(undefined, options);
  clearCalendar();

});
nextButton.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  const options = { month: 'long', year: 'numeric' };
  monthYear.textContent = date.toLocaleDateString(undefined, options);
  clearCalendar();
});


//navbar font animation & listbar & menubar slide-in animation
const menubar = document.querySelector('.desktop_UI .menubar')
const listbar = document.querySelector('.desktop_UI .list-background')
const dateelm = document.querySelectorAll('.desktop_UI .dateElement');
const { chars } = splitText('.split', {
  words: { wrap: 'clip' },
  chars: true
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
  }, 0)
  .add(dateelm, {
    scale: [0, 1],
    opacity: [0, 1],
    duration: 600
  }, 100)
  .add(document.querySelectorAll('.dayForAnimation'), {
    opacity: [0, 1],
    duration: 600,
    delay: stagger(300)
  }, 0)

  .init();



document.querySelector('.theme-toggle').addEventListener('click', function () {
  this.classList.toggle('theme-toggle--toggled');

});


