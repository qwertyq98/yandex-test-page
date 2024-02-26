export const closePromoInfo = (info) => {
  let yCurrent
  const yStart = parseInt(
    window.getComputedStyle(info, null).getPropertyValue('top')
  )
  console.log(yStart)

  info.addEventListener('touchstart', (e) => {
    e.preventDefault()
    yCurrent =
      +e.targetTouches[0].clientY -
      (parseInt(window.getComputedStyle(info, null).getPropertyValue('top')) ||
        0)
    console.log(yCurrent)
  })

  info.addEventListener('touchmove', (e) => {
    if (yCurrent !== undefined) {
      e.preventDefault()
      info.style.top = +e.targetTouches[0].clientY - yCurrent + 'rem'
    }
    console.log(info.style.top)
  })

  info.addEventListener('touchend', (e) => {
    e.preventDefault()
    const yFinal = parseInt(
      window.getComputedStyle(info, null).getPropertyValue('top')
    )
    if (yFinal + 50 < yStart) {
      info.style.top = 'auto'
    } else if (yFinal - 50 > yStart) {
      info.style.top = 'auto'
      info.classList.remove('quiz__result-promocode_active')
    }
    yCurrent = yStart
  })
}
