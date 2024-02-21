const $body: HTMLBodyElement = document.querySelector('body')!
const $burgers: NodeListOf<HTMLElement> =
  document.querySelectorAll('.hamburger')!
const $mobileMenus: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.mobile-menu__wrapper'
)!

const mobileMenuHandler = (event) => {
  const target = event.target as Element
  if (!target.closest('.mobile-menu')) {
    Array.from($burgers).forEach(($burger) =>
      $burger.classList.remove('is-active')
    )
    Array.from($mobileMenus).forEach(($mobileMenu) =>
      $mobileMenu.classList.remove('is-active')
    )
    $body.removeEventListener('click', mobileMenuHandler)
  }
}

Array.from($burgers).forEach(($burger) =>
  $burger.addEventListener('click', () => {
    $burger.classList.toggle('is-active')
    Array.from($mobileMenus).forEach(($mobileMenu) =>
      $mobileMenu.classList.toggle('is-active')
    )
    $body.addEventListener('click', mobileMenuHandler)
  })
)
