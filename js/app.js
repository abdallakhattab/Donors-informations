'use strict';

let arrofobj = [];

function getRandomAge(max, min) {

  return Math.floor(Math.random() * (max - min) + 1);
}
function Donars(donarName, amount) {

  this.donarName = donarName;
  this.randomAge = getRandomAge(30, 18);
  this.amount = amount;
  arrofobj.push(this);

}
// Donars.prototype.bton = function(){
//   let btn = document.getElementById('btn');
//   btn.addEventListener('click',this.addingDonar );
// };
// Donars.prototype.addingDonar = function(){
//   this.bton();
//   let donName = document.getElementById('donorName').value;
//   let donamount = document.getElementById('amount').value;
//   let newDonar = new Donars(donName , donamount);
// };

let btn = document.getElementById('btn');
btn.addEventListener('click', addingDonar);
function addingDonar () {

  let donName = document.getElementById('donorName').value;
  //console.log(donName);
  let donamount = document.getElementById('amount').value;
  //console.log(donamount);
  event.preventDefault();
  let newDonar = new Donars(donName, donamount);
  let lsarr = JSON.stringify(arrofobj);
  localStorage.setItem('arrofobj', lsarr);
  //console.log(newDonar);
}
console.log(arrofobj);
function rendertable() {

  let norArrOfObj = localStorage.getItem('arrofobj');
  let norArrOfObj2 = JSON.parse(norArrOfObj);
  let table = document.getElementById('table');
  for(let i=0 ; i<= 5 ;i++){
    let trEl1 = document.createElement('tr');
    table.appendChild(trEl1);
    //   let tdEl = document.createElement('td');
    //   trEl1.appendChild(tdEl);
    trEl1.textContent = norArrOfObj2;
  //console.log(norArrOfObj2);
  }
}
rendertable();
