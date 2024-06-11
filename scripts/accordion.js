document.querySelectorAll('.offers__item-name').forEach(element => {
   element.addEventListener('click', () => {
      const content = element.nextElementSibling
      if (content.style.maxHeight) {
         content.style.maxHeight = null
         element.parentElement.parentElement.classList.remove('offers__item--opened')
      } else {
         content.style.maxHeight = content.scrollHeight + 'px'
         element.parentElement.parentElement.classList.add('offers__item--opened')
      }
   })
});