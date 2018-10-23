
function init(){
	// task 2
	
	let images = document.getElementById("container").getElementsByTagName("img");
	
	var i;
	
	for(i=0;i<images.length;i++)
	{
		if (i % 2 == 0)
		{
			images[i].src = "flower1.png";
		}
		else 
			images[i].src = "flower2.png";
	}

	// task 3
	document.getElementById("t3").innerHTML ="Your are doing great!"
	
	// task 4
	let image = document.createElement("img");
	
	image.src = "flower2.png"
	
	var span = document.getElementById("new_element");
	
	span.appendChild(image);
	
	// task 5

	let spans = document.getElementsByTagName("span");
	
	let colors = ["pink", "purple","blue","green","yellow","orange","red" ];

	for (var i = spans.length - 1; i >= 0; i--) 
	{
		spans[i].style.color = colors[ spans.length - 1 - i ];
	}
	
	
	
	
	// task 6
	var changeSrc = function(event) 
	{
		if (event.target.src) 
		{
			let filename = event.target.src.replace(/^.*[\\\/]/, '');
			
			if(filename.charAt(6) == '1')
				event.target.src = "flower2.png";
			else 
				event.target.src = "flower1.png";
		}
		
		
	};

document.getElementById("event").addEventListener("mouseover", changeSrc);
	
}

init();