const screenWidth = document.documentElement.clientWidth

if (screenWidth > 768) {
   document.querySelectorAll('a[href^="tel"]').forEach(link => {
      link.addEventListener('click', (event) => {
         event.preventDefault()
      })
   })
}
