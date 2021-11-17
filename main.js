name_of_the_student_array=[];
function submit(){
    var guestname=document.getElementById("name_1").value;
        console.log(guestname);
        name_of_the_student_array.push(guestname);
    
    console.log(name_of_the_student_array);
    var student_length=name_of_the_student_array.length;
    console.log(student_length);
    
    document.getElementById("display_name").innerHTML=name_of_the_student_array.toString();
    
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
   var i=name_of_the_student_array.join("<br>");
    
    
    document.getElementById("sorted").innerHTML=i.toString();
}
function show(){
    
    console.log(name_of_the_student_array);
   var i=name_of_the_student_array.join("<br>");
    
    
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block"
}
function search(){
  var search=document.getElementById("s1").value;
  var found=0;
  var j;
  for(j=0;j<name_of_the_student_array.length;j++){
      if(search==name_of_the_student_array[j]){
          found=found+1;
      }
    }  
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}