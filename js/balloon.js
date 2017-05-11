var balloon = function(sID){
	this.oWrapper = document.getElementById("wrapper1");

	this.oBalloon = {
		obj: document.getElementById(sID),
		x: Math.random() * 50,
		y: Math.random() * 100,
		strength: {
			x: 0.5,
			y: 0.5
		},
		amplifier: Math.random()*20,
		angle: 0
	}

	this.setTimer();
};

window.onload = function(){
	var oBalloon1 = new balloon('balloon1');
	var oBalloon2 = new balloon('balloon2');
	var oBalloon3 = new balloon('balloon3');
	var oBalloon4 = new balloon('balloon4');
	                          }
balloon.prototype.setTimer = function(){
	this.move();

	var oSelf = this;
	setTimeout(function(){
		 oSelf.setTimer()
	 }, 150);
};

balloon.prototype.move = function(){
	var oBalloon = this.oBalloon;

	oBalloon.y += oBalloon.strength.y;

	if(oBalloon.y  + 180 > this.oWrapper.clientHeight ){
		oBalloon.y = Math.random() * 50;
		oBalloon.x = Math.random() * 50;
		oBalloon.obj.style.top = 0;
	}

	oBalloon.angle += oBalloon.strength.x;
	oBalloon.obj.style.top = oBalloon.y + "px";
	oBalloon.obj.style.left = oBalloon.x +"px";
};

function myFunction() {
    var x = document.getElementById("myDialog");
    x.open = true;
		var oo = this;
		setTimeout(function(){ oo.setTimer() }, 1);

}

function changeImage(imgName)
{
 image = document.getElementById('theimage');
 image.src = imgName;
}

function show(area){
  if(document.getElementById(area).style.display=="none") {
    document.getElementById(area).style.display="block";
    document.getElementById(area).style.display="block";
  }
}
