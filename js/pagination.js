let thisPage = 1;
//let list = document.querySelectorAll('.list .item');
let list = document.querySelectorAll('.rooms');
let limit = 6;

function loadItem(){
    begintGet = limit * (thisPage -1);
    endGet = limit * thisPage -1;
    list.forEach((item,key) => {
        if(key >= begintGet && key <= endGet){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });

    listPage();
}

loadItem();
function listPage(){
    let count = Math.ceil(list.length/limit);
    document.querySelector('.listPage').innerHTML = "";

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerHTML = 'PREV';
        prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
        document.querySelector('.listPage').appendChild(prev);
    }
    for(let i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerHTML= i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage("+ i +")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerHTML = 'NEXT';
        next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
        document.querySelector('.listPage').appendChild(next);

    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}