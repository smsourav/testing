window.onload = addEventListener("load", ()=> {
    var pre = document.querySelector("div.preloader");
    console.log(pre);
    pre.classList += " preadd";
})

    


const colors = ['rgb(145, 27, 241)', 'red', 'rgb(58, 141, 250)', 'rgb(214, 230, 3)', 'rgb(21, 202, 51)'];

const text = ['C', 'C++', 'C#', 'JS', 'PY', 'PHP', 'GO', 'PERL', 'RUBY'];



function createSquare(){
    const section = document.querySelector("section");
    const square = document.createElement('span');
    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    var bg = colors[Math.floor(Math.random() * colors.length)];
    var pl = text[Math.floor(Math.random() * text.length)];

    square.innerHTML = pl;

    square.style.backgroundColor = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);

}

setInterval(createSquare, 150);

