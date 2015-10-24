window.onload = function(){
/* Canvas map ================== */
  if (Modernizr.canvas) {
    // let's draw some shapes!
  	//$("#content_wrapper").append("<p>Canvas detected with Modernizr-Custom and we're good to go</p");//Take line out after assignment
	console.log("Canvas detected with Modernizr-Custom and we're good to draw.");
	var theCanvas = document.getElementById('canvas_rail_map');
		if (theCanvas)
				{
					
					var ctx = theCanvas.getContext("2d");
					theCanvas.style.width='100%';
  					theCanvas.style.height='500px';
  					theCanvas.width  = theCanvas.offsetWidth;
  					theCanvas.height = theCanvas.offsetHeight;
					if (ctx)
					{
						ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,48,26,19);
ctx.strokeRect(480,48,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,76,26,19);
ctx.strokeRect(480,76,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,102,26,21);
ctx.strokeRect(480,102,26,21);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,130,26,20);
ctx.strokeRect(480,130,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,159,26,18);
ctx.strokeRect(480,159,26,18);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,187,26,19);
ctx.strokeRect(480,187,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,213,26,20);
ctx.strokeRect(480,213,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,241,26,19);
ctx.strokeRect(480,241,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,269,26,19);
ctx.strokeRect(480,269,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,295,26,20);
ctx.strokeRect(480,295,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,324,26,20);
ctx.strokeRect(480,324,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,352,26,19);
ctx.strokeRect(480,352,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(480,378,26,20);
ctx.strokeRect(480,378,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,130,26,20);
ctx.strokeRect(446,130,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,159,26,18);
ctx.strokeRect(446,159,26,18);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,187,26,19);
ctx.strokeRect(446,187,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,241,26,19);
ctx.strokeRect(446,241,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,269,26,19);
ctx.strokeRect(446,269,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,295,26,20);
ctx.strokeRect(446,295,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(446,324,26,20);
ctx.strokeRect(446,324,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(412,187,27,19);
ctx.strokeRect(412,187,27,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(412,213,27,20);
ctx.strokeRect(412,213,27,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(412,239,27,21);
ctx.strokeRect(412,239,27,21);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(412,324,27,20);
ctx.strokeRect(412,324,27,20);
ctx.fill();
ctx.stroke();

ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.strokeRect(412,352,27,19);
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(379,324,26,20);
ctx.strokeRect(379,324,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(379,295,26,20);
ctx.strokeRect(379,295,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(379,269,26,19);
ctx.strokeRect(379,269,26,19);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(379,241,26,20);
ctx.strokeRect(379,241,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(344,241,26,20);
ctx.strokeRect(344,241,26,20);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(0,0,0)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(344,324,26,20);
ctx.strokeRect(344,324,26,20);
ctx.fill();
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(493,68);
ctx.lineTo(493,379);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(472,142);
ctx.lineTo(479,142);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(472,168);
ctx.lineTo(479,168);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(472,196);
ctx.lineTo(485,196);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(438,196);
ctx.lineTo(446,196);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(425,233);
ctx.lineTo(425,241);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(366,251);
ctx.lineTo(489,249);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(392,252);
ctx.lineTo(392,334);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(357,334);
ctx.lineTo(492,334);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(425,351);
ctx.lineTo(425,334);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(459,252);
ctx.lineTo(459,334);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(459,279);
ctx.lineTo(492,279);
ctx.stroke();

ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(459,307);
ctx.lineTo(492,307);
ctx.stroke();


					}
				}
				
	var mapCanvas = document.getElementById("canvas_world_map");
		
		
		if (mapCanvas)
		{
			var ctx2 = mapCanvas.getContext("2d");
			mapCanvas.style.width='100%';
  			mapCanvas.style.height='500px';
  			mapCanvas.width  = mapCanvas.offsetWidth;
  			mapCanvas.height = mapCanvas.offsetHeight;	
			if (ctx2)
			{
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.fillRect(9,9,30,30);
				ctx2.strokeRect(9,9,30,30);
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(64,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(104,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(49,49,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(89,89,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(129,129,30,30);
				ctx2.stroke();
				
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.moveTo(39,39);
				ctx2.lineTo(144,144);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(169,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(209,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(249,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(289,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(329,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(369,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(409,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(449,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(490,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(530,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(570,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(610,129,30,30);
				ctx2.stroke();
				
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.strokeRect(650,129,30,30);
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.strokeStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.fillRect(690,129,30,30);
				ctx2.strokeRect(690,129,30,30);
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.moveTo(144,144);
				ctx2.lineTo(697,144);
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(104,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(144,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(144,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(184,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(184,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(224,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(224,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(265,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(265,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(305,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(305,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(345,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(345,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(385,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(385,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(143,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(183,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(223,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(264,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(304,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(344,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(384,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(426,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(426,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(466,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(466,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(506,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(506,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(547,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(547,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(587,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(587,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(627,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(627,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(667,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(667,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(425,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(465,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(505,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(546,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(586,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(626,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(666,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(708,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(708,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(748,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(748,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(788,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(788,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(829,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(829,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(869,24,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(869,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(707,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(747,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(787,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(828,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(868,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(748,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(788,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(829,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(869,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(24,64,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(24,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(64,104,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(24,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(64,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(104,144,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(24,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(64,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(104,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(24,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(64,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(104,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(144,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(184,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(224,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(144,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(184,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(224,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(264,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(304,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(344,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(264,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(304,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(344,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(384,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(424,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(464,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(384,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(424,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(464,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(505,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(545,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(585,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(505,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(545,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(585,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(625,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(665,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(705,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(625,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(665,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(705,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(747,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(788,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(829,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(748,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(788,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(828,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(868,184,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();
				
				ctx2.fillStyle="rgb(0,0,0)";
				ctx2.lineStyle="rgb(0,0,0)";
				ctx2.lineWidth=1;
				ctx2.beginPath();
				ctx2.arc(868,224,15,0,2*Math.PI);
				ctx2.stroke();
				ctx2.fill();
				ctx2.fill();
				ctx2.stroke();


	
			}
		}

	var underConstruction = document.getElementById("under_construction");
	
	if (underConstruction)
	{
		var ctx3 = underConstruction.getContext("2d");
		underConstruction.style.width='100%';
  		underConstruction.style.height='500px';
  		underConstruction.width  = underConstruction.offsetWidth;
  		underConstruction.height = underConstruction.offsetHeight;	
		
		if (ctx3)
		{
			ctx3.font = "28px Helvetica Neue";
			ctx3.fillText("This information is not yet available.", 20, 30);	
		}
	}
	
	var classes = document.getElementById("classes");
	
	if (classes)
	{
		var ctx4 = classes.getContext("2d");
		classes.style.width='100%';
  		classes.style.height='500px';
  		classes.width  = classes.offsetWidth;
  		classes.height = classes.offsetHeight;	
		
		if(ctx4)
		{
			ctx4.font = "28px Helvetica Neue";
			ctx4.fillText('This is a highly talked about topic.', 20,30); 
			ctx4.fillText('Whether to have "classes" or have set points players can spend.', 20, 65);
		}
	}
	} else {
    $("#content_wrapper").append("<p>Canvas dectected with Modernizr-Custom and we're not good to draw. Your current browser doesn't support it.</p>");
  }
/* End of Canvas Map =========== */
};