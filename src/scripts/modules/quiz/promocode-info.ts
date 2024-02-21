export const closePromoInfo = (info) => {
  const yStart = parseInt(
    window.getComputedStyle(info, null).getPropertyValue('top')
  )
  let yCurrent

  info.addEventListener('touchstart', (e) => {
    e.preventDefault()
    yCurrent = +e.targetTouches[0].clientY - parseInt(info.style.top) || 0
  })

  info.addEventListener('touchmove', (e) => {
    if (yCurrent !== undefined) {
      e.preventDefault()
      info.style.top = +e.targetTouches[0].clientY - yCurrent + 'rem'
    }
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
