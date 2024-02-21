const $questionsShowButtons: NodeListOf<HTMLElement> =
  document.querySelectorAll('.questions__img')
const $questionsText: NodeListOf<HTMLElement> =
  document.querySelectorAll('.questions__text')
const $questionsShowAreas: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.questions__wrapper'
)

Array.from($questionsShowAreas).forEach(($questionsShowArea, index) =>
  $questionsShowArea.addEventListener('click', (event) => {
    const question = event.target as Element
    if (question.closest('.questions__wrapper')) {
      $questionsText[index].classList.toggle('is-open')
      $questionsShowButtons[index].classList.toggle('transform-button')
    }
  })
)
