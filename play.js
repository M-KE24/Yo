	    
	// For the Windows OS type the following command in cmd
    "build": "set \"GENERATE_SOURCEMAP=false\" && react-scripts build"
    
    // For Linux OS
    "build": "GENERATE_SOURCEMAP=false react-scripts build"
     build": "cross-env GENERATE_SOURCEMAP=false react-scripts build",    
       "scripts": {
    "build": "cross-env NODE_ENV=production OTHERFLAG=myValue webpack --config scripthome.js"
    } 
	        var myElement = document.getElementById("myElement");
    myElement.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Prevent the default right-click menu behavior
    });
