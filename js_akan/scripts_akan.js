function calcAkanName(){
    var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
    var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];
    //declaring the variables to be used in calculating birthday
    var Year =parseInt(document.getElementById("year").value);
    var Month =parseInt(document.getElementById('month').value);
    var Day =parseInt(document.getElementById("day").value);
    //changing the variable variables input from strings to numbers using parseInt()
    if(Month<=0||Month >12){
        alert("Add a correct month!!!");
    }
    else if(Day <=0||Day>31){
        alert("Add the correct day !!!")
    }
    else if(Month==2 && Day>29){
        alert("Wrong date input!!!!")
    }
    var day= new Date(Year +"/"+ Month+"/"+ Day);
    var Bday= day.getDay();
  
    if(Male.checked==true){
        alert("your Akan name is "+maleName[Bday])
        alert("and you were born on a"+Days[Bday])
    }
    //output depending on gender selection either male or female
    else {
        alert("Your Akan name is "+femaleName[Bday])
        alert("and you were born on a "+Days[Bday])
   }
  }
  
