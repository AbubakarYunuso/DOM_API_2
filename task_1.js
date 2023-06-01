const divFirst = document.createElement('div')
console.log(divFirst)

const divSecond = document.createElement('div')
divSecond.className = 'block'
console.log(divSecond)

const bFirst = document.createElement('b')
bFirst.classList.add('red','strong')
console.log(bFirst)

const ulFirst = document.createElement('ul')
const liFirst = document.createElement('li')
ulFirst.className = 'list'
liFirst.textContent = 'Hello, World!!!'
ulFirst.append(liFirst)
console.log(ulFirst)

const oneDiv = document.createElement('div')
const twoDiv = document.createElement('div')
const treeDiv = document.createElement('div')
oneDiv.className = 'blue'
twoDiv.className = 'green'
treeDiv.className = 'red'
oneDiv.textContent = "i'm nested"
treeDiv.append(twoDiv)
twoDiv.append(oneDiv)
console.log(treeDiv)

const div = document.createElement('div')
const ul = document.createElement('ul')
const firstLi = document.createElement('li')
const secondLi = document.createElement('li')
const firstA = document.createElement('a')
const secondA = document.createElement('a')

firstA.href = 'https://instagram.com/intocode'
firstA.textContent ='наш инстаграм'

secondA.href = 'https://intocode.ru'
secondA.textContent = 'наш сайт'

div.append(ul)
ul.append(firstLi,secondLi)
firstLi.append(firstA)
secondLi.append(secondA)

console.log(div)
document.body.prepend(div)