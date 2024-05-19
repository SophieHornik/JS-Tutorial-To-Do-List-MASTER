// CODE EXPLAINED channel
//ch2
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
//ch3
const element = document.getElementById("element");
element.insertAdjacentHTML(position, text);
//ch4
function addToDo(toDo){
const text = `<li class="item">
    <i class="co fa fa-circle-thin" job="complete"></i>
    <p class="text"> ${toDo} </p>
    <i class="de fa fa-trash-o" job="delete"></i>
</li>`
const position="beforeend";
list.insertAdjacentHTML(position,text);
}
addToDo("Drink Coffee");