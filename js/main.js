let firstNameInput = document.getElementById('firstName') ;
let dateOfBirthInput = document.getElementById('dateOfBirth');
let emailInput    =  document.getElementById('emailInput') ;
let PhoneInput   = document.getElementById('PhoneInput');
let addresInput   = document.getElementById('addresInput');
let codeId       = document.getElementById('codeId');
let dataContainers ;

if(localStorage.getItem('users') == null)
{
    dataContainers = [];
}
else
{
    dataContainers = JSON.parse(localStorage.getItem('users'));
    displayElements();
}


function addElements(){
    let user = {
        pName : firstNameInput.value,
        pDate : dateOfBirthInput.value,
        pEmail : emailInput.value ,
        pPhone : PhoneInput.value,
        pAddress : addresInput.value,
        pCode   : codeId.value
    }
   // console.log(user);
    dataContainers.push(user);
    displayElements();
    clearElements();
    localStorage.setItem('users' ,JSON.stringify(dataContainers));
}

function displayElements(){
    let elements = "";
    for(var i = 0 ; i < dataContainers.length ; i++)
    {
        elements+=`  <tr>
        <td>${dataContainers[i].pName}</td>
        <td>${dataContainers[i].pDate}</td>
        <td>${dataContainers[i].pEmail}</td>
        <td>${dataContainers[i].pPhone}</td>
        <td>${dataContainers[i].pAddress}</td>
        <td>${dataContainers[i].pCode}</td>
        <td><button onclick="deleteElements(${i})" class="btn btn-danger w-100">Delete</button></td>
    </tr>
        
        `;
    }
    document.getElementById('tableRow').innerHTML =elements ;
}

function deleteElements(index){
    dataContainers.splice(index,1);
    localStorage.setItem('users' ,JSON.stringify(dataContainers));
    displayElements();
}

function clearElements(){

    firstNameInput.value     = "" ;
    dateOfBirthInput.value    = "" ;
    emailInput.value          = "" ;
    PhoneInput.value          = "" ;
    addresInput.value         = "";
    codeId.value              = "" ;

}