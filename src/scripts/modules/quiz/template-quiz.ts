import { dataResults, QuestionTypes } from './data'

const renderAnswers = (answers: string[]) =>
  answers
    .map(
      (answer) => `
      <button class="quiz__answer">${answer}</button>
      `
    )
    .join('')

const generateResultText = (count: number, field: string) => {
  if (count === 6) {
    return dataResults.highResult[field]
  } else if (count >= 4) {
    return dataResults.middleResult[field]
  } else {
    return dataResults.lowResult[field]
  }
}

export const quizTemplate = (question: QuestionTypes): string => {
  return `
    <div class="quiz__wrapper">
      <img class="quiz__img" src="${question.image}">
      <div class="quiz__content">
        <div class="quiz__progress">
          <div class="quiz__progress-line"></div>
        </div>
        <h3 class="quiz__title-mobile">${question.number}/6</h3>
        <h3 class="quiz__title">Вопрос ${question.number} из 6</h3>
        <p class="quiz__text">${question.questionText}</p>
        <div class="quiz__buttons">
          <div class="quiz__answers">
            ${renderAnswers(question.questionAnswers)}
          </div>
          <buttton class="quiz__button">
            <img class="quiz__button-img_gray" src="${new URL(
              '/src/images/vector/button_gray.svg',
              import.meta.url
            )}" alt="">
            <img class="quiz__button-img" src="${new URL(
              '/src/images/vector/button.svg',
              import.meta.url
            )}" alt="">
          </buttton>
        </div>
      </div>
      <div class="quiz__check">Проверить
      </div>
    </div>
  `
}

export const answerTemplate = (question: QuestionTypes, isRight: boolean) => {
  return `
    <div class=${
      isRight ? 'quiz__answer-wrapper_green' : 'quiz__answer-wrapper_red'
    }>
      <div class="quiz__answer-content">
        <h3 class="quiz__answer-title">
          ${isRight ? question.answerText.right : question.answerText.wrong}
        </h3>
        <p class="quiz__answer-text">
          ${question.answerText.text}
        </p>
      </div>
      <button class="quiz__answer-button">${
        question.number === 6 ? 'Посмотреть результат' : 'Следующий вопрос'
      }</button>
    </div>
  `
}

export const resultTemplate = (count: number) => {
  return `
  <div class="quiz__result-wrapper">
    <img class="quiz__result-img" src="${dataResults.image}">
    <div class="quiz__result-content">
      <div class="quiz__result-content_wrapper">
        <h3 class="quiz__result-title">Результат теста</h3>
        <p class="quiz__result-subtitle">${count} верный ответ из 6</p>
        <p class="quiz__result-text">${generateResultText(
          count,
          'subtitle'
        )}</p>
        <p class="quiz__result-description">${generateResultText(
          count,
          'text'
        )}<button class="quiz__result-info"></button>
        <div class="quiz__result-promocode">
          <button class="quiz__result-close">
          </button>${dataResults.pomocodeText}</div>
        </p>
      </div>
      <a class="quiz__result-button" 
        target="_blank"
        href="https://www.vsk.ru/klientam/ipoteka?t=about&utm_source=yandex_promo&utm_medium=ipoteka&adrclid=DYL5lh3KnJy1dqguDmBXXJn3hRfDh7y1jILg_dq_NYNJsuAkC0Td2X1QPBm2pYSObQM_VCoW_Sf2LRpKN6fiY">
        Использовать промокод
      </a>
      <buttton class="quiz__result-button_close"></buttton>
    </div>
  </div>
  `
}
