const sections = document.querySelectorAll('section')

const observeElement = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry)
    }
  })
}

const observer = new IntersectionObserver(observeElement, {
  threshold: 0.1
})

sections.forEach(section => {
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
