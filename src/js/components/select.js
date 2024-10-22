// Подключение select

const select = document.querySelectorAll('.selectBtn');
const options = document.querySelectorAll('.option');
let index = 1;


select.forEach(a => {
  a.addEventListener('click', b => {
    const parent = b.target.closest('.select');

    let dropdown = parent.querySelector('.selectDropdown');
    dropdown.classList.toggle('toggle');
    dropdown.style.zIndex = index++;
  })
})

options.forEach(option => {
  option.addEventListener('click', e => {
    option.parentElement.classList.remove('toggle');

    const parent = option.closest('.select').querySelector('.selectBtn');
    const image = option.querySelector('img');

    if (image) {
      const newValueImage = document.createElement('img');
      newValueImage.src = image.src;
      parent.setAttribute('data-type', option.getAttribute('data-type'));
      parent.innerHTML = newValueImage.outerHTML;
    } else {
      parent.innerHTML = option.innerHTML;
    }
  })
})
