export interface QuestionsDataTypes {
  questions: QuestionTypes[]
}

export interface QuestionTypes {
  image: URL
  questionText: string
  questionAnswers: string[]
  number: number
  rightAnswer: string
  answerText: AnswerTextType
}

export interface AnswerTextType {
  right: string
  wrong: string
  text: string
}

export interface DataResultsTypes {
  lowResult: ResultType
  middleResult: ResultType
  highResult: ResultType
  image: string
  pomocodeText: string
}

export interface ResultType {
  subtitle: string
  text: string
}

export const DataQuestions = [
  {
    image: new URL('/src/images/quiz/question1.png', import.meta.url),
    questionText:
      'Какова вероятность, что вы&nbsp;вставите в&nbsp;пульт бракованную батарейку и&nbsp;не&nbsp;включите фильм на&nbsp;большом экране?',
    questionAnswers: ['1 из 100', '6 из 100', '35 из 100'],
    number: 1,
    rightAnswer: '6 из 100',
    answerText: {
      right: 'Да, такой шанс — 6 из 100',
      wrong: 'Не совсем. Такой&nbsp;шанс&nbsp;—&nbsp;6&nbsp;из&nbsp;100',
      text: 'Немного, так что ваш киновечер, скорее всего, удастся. Если, конечно, у&nbsp;соседей не&nbsp;прорвёт трубу в&nbsp;это время. Потоп&nbsp;&mdash; причина порчи имущества в&nbsp;7&nbsp;случаях из&nbsp;100. Смотреть фильмы станет спокойнее, если застраховать риски по&nbsp;ипотеке в&nbsp;Страховом Доме ВСК',
    },
  },
  // {
  //   image: new URL('/src/images/quiz/question2.png', import.meta.url),
  //   questionText:
  //     'Какова вероятность, что вы&nbsp;сохраните брак и&nbsp;проживёте вместе ещё один прекрасный год?',
  //   questionAnswers: ['3 к 10', '8 к 10', '1 к 20'],
  //   number: 2,
  //   rightAnswer: '3 к 10',
  //   answerText: {
  //     right: 'Верно',
  //     wrong: 'Неверно',
  //     text: 'По&nbsp;официальной статистике, в&nbsp;2022 году на&nbsp;10&nbsp;браков пришлось 7&nbsp;разводов. Одна из&nbsp;причин&nbsp;&mdash; бытовые проблемы: то&nbsp;соседи зальют, то&nbsp;труба лопнет, а&nbsp;бывает и&nbsp;полная порча имущества... Характеры супруги, вероятно, не&nbsp;исправят, но&nbsp;помочь себе проще решать вопросы&nbsp;&mdash; скорее всего, могут. Например, застраховать риски по&nbsp;совместной ипотечной квартире в&nbsp;Страховом доме ВСК и&nbsp;не&nbsp;выплачивать банку остаток задолженности по&nbsp;ипотеке в&nbsp;случае действительно серьёзной бытовой аварии.',
  //   },
  // },
  // {
  //   image: new URL('/src/images/quiz/question3.png', import.meta.url),
  //   questionText: 'А&nbsp;каков шанс, что вас обворуют на&nbsp;улице?',
  //   questionAnswers: ['1 из 1274', '1 из 20 054', '1 из 8687'],
  //   number: 3,
  //   rightAnswer: '1 из 1274',
  //   answerText: {
  //     right: 'Да, это верно',
  //     wrong: 'Неверно',
  //     text: 'Город засыпает&nbsp;&mdash; просыпаются воры. Такой шанс&nbsp;&mdash; 1&nbsp;из&nbsp;1274. Помимо риска попасться карманникам существует куда большая опасность&nbsp;&mdash; например, приобрести квартиру с&nbsp;обременением. Так можно остаться и&nbsp;без жилплощади, и&nbsp;без денег. Страхование титула от&nbsp;Страхового дома ВСК защищает собственника ипотечной квартиры и&nbsp;в&nbsp;подобных ситуациях.',
  //   },
  // },
  // {
  //   image: new URL('/src/images/quiz/question4.png', import.meta.url),
  //   questionText:
  //     'Какова вероятность, что вы&nbsp;переведёте все накопления &laquo;сотруднику банка&raquo;?',
  //   questionAnswers: ['1 из 580 000', '1 из 20 000', '1 из 1'],
  //   number: 4,
  //   rightAnswer: '1 из 20 000',
  //   answerText: {
  //     right: 'Верно',
  //     wrong: 'Неверно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;20&nbsp;000',
  //     text: 'Такой шанс&nbsp;&mdash; 1&nbsp;к 20&nbsp;000. Гораздо вероятнее приобрести квартиру на&nbsp;вторичном рынке у&nbsp;компании, находящейся на&nbsp;стадии банкротства&nbsp;&mdash; когда сделки с&nbsp;имуществом могут быть оспорены в&nbsp;судебном порядке. Если сделку признают недействительной, Страховой дом ВСК выплатит банку остаток задолженности по&nbsp;ипотеке.',
  //   },
  // },
  // {
  //   image: new URL('/src/images/quiz/question5.png', import.meta.url),
  //   questionText:
  //     'Каков шанс, что ваша посылка не&nbsp;доедет до&nbsp;адресата, если вы&nbsp;отправите её&nbsp;через грузовую компанию?',
  //   questionAnswers: ['1 из 96 000', '1 из 15 000', '1 из 7000'],
  //   number: 5,
  //   rightAnswer: '1 из 96 000',
  //   answerText: {
  //     right: 'Верно. Шанс — 1 из 96 000',
  //     wrong: 'Неверно. Шанс — 1 из 96 000',
  //     text: 'Если часто отправляете грузы, такое может произойти. Но&nbsp;посылки теряют реже, чем безвозвратно портится имущество в&nbsp;ипотечной квартире&nbsp;&mdash; например, при прорыве канализации. Жить спокойнее просто&nbsp;&mdash; оформите страхование имущества за&nbsp;5&nbsp;минут онлайн в&nbsp;Страховом доме ВСК.',
  //   },
  // },
  // {
  //   image: new URL('/src/images/quiz/question6.png', import.meta.url),
  //   questionText: 'А&nbsp;какова вероятность, что в&nbsp;вас попадёт молния?',
  //   questionAnswers: ['1 из 330 000', '1 из 20 000', '1 из 145 000'],
  //   number: 6,
  //   rightAnswer: '1 из 330 000',
  //   answerText: {
  //     right:
  //       'Да, верно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;330&nbsp;000',
  //     wrong: 'Неверно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;330&nbsp;000',
  //     text: 'Немного. Зато молнии&nbsp;&mdash; одна из&nbsp;причин пожаров в&nbsp;квартире, наряду с&nbsp;поджогом и&nbsp;возгоранием от&nbsp;бытовой техники. Страхование имущества убережёт вас от&nbsp;выплат денег банку, если дом сгорит при пожаре.',
  //   },
  // },
]

export const dataResults: DataResultsTypes = {
  lowResult: {
    subtitle:
      'Возможно, ваша интуиция ещё спит и вам не стоит делать ставки. Но, с другой стороны, умение предсказывать шансы падения метеорита во двор не спасёт от него.',
    text: 'Не беспокоиться за имущество и за неизбежность выплаты<br/>ипотеки поможет Страховой Дом ВСК — <strong>до 31 декабря 2023</strong> года<br/>можно застраховать и то, и другое, если они у вас есть, <strong>со скидкой 3%</strong> на страхование имущества, жизни и здоровья, титула, оформляемое в рамках договора ипотеки, и <strong>15 % — на страхование имущества</strong>, жизни и здоровья по промокоду <strong>yandex23</strong>. Скидка не суммируется с другими акциями и доступна всем клиентам.',
  },
  middleResult: {
    subtitle:
      'Хороший результат, велика вероятность, что в следующий раз вы справитесь лучше. Подмечайте интересные факты и просчитывайте шансы неблагоприятных исходов.',
    text: 'А пока — можно застраховать не только само имущество,<br/>но и риски по ипотеке, если они у вас есть, <strong>со скидкой 3%</strong> на<br/>страхование имущества, жизни и здоровья, титула, оформляемое в<br/>рамках договора ипотеки, и <strong>15 % — на страхование имущества</strong>,<br/>жизни и здоровья по промокоду <strong>yandex23</strong>. Скидка действует<br/><strong>до 31 декабря 2023</strong> года, не суммируется с другими акциями<br/>Страхового Дома ВСК и доступна всем клиентам.',
  },
  highResult: {
    subtitle:
      'Поздравляем! В этот раз интуиция вас не подвела. Но на то она и вероятность, чтобы иногда случаться.',
    text: 'Поэтому, чтобы чувствовать себя защищённее, можно<br/>застраховать не только само имущество, но и риски по ипотеке,<br/>если она у вас есть, <strong>со скидкой 3%</strong> на страхование имущества,<br/>жизни и здоровья, титула, оформляемое в рамках договора<br/>ипотеки, и <strong>15 % — на страхование имущества</strong>, жизни и здоровья,<br/>по промокоду <strong>yandex23</strong>. Скидка действует <strong>до 31 декабря 2023</strong><br/>года, не суммируется с другими акциями Страхового Дома<br/>ВСК и доступна всем клиентам.',
  },
  image: String(new URL('/src/images/quiz/result.png', import.meta.url)),
  pomocodeText:
    'Промокод на&nbsp;скидку действует в&nbsp;период с&nbsp;18&nbsp;по&nbsp;30&nbsp;ноября 2023&nbsp;г.&nbsp;и&nbsp;дает право получения скидки в&nbsp;размере 3&nbsp;% на&nbsp;страхование имущества, жизни и&nbsp;здоровья, титула, оформляемое в&nbsp;рамках договора ипотеки, а&nbsp;также скидки в&nbsp;размере 15&nbsp;% на&nbsp;страхование имущества, жизни и&nbsp;здоровья, титула.Промокод можно применить только 1&nbsp;раз в&nbsp;отношении каждого вида страхования. Предложение не&nbsp;суммируется с&nbsp;другими акциями и&nbsp;предложениями. Страховые услуги предоставляются Страховым акционерным обществом &laquo;ВСК&raquo;, ИНН: 7710026574. Лицензия банка России от&nbsp;11.09.2015: СЛ &#8470;&nbsp;0621, СИ &#8470;&nbsp;0621, ОС &#8470;&nbsp;0621, ОС &#8470;&nbsp;0621&ndash;04, ОС &#8470;&nbsp;0621&ndash;05, ПС &#8470;&nbsp;0621.',
}
