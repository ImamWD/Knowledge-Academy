
var nteacher=document.getElementById('nteacher');
var age=document.getElementById('age');
var salary=document.getElementById('salary');
var  coruses=document.getElementById('courses');
var  email=document.getElementById('email');
var  timee=document.getElementById('timee');
var  address=document.getElementById('address');
var addbtn=document.getElementById('addbtn');
 var teachers=[];
alert("asfdsf");
var curent;
var data= document.getElementById('data');
/*teachers =JSON.parse(localStorage.getItem('teacherslist'));
console.log (teachers);
display();*/

if(  localStorage.getItem('teacherslist')==null)
{ 
  var teachers=[];
  console.log (teachers);
 }else {
teachers =JSON.parse(  localStorage.getItem('teacherslist'));
display(); 

}


  addbtn.onclick = function() 
  {if(addbtn.innerHTML='Add Teacher'){ 
  
   sweet();
    addteacher ();
   }else{
    updateteacher();
   }
    
   
     display ();
 clear();
   }

   function sweet() 
   {
     Swal.fire({
       title: 'Add Teacher',
       html: ` <label >usre name</label>
           <input  style="width: 400px;" type="text" class="form-control" id="nteacher" placeholder="user name">
          <label for="inputEmail4">Email</label>
           <input  style="width: 400px;" type="email" class="form-control" id="email" placeholder="Email">
          <label for="">age</label>
         <input  style="width: 400px;" type="number" class="form-control" id="age" placeholder="age">
          <label class="d-block">salary</label>
          <input style="width: 400px;" type="number" class="form-control d-inline-block" id="salary" placeholder="salary " ><label for="">$</label>
          <label >address</label>
           <input  style="width: 400px;" type="text" class="form-control" id="address" placeholder="address">
       <label for="inputState">courses</label>
          <label for="inputState">courses</label>
       <select  style="width: 400px;" id="courses" class="form-control">
         <option selected>courses</option>
         <option>Java</option>
         <option >HTML and CSS</option>
         <option >C#</option>
         <option >JavaScript</option>
         <option >Python</option>
         <option >Swift</option>
         <option >C++</option>
       </select>
          <label >time</label>
       <input  style="width: 400px;" type="time" class="form-control" id="timee" placeholder="time">
       `,
       confirmButtonText: 'Add Teacher',
       focusConfirm: false,
      /* cancelButtonText: 'close',
       showCancelButton: true,
       showCloseButton: true,
       
       preConfirm: () => {
         const login = Swal.getPopup().querySelector('#login').value
         const password = Swal.getPopup().querySelector('#password').value
         if (!login || !password) {
           Swal.showValidationMessage(`Please enter login and password`)
         }
         return { login: login, password: password }
       }
     })
     .then((result) => {
       Swal.fire(`
         Login: ${result.value.login}
         Password: ${result.value.password}
       `.trim())*/ 
       
       preConfirm: () => {
       
          nteacher = Swal.getPopup().querySelector('#nteacher').value
           email = Swal.getPopup().querySelector('#email').value
         age = Swal.getPopup().querySelector('#age').value
         salary = Swal.getPopup().querySelector('#salary').value
         address = Swal.getPopup().querySelector('#address').value
         courses = Swal.getPopup().querySelector('#courses').value
        
         timee= Swal.getPopup().querySelector('#timee').value
          
       
         return { nteacher: nteacher, email: email, age: age  ,salary: salary ,address :address , courses :courses,timee :timee }
    // addteacher();
   
   }
 
     }).then((result) => {
    
      // teachers.push(r);
      // localStorage.setItem ('teacherslist',JSON.stringify (result));
   //result=JSON.parse(  localStorage.getItem('teacherslist'));
      
   this.nteacher.value=nteacher;
   this.email.value=email;
  this.age.value=age;
  this.salary.value=salary;
  this.address.value=address;
  this.courses.value=courses;
  this.timee.value=timee;






 })
addteacher ();
 } 
  function addteacher (){
    var tea={
      nteacher:this.nteacher.value=nteacher,
      email: this.email.value =email,
      age :this.age.value=age =age,
      salary: this.salary.value=salary,
     address: this.address.value=address,
     courses:this.courses.value=courses,
      timee:this.timee.value=timee
    };
   
    teachers.push(tea);
localStorage.setItem ('teacherslist',JSON.stringify (teachers));
// console.log(tea);
 console.log(teachers);
}







function display (){
var reesult='' ;

for(var i=0;i<teachers.length;i++)
{

reesult += `<tr> 
<td>${i}</td> 
<td>${ teachers[i].nteacher}</td>
<td>${ teachers[i].email }</td>
<td>${ teachers[i].age}</td>
<td>${ teachers[i].salary}</td>
<td>${ teachers[i].address }</td>
<td>${ teachers[i].courses }</td>
<td>${ teachers[i].timee }</td>

<td>  <button class='update' onclick='update(${i})' > update</button> </td>

<td>  <button class="delete" onclick="del(${i})" >delete</button> </td>
</tr>`;

}


  

data.innerHTML=reesult;
console.log(teachers);
}



function clear(){
  nteacher.value='';
  age.value='';
  salary.value='';
  
  address.value='';
  courses.value='';
  email.value='';
  timee.value='';

}

function del(index){
  teachers.splice(index,1);
  localStorage.setItem('teacherslist',JSON.stringify(teachers));
 display();
 
 }
 function search(test){
 
   var reesult='' ;
   for(var i=0;i<teachers.length;i++)
   {
     if(teachers[i].nteacher.toLowerCase().includes(test.toLowerCase())){
  
   
      
      reesult += `<tr> 
      <td>${i}</td> 
      <td>${ teachers[i].nteacher}</td>
      <td>${ teachers[i].email }</td>
      <td>${ teachers[i].age}</td>
      <td>${ teachers[i].salary}</td>
      <td>${ teachers[i].address }</td>
      <td>${ teachers[i].coruses }</td>
      <td>${ teachers[i].timee }</td>
      
      <td>  <button class='update' onclick='update(${i})' > update</button> </td>
      
      <td>  <button class="delete" onclick="del(${i})" >delete</button> </td>
      </tr>`;
      
      }
 
 console.log(test); 
 }
 
 data.innerHTML=reesult;
 }
 
delbtn.onclick = function() 
  {
    localStorage.removeItem('teacherslist') ;
    teachers=[];
    data.innerHTML='';
  }

  function update(index){ 
    console.log(index);
    sweet();
    var teach=teachers[index];
    console.log(teach);
   
   
  nteacher = teach.nteacher ;
    email= teach.email  ;
   age=teach.age.value  ;
    salary= teach.salary.value;
  address= teach.address ;
  coruses =teach.courses ;
  timee= teach.timee ;
   
   console.log(teach.nteacher);

    addbtn.innerHTML='update teacher';
    curent=index;
  
   console.log(curent);
      }
      function updateteacher(){ 
    console.log(curent);
   
        var teacheres={
          nteacher:nteacher.value,
          email:email.value,
            age:age.value,
            salary:salary.value,
           coruses:coruses.value,
           address: address.value,
           timee: timee.value,
          
        }
    
        teachers[curent].nteacher= teacheres.nteacher;
      teachers[curent].email=  teacheres.email;
        teachers[curent].age=  teacheres.age;
        teachers[curent].salary=   teacheres.salary;
        teachers[curent].courses=  teacheres.coruses;
        teachers[curent].address=  teacheres.coruses;
        teachers[curent].timee=  teacheres.timee;
       
      }
      
     

  

