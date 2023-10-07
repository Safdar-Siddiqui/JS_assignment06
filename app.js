// ------------ Task 01 ------------  

var num1 = +prompt("Please enter a number");

document.write("<h3> Result: </h3>");
document.write("The value of a is: " + num1 + "<br>");
document.write(".................................", "<br>");
document.write("The value of ++a is: " + ++num1 + "<br>");
document.write("Now the value of a is: " + num1 + "<br> <br>");

document.write("The value of a++ is: " + num1++ + "<br>");
document.write("Now the value of a is: " + num1 + "<br> <br>");

document.write("The value of --a is: " + --num1 + "<br>");
document.write("Now the value of a is: " + num1 + "<br> <br>");

document.write("The value of a-- is: " + num1-- + "<br>");
document.write("Now the value of a is: " + num1 + "<br> <br>");

document.write("<hr> <hr>")


// ------------ Task 02 ------------

var a=2; b=1;
var result= --a - --b + ++b + b--;

document.write("Initially a was equal to 2 and b was equal to 1", "<br>", "After applying the math expressions ", "<br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");


document.write("--a; // 1 ", "<br>");
document.write("--a - --b; // 1 - 0", "<br>");
document.write("--a - --b + ++b; // 1 - 0 + 1 ", "<br>");
document.write("--a - --b + ++b + b--; // 1 - 0 + 1 + 1", "<br>");
document.write("b=0 because of b--; <br> but result=3 because last b-- before turning to 0 was 1 and smae value was posted in result variable due to post decrement // 1 - 0 + 1 + 1", "<br>");

document.write("<hr> <hr>");


// ------------ Task 03 ------------

var userName= prompt("Please enter your name");
document.write("Hello " + userName + "! Welcome to my page");

document.write("<hr> <hr>");


// ------------ Task 04 ------------

var multiplicationTable = prompt("Please enter a number for Table of Multiplication");
var i = 1;
if(multiplicationTable === ""){
    multiplicationTable = Number.multiplicationTable;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
    document.write("5 x " + i + " = " + (5*i) + "<br>");
    i++;
}
else{
    +multiplicationTable;

    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
    document.write(multiplicationTable + " x " + i + " = " + (multiplicationTable*i) + "<br>");
    i++;
}

document.write("<hr> <hr>");



// ------------ TASK 05 ------------

let totalMarks = 100;
let sub1 = prompt("Enter Name of 1st Subject");
let marks1 = +prompt("Enter Marks for 1st Subject");
let percentage1 = marks1 *100/ totalMarks;

let sub2 = prompt("Enter Name of 2nd Subject");
let marks2 = +prompt("Enter Marks for 2nd Subject");
let percentage2 = marks2 *100/ totalMarks;

let sub3 = prompt("Enter Name of 3rd Subject");
let marks3 = +prompt("Enter Marks for 3rd Subject");
let percentage3 = marks3 *100/ totalMarks;

var gTotalMarks = 300;
let totObtMarks = marks1 + marks2 + marks3;
let totPercentage = totObtMarks * 100 / gTotalMarks;


let tbl = document.createElement("table");
tbl.setAttribute("id", "myTable");
document.body.appendChild(tbl);

var row1 = document.createElement("tr");
row1.setAttribute("id", "Tr1");
document.getElementById("myTable").appendChild(row1);

for(var i=1; i<=4; i++){
    var txtNode;
    if(i==1){
        txtNode = "Subject"
    }
    else if(i==2){
        txtNode = "Total Marks"
    }
    else if(i==3){
        txtNode = "Obtained Marks"
    }
    else if(i==4){
        txtNode = "Percentage"
    }

    var col = document.createElement("td");
    var colData = document.createTextNode(txtNode);
    col.appendChild(colData);
    document.getElementById("Tr1").appendChild(col);
    col.style.fontWeight="bold";
    col.style.textAlign="center";

}

var row2 = document.createElement("tr");
row2.setAttribute("id", "Tr2");
document.getElementById("myTable").appendChild(row2);

for(var j=1; j<=4; j++){
    var txtNode;
    if(j==1){
        txtNode = sub1;
    }
    else if(j==2){
        txtNode = totalMarks;
    }
    else if(j==3){
        txtNode = marks1;
    }
    else if(j==4){
        txtNode = percentage1 + "%";
    }

    var col = document.createElement("td");
    var colData = document.createTextNode(txtNode);
    col.appendChild(colData);
    document.getElementById("Tr2").appendChild(col);

}

var row3 = document.createElement("tr");
row3.setAttribute("id", "Tr3");
document.getElementById("myTable").appendChild(row3);

for(var k=1; k<=4; k++){
    var txtNode;
    if(k==1){
        txtNode = sub2;
    }
    else if(k==2){
        txtNode = totalMarks;
    }
    else if(k==3){
        txtNode = marks2;
    }
    else if(k==4){
        txtNode = percentage2 + "%";
    }

    var col = document.createElement("td");
    var colData = document.createTextNode(txtNode);
    col.appendChild(colData);
    document.getElementById("Tr3").appendChild(col);

}

var row4 = document.createElement("tr");
row4.setAttribute("id", "Tr4");
document.getElementById("myTable").appendChild(row4);

for(var m=1; m<=4; m++){
    var txtNode;
    if(m==1){
        txtNode = sub3;
    }
    else if(m==2){
        txtNode = totalMarks;
    }
    else if(m==3){
        txtNode = marks3;
    }
    else if(m==4){
        txtNode = percentage3 + "%";
    }

    var col = document.createElement("td");
    var colData = document.createTextNode(txtNode);
    col.appendChild(colData);
    document.getElementById("Tr4").appendChild(col);

}

var row5 = document.createElement("tr");
row5.setAttribute("id", "Tr5");
document.getElementById("myTable").appendChild(row5);

for(var n=1; n<=4; n++){
    var txtNode;
    if(n==1){
        txtNode = "";
    }
    else if(n==2){
        txtNode = gTotalMarks;
    }
    else if(n==3){
        txtNode = totObtMarks;
    }
    else if(n==4){
        txtNode = totPercentage + "%";
    }

    var col = document.createElement("td");
    var colData = document.createTextNode(txtNode);
    col.appendChild(colData);
    document.getElementById("Tr5").appendChild(col);
    col.style.fontWeight="bold";

}





document.write("<hr> <hr>");
