
import { createTimeline, stagger, utils, splitText, animate } from 'https://esm.sh/animejs';;

const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => {
});
const { words, chars } = splitText('.split', {
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
  }, stagger(125)) // overlap previous animation
  .init();

createTimeline({
  ease:'easeOutBack',
  duration:300
})

  .add(buttons[0],{
    translateX:[100,0],
  })
  .add(buttons[1],{
    translateX:[-100,0],
  }, '100')




