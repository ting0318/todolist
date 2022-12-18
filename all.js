const add = document.querySelector(".toDoList");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");

let data = [];

function myList(){
	let doList = "";
	data.forEach(function(item,index){
		doList+=`<li data-num="${index}">${item.content}</li>`;
	})
	list.innerHTML = doList;
}

// 新增待辦事項
btn.addEventListener("click",function(e){
	if(add.value.trim()==""){
		alert("請輸入正確資訊");
	}
	let doMyList = {};
	doMyList.content = add.value;
	data.push(doMyList);
	add.value="";
	myList();
})

// 刪除待辦事項
list.addEventListener("click",function(e){
	let num = e.target.getAttribute("data-num");
	if(e.target.value==e.target.getAttribute("data-num")){
		data.splice(num,1);
		alert("刪除成功");	
	}
	myList();
})

