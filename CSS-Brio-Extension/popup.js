var _AnalyticsCode = 'UA-118535214-1';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}


document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButtonClick);
  }
});

function popup() {

		if(document.querySelector("#brioName").value ===""){
		
			error.style.display="block";
			error.innerHTML="Please fill in the id or class target name.";
		
		}else{ 
			
			if(document.querySelector("#brioName").value.startsWith("#") || document.querySelector("#brioName").value.startsWith(".")){
			
				if(document.getElementById("brioAnimation").value ==="" ){
					
					error.style.display="block";
					error.innerHTML="Please select animation.";
					
				}else{
					
					error.style.display="none";
					error.innerHTML="";
					
						chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
						
							var activeTab = tabs[0];
							
							var brioDataInput = document.querySelector("#brioName").value,
								brioDataAnimation = document.getElementById("brioAnimation").value;
							
							var xhr = new XMLHttpRequest();
							
							var animFile = "codes/"+brioDataAnimation+".txt";
							
							xhr.open("GET",animFile, true);
							
							xhr.onload = function () { 
							
								if (xhr.status >= 200 && xhr.status < 400) {
								
									var data = xhr.responseText;
								
									document.getElementById("brioCode").value = data;
								
								} else {
								
								
								}
							
							};
							
							xhr.onerror = function() {};
							
							xhr.send();
							
							chrome.tabs.sendMessage(activeTab.id, {"brioData": [brioDataInput, brioDataAnimation]});
						
						});
					
				}
				

			}else{
				
				error.style.display="block";
				error.innerHTML="Please insert the correct id or class symbol.";
						
			}
			
			
		}
   
}

function reseter(){

		document.querySelector("#brioName").value="";
		document.getElementById("brioAnimation").value="";
		document.getElementById("brioCode").value="Selected Animation CSS code goes here...";
		
		error.style.display="none";
		error.innerHTML="";
}


function copy(){
	
	var copyTextarea = document.querySelector('#brioCode');
	
	copyTextarea.select();
	
	try {
	
		var successful = document.execCommand('copy');
	
		var msg = successful ? 'successful' : 'unsuccessful';
	
		console.log('Copying text command was ' + msg);
	
	} catch (err) {
	
		console.log('Oops, unable to copy');
	
	}

}

document.addEventListener("DOMContentLoaded", function() {
	
	  document.getElementById("brioPlay").addEventListener("click", popup);
	  document.getElementById("brioReset").addEventListener("click", reseter);
	  document.getElementById("brioAnimation").addEventListener("change", popup);
	  document.getElementById("brioGrab").addEventListener("click", copy);

});



