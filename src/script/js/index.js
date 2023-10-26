
// typing animation
var typed = new Typed(".typing", {
    strings: ["", "Full Stack Web App Developer", "Full Stack UI Developer", "Problem Solver", "Competitive Programmer", "Debugger"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

let tCol = document.getElementsByClassName('navi')

document.addEventListener('mousemove', () => {
    if (document.URL.endsWith("#home")) {
        tCol[0].style.color = 'red';
        tCol[1].style.color = '#302e4d'
        tCol[2].style.color = '#302e4d'
        tCol[3].style.color = '#302e4d'
        tCol[4].style.color = '#302e4d'
        tCol[5].style.color = '#302e4d'
    } else if (document.URL.endsWith("#about")) {
        tCol[0].style.color = '#302e4d';
        tCol[1].style.color = 'red'
        tCol[2].style.color = '#302e4d'
        tCol[3].style.color = '#302e4d'
        tCol[4].style.color = '#302e4d'
        tCol[5].style.color = '#302e4d'
    } else if (document.URL.endsWith("#achievement")) {
        tCol[0].style.color = '#302e4d';
        tCol[1].style.color = '#302e4d'
        tCol[2].style.color = 'red'
        tCol[3].style.color = '#302e4d'
        tCol[4].style.color = '#302e4d'
        tCol[5].style.color = '#302e4d'
    } else if (document.URL.endsWith("#education")) {
        tCol[0].style.color = '#302e4d';
        tCol[1].style.color = '#302e4d'
        tCol[2].style.color = '#302e4d'
        tCol[3].style.color = 'red'
        tCol[4].style.color = '#302e4d'
        tCol[5].style.color = '#302e4d'
    } else if (document.URL.endsWith("portfolio")) {
        tCol[0].style.color = '#302e4d';
        tCol[1].style.color = '#302e4d'
        tCol[2].style.color = '#302e4d'
        tCol[3].style.color = '#302e4d'
        tCol[4].style.color = 'red'
        tCol[5].style.color = '#302e4d'
    } else if (document.URL.endsWith("contact")) {
        tCol[0].style.color = '#302e4d';
        tCol[1].style.color = '#302e4d'
        tCol[2].style.color = '#302e4d'
        tCol[3].style.color = '#302e4d'
        tCol[4].style.color = '#302e4d'
        tCol[5].style.color = 'red'
    }
});
