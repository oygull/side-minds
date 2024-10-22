const cardBoxes = Array.from(document.querySelectorAll('.cardBox'));
const btnArray = Array.from( document.getElementsByClassName('clickPart'))
const activeClassName = 'activeCircle';

const removeAllActiveItems = () => {
  btnArray.forEach(btn => {
    btn.classList.remove(activeClassName);
  });
  cardBoxes.forEach(card => {
    card.style.display = 'none';
  });
}

const renderItem = (attributeValue) => {
  removeAllActiveItems();
  const activeElem = cardBoxes.filter(card => card.getAttribute('data-card') === attributeValue)[0];
  const activeBtn = btnArray.filter(btn => btn.getAttribute('data-angle') === attributeValue)[0];
  activeElem.style.display = 'block';
  activeBtn.classList.add(activeClassName);
}

btnArray.forEach(el=>{
  el.addEventListener('click', (e) =>{
    const attributeName = e.target.getAttribute('data-angle');
    renderItem(attributeName);
  })
})
