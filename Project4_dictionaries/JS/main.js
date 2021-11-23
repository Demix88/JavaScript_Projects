function my_Dictionary() { //creating function for dictionary
    var Car = { //assigining variables fpr the dictionary
        Model:"BMW",//assigning keys for dictionary
        Color:"Red",//assigning keys for dictionary
        Petrol_or_Diesel:"Diesel",//added the same key for the challange #5
        Engine_type:"Diesel",//assigning keys for dictionary
        
        Engine_size:2,//assigning keys for dictionary
        Doors:4,//assigning keys for dictionary

};
document.getElementById("Dictionary").innerHTML=Car.Petrol_or_Diesel; // running the function and displaying the result
}
function my_Dictionary1() { //creating function for dictionary
    var Car = { //assigining variables fpr the dictionary
        Model:"BMW",//assigning keys for dictionary
        Color:"Red",//assigning keys for dictionary
        Petrol_or_Diesel:"Diesel",//added the same key for the challange #5
        Engine_type:"Diesel",//assigning keys for dictionary
        
        Engine_size:2,//assigning keys for dictionary
        Doors:4,//assigning keys for dictionary

};
delete Car.Engine_size;//deleting the key from dictionary
document.getElementById("Dictionary1").innerHTML=Car.Engine_size; // running the function and displaying the result which will be undefined as key is removed
}