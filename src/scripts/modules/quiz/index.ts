import { createElement } from '../utils/index'

import { rightOption, stepOfProgres, wrongOption } from './const'
import { DataQuestions } from './data'
import { closePromoInfo } from './promocode-info'
import { answerTemplate, quizTemplate, resultTemplate } from './template-quiz'

const promoElement = document.querySelector('.promo')
const mobileTitle = document.querySelector('.promo-mobile__title')
const promoMobileElement = document.querySelector('.promo-mobile__content')
let currentPromoElement

const startTestBtn = document.querySelector('.promo__button')
const startTestMobileBtn = document.querySelector('.promo-mobile__button')
let currentStartTestBtn
let prevValue = ''

let indexOfQuestion = 0
let result = 0
let isMobileMode
let prevMode

const createQuizCardsTemplates = (questions) =>
  questions.map((question) => createElement(quizTemplate(question)))

let quizCardsTemplates
let currentQuestionData = DataQuestions[indexOfQuestion]
let currentQuestionTemplate

const determinParametersByScreen = () => {
  prevMode = isMobileMode
  if (window.innerWidth < 1000) {
    isMobileMode = true
    currentStartTestBtn = startTestMobileBtn
    currentPromoElement = promoMobileElement
  } else {
    isMobileMode = false
    currentStartTestBtn = startTestBtn
    currentPromoElement = promoElement
  }
}

determinParametersByScreen()
prevMode = isMobileMode

const showPromoHandler = () => {
  if (isMobileMode) {
    const div = document.createElement('div')
    div.className = 'promo-mobile'
    document.getElementsByTagName('main')[0].prepend(div)
    mobileTitle && document.querySelector('.promo-mobile')?.append(mobileTitle)
    document.querySelector('.promo-mobile')?.append(currentPromoElement)
  } else {
    replaceElement(currentPromoElement, document.querySelector('.promo-mobile'))
  }
  indexOfQuestion = 0
  result = 0
  document?.querySelector('.quiz__wrapper')?.remove()
  quizCardsTemplates = createQuizCardsTemplates(DataQuestions)
  currentQuestionData = DataQuestions[indexOfQuestion]
}

const showResultHandler = () => {
  const resultElement = createElement(resultTemplate(result))
  const closeButton = resultElement?.querySelector('.quiz__result-button_close')
  const infoButton = resultElement?.querySelector('.quiz__result-info')

  closeButton?.addEventListener('click', showPromoHandler)
  infoButton?.addEventListener('click', togglePomoInfosHandler)
  quizCardsTemplates.push(resultElement)
}

const replaceElement = (newComponent, oldComponent) => {
  const newElement = newComponent
  const oldElement = oldComponent
  const buttons = newComponent?.querySelectorAll('.quiz__answer')
  const parent = oldElement.parentElement
  const checkAnswer = currentQuestionTemplate.querySelector('.quiz__check')

  parent?.replaceChild(newElement, oldElement)
  if (!isMobileMode) {
    buttons.forEach((button) =>
      button.addEventListener('click', showAnswerHandler)
    )
  } else {
    checkAnswer?.addEventListener('click', () => {
      replaceElement(
        createElement(
          answerTemplate(
            currentQuestionData,
            prevValue === currentQuestionData.rightAnswer
          )
        ),
        checkAnswer
      )
      const showNextQuestionButton = document.querySelector(
        '.quiz__answer-button'
      )
      showNextQuestionButton?.addEventListener('click', showNextElementHandler)
      if (prevValue === currentQuestionData.rightAnswer) {
        result++
      }
    })

    document
      .querySelector('.quiz__answers')
      ?.addEventListener('click', unlockingButtonsHandler)
  }

  if (indexOfQuestion === quizCardsTemplates.length - 1) {
    if (prevValue === currentQuestionData?.rightAnswer) {
      result++
    }
    showResultHandler()
  }
}

const addProgress = (currentElement) => {
  const progress = stepOfProgres * (indexOfQuestion + 1) + '%'
  if (currentElement.querySelector('.quiz__progress-line')) {
    return (currentElement.querySelector('.quiz__progress-line').style.width =
      String(progress))
  }
}

const showNextElementHandler = () => {
  currentQuestionData = DataQuestions[indexOfQuestion + 1]
  currentQuestionTemplate = quizCardsTemplates[indexOfQuestion + 1]
  replaceElement(
    quizCardsTemplates[indexOfQuestion + 1],
    quizCardsTemplates[indexOfQuestion]
  )
  indexOfQuestion++
  addProgress(quizCardsTemplates[indexOfQuestion])
}

const showAnswerHandler = (evt) => {
  const isRight = evt.target.innerHTML === currentQuestionData.rightAnswer
  const questionImage = currentQuestionTemplate.querySelector('.quiz__img')
  const currentAnswerTemplate = answerTemplate(currentQuestionData, isRight)
  const activeButton =
    currentQuestionTemplate.querySelector('.quiz__button-img')
  activeButton.addEventListener('click', showNextElementHandler)

  if (isRight) {
    evt.target.style.background = rightOption
    result++
  } else {
    evt.target.style.background = wrongOption
  }
  currentQuestionTemplate
    .querySelectorAll('.quiz__answer')
    .forEach((button) => {
      button.style['pointer-events'] = 'none'
    })
  activeButton.style.display = 'block'
  currentQuestionTemplate.querySelector(
    '.quiz__button-img_gray'
  ).style.display = 'none'
  replaceElement(createElement(currentAnswerTemplate), questionImage)
}

const unlockingButtonsHandler = (evt) => {
  const checkAnswer = currentQuestionTemplate.querySelector('.quiz__check')
  if (evt.target.innerHTML !== '' && evt.target.innerHTML !== 'Проверить') {
    prevValue = evt.target.innerHTML
    checkAnswer.style['pointer-events'] = 'all'
    checkAnswer.style['background-color'] = '#077BED'
  }
}

const togglePomoInfosHandler = () => {
  const infoElement = document.querySelector('.quiz__result-promocode')
  const closeButton = infoElement?.querySelector('.quiz__result-close')
  infoElement?.classList.toggle('quiz__result-promocode_active')
  closePromoInfo(infoElement)
}

startTestBtn?.addEventListener('click', () => {
  quizCardsTemplates = createQuizCardsTemplates(DataQuestions)
  currentQuestionTemplate = quizCardsTemplates[0]
  replaceElement(currentQuestionTemplate, promoElement)
})

startTestMobileBtn?.addEventListener('click', () => {
  quizCardsTemplates = createQuizCardsTemplates(DataQuestions)
  currentQuestionTemplate = quizCardsTemplates[0]
  replaceElement(currentQuestionTemplate, promoMobileElement)
})

window.addEventListener('resize', () => {
  determinParametersByScreen()
  if (prevMode === isMobileMode) {
    return
  }

  if (
    !document.querySelector('.promo') ||
    !document.querySelector('.promo-mobile__content')
  ) {
    showPromoHandler()
  }
})
