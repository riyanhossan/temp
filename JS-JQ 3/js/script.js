// js output

// alert("All is Ok.");
// document.write("All is ok.");
// innerHTML='';
// console.log("All is OK");

// document.getElementById("result").innerHTML="All is OK.";


// JS Variable:
// 	var number1= true;
// 	var number2 = 20;
	
// var data= typeof(number1);
	
// document.write(data);

// opertor:
 // var num1 = 50;
 // var num2 = 30;


 // var result = num1 + num2;
 // var result = num1 - num2;
 // var result = num1 * num2;
 // var result = num1 / num2;
 // var result = num1 % num2;

 // var num1 = num1 + 5;
 // num1 += 5;

 // console.log(num1);


// document.getElementById("result").innerHTML = num1 != num2;
// document.getElementById("result").innerHTML = num1 >30 && num2 >50;
// document.getElementById("result").innerHTML = num1 <30 || num2 >50;

// var age = 35;

// if (age < 18) {
// 	document.getElementById("result").innerHTML = "You are not able to go to picnic";
// }
// else if(age <=30){
// 	document.getElementById("result").innerHTML = "You are able to go to picnic with girl friend";
// }
// else if(age <=40){
// 	document.getElementById("result").innerHTML = "You are able to go to picnic with wife";
// // }
// // else{
// // 	document.getElementById("result").innerHTML = "You are able to go to picnic with grand children";	
// // }

// var i = 1;

// // for(i=1;i<=100;i++){
// // 	// document.getElementById("result").innerHTML = i;

// // 	document.write(i);
// // 	document.write("<br>");
	
// // }


// for(i=1;i<=100;i++){
// 	if (i % 2 == 0) {
// 		document.write(i);
// 		document.write("<br>");

// 	}
	
// }



// 	


$(document).ready(function(){

	// $('#hide').click(function(){
	// 	$('img').slideUp(5000);
	// });


	// $('#show').click(function(){
	// 	$('img').slideDown(5000);

	// });



	$('#toggle').click(function(){
		$('img').slideToggle(5000);
	});




});