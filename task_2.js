const array = ['html','css','js']
const ul1 = document.createElement('ul')
function addWorld (arr) {
    for(let i = 0;i < arr.length ;i++){
        const li = document.createElement('li')
        li.textContent = arr[i]
        ul1.append(li)
    }
    return document.body.append(ul1)
}
console.log(addWorld(array))

const secondArray = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

function render (arr) {
    const ul2 = document.createElement('ul')
    for(let i = 0;i < arr.length;i++){
        const li2 = document.createElement('li')
        const a2 = document.createElement('a')
        a2.href = arr[i].url
        a2.textContent = arr[i].name
        li2.append(a2)
        ul2.append(li2)
    }
   return document.body.append(ul2) 
}
console.log(render(secondArray))