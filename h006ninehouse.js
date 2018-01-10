var getstart=document.getElementById('startbtn');
var getend=document.getElementById('endbtn');
var house=document.getElementsByClassName('myhouse');

function change3color(){
	for(var i=0;i<3;i++){
		var j=Math.floor(Math.random()*9);
		var randomcolor='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
		house[j].style.backgroundColor=randomcolor;
	}
}

getstart.addEventListener('click',function(){
	startbling= setInterval(change3color,500)
})
getend.addEventListener('click',reset)

function reset(){
	clearInterval(startbling)
	for(var k=0;k<9;k++){
		house[k].style.backgroundColor='orange';
	}
}


