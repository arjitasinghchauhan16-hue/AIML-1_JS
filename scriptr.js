function calculateResult(){

    const n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){

        let x=parseFloat(prompt("Enter the subject no."+(i+1)))
        total+=x;
       }
       let avg=total/n;
       let grade;
       if(avg>90){
        grade="A+";
       }
        else if(avg>80){
            grade="B";
        }
        else if(avg>70){
            grade="c";
        }
        else if(avg>60){
            grade="D";
        }
        else {
            grade="FAIL";
        }

        let result;
        if(avg>40){
            result="PASS";
        }
        else{
            result="FAIL";
        }
        

        document.getElementById("result").innerHTML="Total Marks"+total+"</br>"+"Average marks"+avg(toFixed(2))+"</br>"+"Grade:"+grade+"</br>"+"Result"+result+"</br>";
    }

