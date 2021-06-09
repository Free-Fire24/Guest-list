name_of_guest_array=[];

function submit()
{
        var name1 =document.getElementById("Name_of_guest").value;
         
    name_of_guest_array.push(name1);
   
    console.log(name_of_guest_array);

    document.getElementById("display").innerHTML=name_of_guest_array;
 
}


function show() {
    var ollist;
    ollist = "<ol class='showlist'>"
    var length = name_of_guest_array.length;
    for(var s=0; s<length ; s++) {
        ollist=ollist + '<li>' + name_of_guest_array[s] + '</li>'
    }
    ollist=ollist+"</ol>"
    document.getElementById("show_list").innerHTML = ollist;
    
    }


function sort() {

name_of_guest_array.sort();
var ollist;
    ollist = "<ol class='sortlist'>"
    var length = name_of_guest_array.length;
    for(var s=0; s<length ; s++) {
        ollist=ollist + '<li>' + name_of_guest_array[s] + '</li>'
    }
    ollist=ollist+"</ol>"
    document.getElementById("sort_list").innerHTML = ollist;
    
console.log(name_of_guest_array);
}


function search() {
    var count = 0;
    var dis;
 var search_name = document.getElementById("Name_of_guest1").value;
    for(var s=0 ; s<name_of_guest_array.length ; s++) {
        if(search_name == name_of_guest_array[s]) {
           count++;
           
        }
          
    } 
        dis=  "name found  " + count + " times";
        document.getElementById("search_list").innerHTML= dis;
        
        console.log(count);
        console.log(search_name);


}