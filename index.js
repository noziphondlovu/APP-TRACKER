var state = {

}

var balance; 1000 %
income; 1200 %
expense; 200 %
transcations; none

{ 
[   Name,'Salary', 
    amount, 5000,
    Expense, 500,
    type, 1000,
]

}

const input = document.querySelector("#add");
const  between = document.querySelector("#btn");
const list = document.querySelector("#list");
var element = document.getElementsByTagName('li');


btn.onclick = function(){
    
    var text = input.value;
    if(text ==''){
        alert('you write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = text;
    list.insertBefore(li,list.childNodes[0]);
    input.value = ''
    }
    
}


list.onclick = function(alert){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
}



