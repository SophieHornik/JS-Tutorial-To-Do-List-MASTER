// CODE EXPLAINED channel
//ch2
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const element = document.getElementById("element");
element.insertAdjacentHTML(position, text);
const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const Line_through="lineThrough"

function addToDo(toDo,id,done,trash){
    if(trash){ return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE= done? Line_Through : "";
const text = `<li class="item">
    <i class="co fa  ${DONE}fa-circle-thin" job="complete" id="${id}></i>
    <p class="text ${LINE}"> ${toDo} </p>
    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
</li>`
const position="beforeend";
list.insertAdjacentHTML(position,text);
}
addToDo("Drink Coffee");
//ch5
document.addEventListener("keyup",function(event){
    if(KeyboardEvent.keyCode13){
const toDo = input.value;
if(toDo){
    //ch6
addToDo(toDo,id,false,false);
list.push(
    {
        name:toDo,
        id: id,
        done:false,
        trash:false
        }
);

input.value="";
id++;
    }
});
//ch7
