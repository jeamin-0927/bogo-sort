let count = 5;
let time = 0;
let cnt = 0;
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const leng = (input) => {
    return `${input / count * 100}%`;
}
const setDOM = () => {
    for(let i = 1; i <= count; i++){
        $('body').append(`<div class="sort" id="s${i}" style="height: ${leng(i)}"></div>`);
    }
    $('.sort').css('width', `${100 / count}vw`);
    
    const randomDOM = () => {
        let tmp, rand;
        for(let i = 1; i <= count; i++){
            rand = random(1, count);
            tmp = document.getElementById(`s${i}`).outerHTML;
            document.getElementById(`s${i}`).outerHTML = document.getElementById(`s${rand}`).outerHTML;
            document.getElementById(`s${rand}`).outerHTML = tmp;
            //playOneNote(rand * 200, time / count * 10);
        }
        const data = document.getElementsByClassName('sort');
        let isSort = true;
        for(let i = 1; i <= data.length; i++){
            let now = data[i - 1].id.split('s')[1];
            if(now != i) isSort = false;
        }
        cnt++;
        $('.count').html(`${cnt}`);

        if(isSort) {
            $('.sort').css('background', 'rgb(0, 255, 55)');
        }
        else{
            setTimeout(() => randomDOM(), time);
            $('.sort').css('background', '#333');
        }
    }
    randomDOM();
    setTimeout(() => randomDOM(), time);
}

let start = true;
$(document).on('click', 'body', () => {
    if(!start) return;
    count = prompt('Please enter the number of bars to be sorted');
    $('.start').remove();
    setDOM();
    start = false;
})