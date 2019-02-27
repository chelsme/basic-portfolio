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


document.addEventListener('DOMContentLoaded', function () {
    // let navLink = document.getElementsByClassName('navLink')
    // for (let link of navLink) {
    //     link.addEventListener('click', linkColor)
    // }
})