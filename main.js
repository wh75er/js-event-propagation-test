var application = document.getElementById('app')

const createElement = (tag, text) => {
  let element = document.createElement(tag)
  element.textContent = text

  return element
}

var way1 = createElement('A', '1 way solution')
var way2 = createElement('A', '2 way solution')

way1.href = "1way/index.html"
way2.href = "2way/index.html"

application.appendChild(way1)
application.appendChild(way2)
