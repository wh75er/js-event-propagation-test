var application = document.getElementById('app')

const createElement = (tag, text) => {
  let element = document.createElement(tag)
  element.textContent = text

  return element
}

var appHeader = createElement('H1', 'Main page...')
var popUpElement = createElement('P', 'Element')
var popUp = createElement('DIV', 'Pop up window')
popUp.id = 'pop-up'

application.appendChild(appHeader)
popUp.appendChild(popUpElement)
application.appendChild(popUp)

const toggleVisibility = (element) => {
  element.hidden = element.hidden ? false : true
}

const clickApplicationListener = (e) => {
  toggleVisibility(document.getElementById('pop-up'))
}

application.addEventListener('click', clickApplicationListener)

const clickPopUpListener = (e) => {
  e.stopPropagation()
}

popUp.addEventListener('click', clickPopUpListener)

