let flag=0;

mainShow(flag);
thumbChange(flag);

function slideOnPressF() {
	let listImages=document.getElementsByClassName('theList');
	let listImages2=document.getElementsByClassName('theList2');

	for(let i of listImages){
		i.style.display="none";
	}
	for(let j of listImages2){
		j.style.display="block";
	}
}
function slideOnPressB() {
	let listImages=document.getElementsByClassName('theList');
	let listImages2=document.getElementsByClassName('theList2');

	for(let i of listImages){
		i.style.display="block";
	}
	for(let j of listImages2){
		j.style.display="none";
	}
}

function onpress(x) {
	flag=flag+x;
	//mainShow(flag);
	thumbChange(flag);
}
function thumbChange(y) {
	let k=document.getElementsByClassName('commonList');
if(y==k.length){
	y=0;
	flag=0;
}
if(y<0){
	y=k.length-1;
	flag=k.length-1;
}
	for( let i of k){
		i.style.border="medium solid #1a1a1a";
	}
	k[y].style.border="medium solid white";

	mainShow(y);
	flag=y;
}
function mainShow(index) {
	let images=document.getElementsByClassName('slider');
if(index>=0&&index<=9)
	slideOnPressB();
if(index>=10&&index<=19)
	slideOnPressF();
	for(let i of images){
		i.style.display="none";
	}
	images[index].style.display="block";
}