const header = document.getElementById('header')

const setHeaderStyle = (scrollY) => {
   if (scrollY > 10) {
      header.classList.add('header--filled')
   } else {
      header.classList.remove('header--filled')
   }
}

setHeaderStyle(scrollY)

document.addEventListener('scroll', () => {
   setHeaderStyle(scrollY)
})