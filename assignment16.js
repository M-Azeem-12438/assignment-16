function ftask1()
{
    var up=document.getElementById("task1i").value
    var up1=up.toUpperCase()
    console.log(up1);
    if(up==up1)
    {
        document.getElementById("task1r").innerHTML=up+" is in upper case"
    }
    else
    {
        document.getElementById("task1r").innerHTML=up+" is in lower case"
    }
}

function ftask2()
{
var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var index=document.getElementById("task2i").value
document.getElementById("task2r").innerHTML=dayName[index]
}

function ftask3()
{
var monthName=["January has 31 day","Februray has 28 day","March has 31 day","April has 30 day","May has 31 day","June has 30 day","July has 31 day","August has 31 day","September has 31 day","October has 31 day","November has 30 day","December has 31 day"]
var index=document.getElementById("task3i").value
document.getElementById("task3r").innerHTML=monthName[index-1]
}

function ftask5()
{
    var num1=document.getElementById("task5ia").value
    var num2=document.getElementById("task5ib").value
    var num3=document.getElementById("task5ic").value
    var res=parseInt( num1) +parseInt( num2) +parseInt( num3);
    console.log(res);
    if(res==180)
    {
        document.getElementById("task5r").innerHTML="Valid Triangle" 
    }
else{
    document.getElementById("task5r").innerHTML="invalid Triangle" 
}
}

function ftask6()
{
    var num1=document.getElementById("task6ia").value
    var num2=document.getElementById("task6ib").value
    var num3=document.getElementById("task6ic").value

    if(parseInt(num1)+parseInt(num2)>parseInt(num3)||parseInt(num2)+parseInt(num3)>parseInt(num1)||parseInt(num1)+parseInt(num3)>parseInt(num1))
    {
        document.getElementById("task6r").innerHTML="Valid Triangle <br/> NOTE:A triangle is valid if sum of its two sides is greater than the third side" 
    }

else{
    document.getElementById("task6r").innerHTML="invalid Triangle" 
}
}

function ftask7()
{
    var num1=document.getElementById("task7ia").value
    var num2=document.getElementById("task7ib").value
    var num3=document.getElementById("task7ic").value

    console.log(num1);
    console.log(num2);
    console.log(num3);
 if(num1==num2==num3)
    {
        document.getElementById("task7r").innerHTML="Equilaterial Triangle <br/> NOTE:A triangle is Equilaterial if all sides are equal" 
    }
else if(num1==num2||num2==num3||num3==num1)
{
    document.getElementById("task7r").innerHTML="Isosceles Triangle <br/> NOTE:A triangle is Isosceles if any two sides are equal" 
}
else if(num1!=num2!=num3)
{
    document.getElementById("task7r").innerHTML="Scalene Triangle <br/> NOTE:A triangle is Scalene if all sides are not equal" 
}
}
