console.log('Welcome to my portfolio!')

function linkColor(event) {
    // event.preventDefault()
    let navLink = document.getElementsByClassName('navLink')

    for (let item of navLink) {
        item.style.background = 'white'
        item.style.color = 'black'
    }

    event.target.style.background = 'darkred'
    event.target.style.color = 'white'
}

function h1Color(event) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    event.target.style.color = color
}

document.addEventListener('DOMContentLoaded', function () {
    // let navLink = document.getElementsByClassName('navLink')
    // for (let link of navLink) {
    //     link.addEventListener('click', linkColor)
    // }

    let h1 = document.getElementsByTagName('h1')
    h1[0].addEventListener('click', h1Color)
})