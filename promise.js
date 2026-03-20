var promise= new Promise((resolve,reject)=>{
    let success=true;
    if(success)
    resolve("Data Loaded");
    else
    reject("Error Occured");
});

promise.then(result=>console.log(result)).
catch(error=>console.log(Error));



try{
    var x= y+10;
}
catch(error){
    console.log(error.message);
}


localStorage.setItem("name","Jeet");
localStorage.getItem("name");
localStorage.removeItem("name");
