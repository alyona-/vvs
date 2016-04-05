var page = {};
var str = new String();
page.text = str;
page.charText = document.getElementsByClassName('charText')[0];
page.result = document.getElementsByClassName('result')[0];

document.querySelector('body').addEventListener('change', function(event) {
	var target = event.target;
	do {
		var i=false;
		var classList = target.classList.toString();
		classList=classList.split(' ');
		for(var i in classList){
			if(classList[i] == 'charText') {i=true;break;}
		}
		if(i==true) break;
		target=target.parentNode;
		alert(target.parentNode);
	}while(target.tagName == 'BODY');
	event.returnValue = false;
	changeData(target.name-1, target.value);
});

function changeData (charName, charVal){
	var temp;
	page.newString = charVal.split(" ");
	var difference = 848;

	page.resultStr = new String();
	for (var i in page.newString) {
		temp = page.newString[i].split('');
		for (var i in temp){
			if(temp[i].charCodeAt()>122){
				temp[i] = temp[i].charCodeAt() -848;
				page.resultStr +=temp[i];
			}else page.resultStr +=temp[i].charCodeAt();
			page.resultStr+=' ПИ ';
		}
		page.resultStr+=" ".charCodeAt();

		if(page.newString.length)
			page.resultStr+=' ИТ ';
		else page.resultStr+=' ПИ ';
}
	document.getElementsByClassName('result')[charName].value = page.resultStr;







}


document.querySelector('body').addEventListener('keyup', function (){
	var target = event.target;
	do {
		var i=false;
		var classList = target.classList.toString();
		classList=classList.split(' ');
		for(var i in classList){
			if(classList[i] == 'charText') {i=true;break;}
		}
		if(i==true) break;
		target=target.parentNode;
	}while(target.tagName == 'BODY');
	event.returnValue = false;
	document.getElementsByClassName('charval')[target.name-1].value = target.value.length;

}, false);
