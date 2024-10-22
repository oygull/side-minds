// ANCHOR Factors accordion
const activePanel = document.querySelectorAll('.accordion__wrapper-items-panel')
const arrowBtn = document.querySelectorAll('.arrowBtn')
const accordionWrapper = document.querySelectorAll('.accordion__wrapper-items-block')

arrowBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parent = e.target.closest(".accordion__wrapper-items-block");
    const nextElem = parent.nextElementSibling
    const prevElem = document.querySelector(".accordion__wrapper-items-panel.activePanel");
    const activeArrow = document.querySelector('.activeArrow')

    const tooltips = parent.querySelectorAll('.accordion__wrapper-items-block-text-tooltip')
    tooltips.forEach((tooltip) => {
      tooltip.classList.add("activeTooltip")
    })
    const activeTooltip = document.querySelector('.activeTooltip')

    console.log(tooltips, 'tooltips');

    item.classList.add('activeArrow')

    if (activeArrow) {
      activeArrow.classList.remove('activeArrow')
      tooltips.forEach((tooltip) => {
        tooltip.classList.remove("activeTooltip")
      })
    }

    if (nextElem) {
      nextElem.classList.toggle("activePanel")
    }

    if (prevElem) {
      prevElem.classList.remove("activePanel")
    }
  })
})


function openServiceTab(openElem) {
  let activeItem = null
  serviceItems.forEach(function (item) {
    if (item.classList.contains('active') && !openElem.classList.contains('active')) {
      activeItem = item
    }
  })

  openElem.classList.add('active')
  if (activeItem) {
    activeItem.classList.remove('active')
  }
}


function viewAndOpenTab(order) {

  const block = document.querySelector('#services');

  block.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })

  const elem = getServiceByOrder(order)
  if (elem && !elem.classList.contains('active')) {
    openServiceTab(elem)
  }
}

