const sections = document.querySelectorAll('section')
const home = [document.querySelector('.header')]

const sectionsAll = Array.from(sections).concat(home)

const observeElement = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry)
    }
  })
}

const observer = new IntersectionObserver(observeElement, {
  threshold: 0.8
})

sectionsAll.forEach(section => {
  observer.observe(section)
})

function intersectionHandler (entry) {
  const id = entry.target.id
  const currentlyFocus = document.querySelector('li.focus')
  const shouldBeFocus = document.querySelector(`a[href="#${id}"] li`)

  if (currentlyFocus) {
    currentlyFocus.classList.remove('focus')
  }
  if (shouldBeFocus) {
    shouldBeFocus.classList.add('focus')
  }
}

console.log(sectionsAll)
console.log(sectionsAll[3])
