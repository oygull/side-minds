const tooltipBlocks = [
  {tooltip: 'one', block: 'ConsistencyChange'},
  {tooltip: 'two', block: 'UnityChallenge'},
  {tooltip: 'three', block: 'SupportiveAssertive'},
  {tooltip: 'four', block: 'AnalyticalCreative'},
  {tooltip: 'five', block: 'ConversionConnection'},
  {tooltip: 'six', block: 'ShorttermLongterm'},
]

function showTooltip(event) {
  function changeElementPosition(element) {
    console.log(event)
    element.style.visibility = 'visible'
    element.style.left = `${event.offsetX + 40}px`
    element.style.top = `${event.offsetY - 60}px`
  }

  tooltipBlocks.forEach((elem) => {
    const gElem = event.target.parentElement;
    if (gElem.classList.contains(elem.block)) {
      const tooltip = document.querySelector(`.${elem.tooltip}`)
      changeElementPosition(tooltip)
    }
  })
}

function removeTooltip() {
  const tooltips = document.querySelectorAll('.tooltip-info')
  tooltips.forEach((el) => {
    el.style.visibility = 'hidden'
  })
}

const svgBlocks = document.querySelectorAll('.svgIcon')
for (let i = 0; i < svgBlocks.length; i++) {
  svgBlocks[i].addEventListener('mousemove', showTooltip);
  svgBlocks[i].addEventListener('mouseout', removeTooltip);
}
