chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		
			runAnimation();
		
			function runAnimation(){
				
				document.querySelector(request.brioData[0]).className += " " + request.brioData[1] + " animated";
				
				setTimeout(function(){
				
					if (document.querySelector(request.brioData[0]).classList.contains(request.brioData[1])) { 	
					
						document.querySelector(request.brioData[0]).classList.remove(request.brioData[1]);
						
						document.querySelector(request.brioData[0]).classList.remove('animated');
					
					}else{
					
					//Do nothing...
					
					}
				
				}, 1000);
			
			}
		
	}
);



