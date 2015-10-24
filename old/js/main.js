$(document).ready(function(){
	
	/* Input ======================= */
	$("input").click(function(){
		$(this).select();
	});
	/* End of Input ================ */	
	
	/* Drop Down =================== */
	
	$("li").hover(
        function(){
            $(this).children("li ul").stop().show();
        },
        function(){
            $(this).children('li ul').stop().hide();
        }
    );
	/* End of Drop Down ============ */
	
	/* Password Input ============== */
	$("input:eq(1)").focus(function(){
		$(this).attr("placeholder", "");
		$(this).attr("type", "password");
		});
		
	$("input:eq(1)").blur(function() {	
		if ( $(this).val() === "" )
		{
			$(this).attr("type", "text");
			$(this).attr("placeholder", "password");		
		}
		
		
    });
	/* End of Password Input ======= */
	
	/* Map ========================= */
		/*
		$("#content_wrapper div").click(function(){
			if ($(".map_item").html() === "@")
			{
				
				$("#map").html("This is a road!");
			}
			else if ($(".map_item").html() === "!")
			{
				
				$("#map").html("This is a TOWN!");
			}
			
			
			});
			*/
			
			$(".map_item").click(function(){
				

				$(".selected").removeClass("selected");
				$(this).toggleClass("selected");
				
				
				/*
				if ($(".map_item").hasClass("selected"))
				{
					$(	
				}
				if ($(this).hasClass("selected"))
				{
					$(this).removeClass("selected");
					$("#map").html("");
				}
				else
				{
					$(this).addClass("selected");
				}
				*/
				});
	
			$(".road").click(function(){
				$("#map").html("This is a road!").css("padding", "20px").slideDown();
				});
				
			$(".town").click(function(){
				$("#map").html("This is a town!").css("padding", "20px").slideDown();
				});
				
			$(".wastes").click(function(){
				$("#map").html("The desolate wastes...").css("padding", "20px").slideDown();
				});
				
				$("#content_wrapper #rail").click(function(){
				$("#map").html("<h2>Rail</h2> A city built on a rail line from a fallen train. Its citizens divided as first, second and coach class citizens and within those classes, divided once more into chefs and engineers. Even with these divisions the city is well unified with its food and progress in engineering. The city is primarily known for its food and its access to the mines established within the “Chasm”. Rail is a less militant town than most, but it holds secrets that many can not imagine. Many now live within the retrofitted buildings made from the old rail cars carrying on the traditions of the Saint of Soup and the Divine Chef, they who gave the founders of Rail life after the end. They who saved generations and should be imitated by those who came after.").css("padding", "20px").slideDown();
				
				
				});
			
			
			$("#content_wrapper #northernGun").click(function(){
				$("#map").html("<h2>Northern Gun</h2> Built upon an old munitions factory, Northern Gun is known for its wealth of arms and its distinct old west feel. The cowboys and cow gals make their wealth by holding their ranges, breeding cows, goats and the likes. The Rangers of Northern Gun are another well-known force, good folks ready and willing dispense justice and punish wrong doers with a steady aim, quick reflexes and a red right hand. The citizens follow a strict code of conduct (Called the Rider’s Code) given by to them by the Duke, a holy figure, a masterless man and an unwavering source of goodness who is unstoppable in the face of evil. Those who stray from the path are subject to the destruction of the Eastwood, an unstoppable force for death who rides a white horse and never speaks, simply killing the unworthy.").css("padding", "20px").slideDown();
				
				
				});
				
			
	/* End of Map ================== */
	
	
	
	
	
	/* Twitter ===================== */
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	/* End of Twitter ============== */
});