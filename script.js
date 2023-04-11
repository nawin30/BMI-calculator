let calculateBmi= () => {

let height = document.getElementById("ht").value;
let weight = document.getElementById("wt").value;

let bmi = (weight / ((height * height) / 10000)).toFixed(2);

document.getElementById('heading').innerHTML = "Your BMI is"
document.getElementById('bmi-ratio').innerHTML = bmi  

if (bmi<18.5){
    document.getElementById('message').innerHTML =" You are under weight"
}
else if(bmi>=18.5 && bmi <=24.99){
    document.getElementById('message').innerHTML =" You are on normal weight"
} else if (bmi>=25 && bmi <=29.99){
    document.getElementById('message').innerHTML =" You are Overweight"
}
else{
    document.getElementById('message').innerHTML =" You are Obesse"
}
}

let reload = () =>{
    window.location.reload()
}

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

switch (true) {
  case hrs > 17 : greet = "Good Evening </br> Welcome to  our BMI Calculator!";
  break;
  case hrs > 12 : greet = "Good Afternoon </br> Welcome to  our BMI Calculator!";
  break;
  case hrs > 6 : greet = "Good Morning </br> Welcome to  our BMI Calculator!";
  break;
  default: greet = "Welcome... but isn't it bed time now?";
}

document.getElementById('greet').innerHTML =
'<b>' + greet + '</b> Please check your BMI.';




