const add = document.getElementById('add');
const input = document.getElementById('input')
const list = document.getElementById('list')
const clear = document.getElementById('Clear')


function addLi (){
    let newLi = document.createElement('li')
    newLi.innerText =  input.value;
    if(list.innerHTML == '<h3>Add Some Tasks to Finish</h3>'){
        list.innerHTML = ''
        list.append(newLi)
    }else {
        list.append(newLi)
    }
    
}
function ClearAll(){
    if(list.innerHTML != '<h3>Add Some Tasks to Finish</h3>'){
        list.innerHTML = '<h3>Add Some Tasks to Finish</h3>'
    }
}

add.addEventListener('click', addLi)
clear.addEventListener('click', ClearAll)