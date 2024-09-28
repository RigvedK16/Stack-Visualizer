const push = document.querySelector('#push')
const pop = document.querySelector('#pop')
const reset = document.querySelector('#reset')
const input = document.querySelector('#stack-number')
const stack = document.querySelector('#stack')
const messageBox = document.querySelector('#message')
let element
let feedback = document.createElement('div')
var alignCounter = 0
const topElementDisplay = document.querySelector('#top')
const pushedElement = document.querySelector('#pushed-element')
const poppedElement = document.querySelector('#popped-element')
let topElement
var top
let stackElements = [];

push.addEventListener('click', function (e) {
    stack.style.margin = '0.5vw'
    let elementValue = input.value
    e.preventDefault();
    if (alignCounter < 5) {
        if (messageBox.contains(feedback)) {
            messageBox.removeChild(feedback)
        }
        if (elementValue !== '') {
            element = document.createElement('div')
            topElement = element
            element.textContent = elementValue
            topElementDisplay.innerHTML = elementValue
            top++;
            pushedElement.innerHTML = elementValue
            element.style.height = '13.5%'
            element.style.width = '80%'
            element.style.backgroundColor = '#027E03'
            element.style.color = 'white'
            element.style.borderRadius = '7px'
            element.style.padding = '10px'
            element.style.marginLeft = '0.5vw'
            element.style.marginBottom = '0.3vw'
            element.style.marginRight = '0.5vw'
            element.style.textAlign = 'center'
            element.style.fontSize = '1.5rem'
            element.style.fontWeight = '600'
            element.style.position = 'absolute'
            bottomAlign()
            stack.appendChild(element)
            stackElements.push(element);
            input.value = ''
        }
    }
    else {
        feedback.textContent = 'Stack is Full!!'
        messageBox.appendChild(feedback)
        input.value = ''
    }
})

function bottomAlign() {
    element.style.bottom = `${alignCounter * 20}%`
    alignCounter++;
}

pop.addEventListener('click', function () {
    if (alignCounter > 0) {
        if (messageBox.contains(feedback)) {
            messageBox.removeChild(feedback)
        }
        let topElement = stackElements.pop();
        alignCounter--
        top--
        stack.removeChild(topElement)
        poppedElement.innerHTML = topElement.textContent
    }
    else {
        feedback.textContent = 'Stack is underflowing'
        messageBox.appendChild(feedback)
    }

})