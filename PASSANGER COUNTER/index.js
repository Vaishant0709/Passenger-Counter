let count=0
let inc_btn=document.getElementById("inc_btn")
let counter=document.getElementById("counter")
let save_btn=document.getElementById("save_btn")
let prev_ent=document.getElementById("prev-ent")

function increment(){
  count++
  counter.textContent=count
}
function save(){
  let numb=count+" - "
  prev_ent.textContent+=numb
  count=0
  counter.textContent=count
}
function reset(){
  count=0
  counter.textContent=count
  prev_ent.textContent=" PREVIOUS ENTRIES : "
}