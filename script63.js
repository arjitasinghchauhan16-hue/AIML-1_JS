let employees=[];

function addEmployee(){
    let name=document.getElementById("name").value;
    let empId=document.getElementById("empId").value;
    let salary=parseFloat(document.getElementById("salary").value);
    let dept=document.getElementById("dept").value;
    if(name === "" || empId === "" || isNaN(salary) || dept === ""){
        alert("please fill all the fields properly");
        return;
    }
    let employee= {
        name: name,
        id: empId,
        salary: salary,
        department: dept,
    };
    employees.push(employee);
    alert("Employee Added Successfully!");
    document.getElementById("name").value="";
    document.getElementById("empId").value="";
    document.getElementById("salary").value="";
     document.getElementById("dept").value="";
    
    }

function displayEmployees() {
    let output= "<h3>All Employees</h3>";
    employees.forEach((emp)=> {
        output += `
        Name: ${emp.name} |
        Id: ${emp.id}  |
        Salary: ${emp.salary} |
        Dept: ${emp.department} <br>
        `;
    })
}

funtion filterSalary(){
    let filtered=employees.filter((emp) => emp.salary > 50000);
    let output= "<h3>Employees with Salary> Rs.50,000</h3>";
    filtered.forEach((emp=>{
        output+= `
        Name: ${emp.name} |
        Id: ${emp.id}  |`
    }))
}

