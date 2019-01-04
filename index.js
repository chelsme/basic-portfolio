console.log('heyo')



document.addEventListener('DOMContentLoaded', function () {
    let h1 = document.getElementById('header')
    h1.addEventListener('click', function (event) {
        h1.innerText = 'I got hacked!'
        h1.style.color = 'red'
        h1.style.background = 'black'
    })
})