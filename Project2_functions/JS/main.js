function My_First_Function() { //*Naming My function
    var str="This text is blue !";//* defining variable 
    var result=str.fontcolor("blue");//*defining other variable 
    document.getElementById("Blue_Text").innerHTML=result; //*
}
function myFunction() { //*Creating another function
    var x = document.getElementById("demo");//*creating variable so paragraph would turn blue on press
    x.style.color = "blue"; //*assigning color
  }

  function function2() { //Creating function for Concatenate
var sentence = "This is awkward way ";//writing first concatenate sentence
sentence+="to write a sentence";//writing second concatenate sentence
document.getElementById("Concatenate").innerHTML=sentence;//*displaying the concattenated sentence
  }