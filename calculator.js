//Creates arrays to hold values.
var ArrayX = [];
var ArrayOp = [];
var ArrayY = [];
var ArrayResult = [];

//Starts while loop
while(1){
//Get input from user.
var x = window.prompt("What is the Value of X?");
ArrayX.push(x);
var op = window.prompt("What is the Operation?");
ArrayOp.push(op);
var y = window.prompt("What is the Value of Y?");
ArrayY.push(y);

//Check to see if x and y are number.
xTF = isNaN(x);
yTF = isNaN(y);

//calculate x and y and store reult in result array.
  if (op == "+") {
    if(xTF == false && yTF == false){
      let a = parseFloat(x) + parseFloat(y);
      ArrayResult.push(a);
    } else {
      ArrayResult.push("Invalid Input");
    }
  } else if (op == "-") {
    if(xTF == false && yTF == false){
      let a = parseFloat(x) - parseFloat(y);
      ArrayResult.push(a);
    } else {
      ArrayResult.push("Invalid Input");
    }
  } else if (op == "*") {
    if(xTF == false && yTF == false){
      ArrayResult.push(x * y);
    } else {
      ArrayResult.push("Invalid Input");
    }
  } else if (op == "/") {
    if(xTF == false && yTF == false){
      ArrayResult.push(x / y);
    } else {
      ArrayResult.push("Invalid Input");
    }
  } else if (op == "%") {
    if(xTF == false && yTF == false){
      ArrayResult.push(x % y);
    } else {
      ArrayResult.push("Invalid Input");
    }
  } else {
    if(xTF == false && yTF == false){
      ArrayResult.push("Invalid Operater!");
    } else {
      ArrayResult.push("Invalid Input");
    }
  }

//Check to see if user would like to continue.
var resume = window.confirm("Would you like to continue?");
  if(resume == false){
    break;
    }//if
}//while

//Creates Table Header.
document.write("<table>");
document.write("<tr><th>X-Value</th><th>Operator</th><th>Y-Value  </th><th>Result</th></tr>");
// Calls CreateTable.
createTable(ArrayX,ArrayOp,ArrayY,ArrayResult);
document.write("</table>");


//Create Table Data.
function createTable(Array1,Array2,Array3,Array4){
	for (var i = 0; i < Array1.length; i++){
		document.write("<tr><td>"+Array1[i]+"</td><td>"+Array2[i]+"</td><td>"+Array3[i]+"</td><td>"+Array4[i]+"</td></tr>`");
	}//for
}//createTable

//Variables 
var min = Infinity;
var max = -Infinity;
var avg = 0;
var total = 0;
var iterations = 0;
// Add Up Results Arrray
for (var i = 0; i < ArrayResult.length; i++){
    let t = isNaN(ArrayResult[i]);
    if(t == false){
		total += parseFloat(ArrayResult[i]);
    if(ArrayResult[i] > max){
      max = ArrayResult[i];
    }//if
    if(ArrayResult[i] < min){
      min = ArrayResult[i];
    }//if
    iterations += 1;
    }//if 
}//for
avg = (total / iterations);

//Creates second Table Header like homework example.
document.write("<table>");
document.write("<tr><th>X-Value</th><th>Operator</th><th>Y-Value  </th><th>Result</th></tr>");
// Calls CreateTable.
createTable(ArrayX,ArrayOp,ArrayY,ArrayResult);
document.write("</table>");

//Creates Table Header.
document.write("<table>");
document.write("<tr><th>MIN</th><th>MAX</th><th>AVERAGE</th><th>TOTAL</th></tr>");
document.write("<tr><td>"+min+"</td><td>"+max+"</td><td>"+avg+"</td><td>"+total+"</td></tr>`");




