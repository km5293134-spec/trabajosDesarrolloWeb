const btnColor = document.querySelector('#btn_color');

const padre = document.querySelector('#div_padre');

btnColor.addEventListener('click',()=>{

    padre.classList.toggle('modo_color');

});