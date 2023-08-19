
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        screen.value += button.innerText;
    })
})

equal.addEventListener('click', () => {
    if(screen.value === ''){
        screen.value = ''; 
    }else{
        screen.value = eval(screen.value);
    }  
})

clear.addEventListener('click', () => {
    screen.value = ''; 
})

del.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1); 
})
