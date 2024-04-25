

document.getElementById("calculate").addEventListener("click", calculate)
function calculate() {

let input1 = document.getElementById("item1").value;
let input2 = document.getElementById("item2").value;



// let answer= parseFloat (input1) + parseFloat (input2)

//   console.log(answer) 

  var answer = (parseInt (input1) * parseInt (input2));
  document.getElementById("result").value = answer
 
  
}


