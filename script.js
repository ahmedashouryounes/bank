

var userName = document.getElementById('userName')
var userId = document.getElementById('userId')
var userBalance = document.getElementById('userBalance')

var addBtn = document.getElementById('addBtn')


var conShow = document.getElementById('conShow')

var users = []

function addUser(){
    users.push({
        name:userName.value,
        id:userId.value,
        balance:userBalance.value
    })
}
function removeUser(i){
    users.splice(i,1)
    showUser()
}

function editBalance(i){
    i.balance = editInput.value
    showUser()
}


function showUser(){
    conShow.innerText = ''
    users.forEach((item,index)=>{

        var div = document.createElement('div')
        div.classList.add('bg','rounded-3','p-3','my-3')
        
        
        var h5Name = document.createElement('h5')
        h5Name.innerText = 'client name : ' + item.name
        h5Name.classList.add('text-capitalize','text-dark')



        var h5Id = document.createElement('h5')
        h5Id.innerText = 'client ID : ' + item.id
        h5Id.classList.add('text-capitalize','text-dark')




        var h5Balance = document.createElement('h5')
        h5Balance.innerText = 'client balance : ' + item.balance
        h5Balance.classList.add('text-capitalize','text-dark')
        

        var divEdit = document.createElement('div')
        divEdit.classList.add('d-flex','justify-content-between','align-items-center')

        var h5Edit = document.createElement('h5')
        h5Edit.innerText = 'add a new balance'
        h5Edit.classList.add('text-capitalize','text-dark')
        


        editInput = document.createElement('input')
        editInput.classList.add('form-control','w-50','text-capitalize')
        editInput.setAttribute('placeholder','enter a new balance')


        var divBtn = document.createElement('div')
        divBtn.classList.add('d-flex','my-2','justify-content-between')
        
        var removeBtn = document.createElement('button')
        removeBtn.innerText = 'remove user'
        removeBtn.classList.add('btn','btn-danger','text-capitalize')
        removeBtn.onclick = function(){
            removeUser(index)
        }


        var editBtn = document.createElement('button')
        editBtn.innerText = 'edit balance'
        editBtn.classList.add('btn','btn-success','text-capitalize')
        editBtn.onclick = function(){
            editBalance(item)
        }



        div.appendChild(h5Name)
        div.appendChild(h5Id)
        div.appendChild(h5Balance)

        divEdit.appendChild(h5Edit)
        divEdit.appendChild(editInput)
        div.appendChild(divEdit)


        divBtn.appendChild(removeBtn)
        divBtn.appendChild(editBtn)
        div.appendChild(divBtn)
        
        conShow.appendChild(div)
    })
}


addBtn.onclick = function(){
    addUser()
    showUser()
    userName.value = ''
    userId.value = ''
    userBalance.value = ''
}