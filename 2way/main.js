var application = document.getElementById('app')

const createElement = (tag, text) => {
  let element = document.createElement(tag)
  element.textContent = text

  return element
}

var appHeader = createElement('H1', "Main page...")
var popUp = createElement('DIV', 'Pop up window')
popUp.id = 'pop-up'

application.appendChild(appHeader)
application.appendChild(popUp)

const toggleVisibility = (element) => {
  element.hidden = element.hidden ? false : true
}

const clickApplicationListener = (e) => {
  console.log('We are here(2)!')
  toggleVisibility(document.getElementById('pop-up'))
}

application.addEventListener('click', clickApplicationListener)

const clickPopUpListener = (e) => {
  console.log('We are here!')
  e.stopPropagation()
}

popUp.addEventListener('click', clickPopUpListener)

