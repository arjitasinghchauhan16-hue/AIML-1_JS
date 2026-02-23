// var a =10;
// var b=20;
// var linebreak= "<br/>";

// document.write("(a==b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// var count;
// document.write("Starting loop"+"<br/>");
// for(count=0;count<10;count++){
//     document.write("current count:"+count);
//     document.write("<br/>");
// }
// document.write("loop stopped!");

const person={
    fname:"Arjita",
    lname:"Singh",
    age:20,
}
for(let x in person){
    console.log("personal details:"+x+":"+person[x])
}