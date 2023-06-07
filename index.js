var pp = document.querySelectorAll('.information div:nth-child(1) p')
var time1
var time2
var time3
var time4
var aa = 0
var bb = 0
var cc = 0
var dd = 0
if (pp[0] != 0) {
    time1 = setInterval(() => {
        if (aa <= 6) {
            aa++
            pp[0].innerHTML = aa
        } else {
            clearInterval(time1)
        }
    }, 150);
}
if (pp[1] != 0) {
    time2 = setInterval(() => {
        if (bb <= 11) {
            bb++
            pp[1].innerHTML = bb
        } else {
            clearInterval(time2)
        }
    }, 90);
}
if (pp[2] != 0) {
    time3 = setInterval(() => {
        if (cc <= 562) {
            cc += 2
            pp[2].innerHTML = cc
        } else {
            clearInterval(time3)
        }
    }, 0);
}
if (pp[3] != 0) {
    time4 = setInterval(() => {
        if (dd <= 86) {
            dd += 1
            pp[3].innerHTML = dd
        } else {
            clearInterval(time4)
        }
    }, 12);
}

var to = document.querySelector('.to')
if (window.innerWidth > 640) {
    window.onscroll = function () {
        var height = document.documentElement.scrollTop
        if (height >= 600) {
            to.style.display = 'block'
        } else {
            to.style.display = 'none'
        }
    }
}

var bar = document.querySelectorAll('.bar div')
for (var i = 0; i < bar.length; i++) {
    bar[i].onclick = function () {
        var div_children = (this.parentElement).children
        for (var j = 0; j < div_children.length; j++) {
            div_children[j].lastElementChild.className = ' '
        }
        this.lastElementChild.className = 'active'
    }
}

var show = document.querySelector('.header .bg .contain .show div')
var mobile = document.querySelector('.mobile')
var mobile_bar = document.querySelector('.mobile-bar')
show.onclick = function () {
    if (window.getComputedStyle(mobile, null)["display"] == 'none') {
        show.parentNode.style.background = 'rgba' + '(' + 74 + ',' + 73 + ',' + 73 + ', ' + '0.01' + ')'
        mobile.style.display = 'block'
        mobile_bar.style.left = 0
    }
}
mobile.onclick = function () {
    show.parentNode.style.background = 'rgba' + '(' + 255 + ',' + 255 + ',' + 255 + ', ' + '0.97' + ')'
    mobile.style.display = 'none'
    mobile_bar.style.left = -70 + '%'
}
for (var i = 0; i < mobile_bar.children.length; i++) {
    mobile_bar.children[i].onclick = function () {
        show.parentNode.style.background = 'rgba' + '(' + 255 + ',' + 255 + ',' + 255 + ', ' + '0.97' + ')'
        mobile.style.display = 'none'
        mobile_bar.style.left = -70 + '%'
    }
}