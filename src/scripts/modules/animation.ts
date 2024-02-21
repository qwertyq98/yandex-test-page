import anime from 'animejs'

const promoTimeline = anime.timeline({
  easing: 'easeInOutSine',
  duration: 1900,
  autoplay: false,
})

let isDelay = false

setTimeout(() => {
  isDelay = true
}, 300)

promoTimeline
  .add({
    targets: '.layer:nth-child(2)',
    opacity: 1,
  })
  .add(
    {
      targets: '.layer:nth-child(3)',
      opacity: 1,
    },
    '-=1100'
  )
  .add(
    {
      targets: '.layer:nth-child(4)',
      opacity: 1,
    },
    '-=1100'
  )

window.addEventListener('load', () => {
  if (isDelay) {
    promoTimeline.play()
  } else {
    setTimeout(() => {
      promoTimeline.play()
    }, 300)
  }
})
