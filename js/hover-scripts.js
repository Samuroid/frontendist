document.addEventListener("DOMContentLoaded", function() {
    const termUser = "Sambruton@Sams-macbook";
    const buttons = document.getElementById("controls");
    const closeButton = document.getElementById("closeButton");
    const minimizeButton = document.getElementById("minimizeButton");
    const maximizeButton = document.getElementById("maximizeButton");

    const displayTime = document.getElementById("displayTime");
    const date = new Date();
    displayTime.innerText = "Login time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " on " + navigator.userAgent;
    

    buttons.addEventListener("mouseover", function(ele){
        const element = ele.target;
        closeButton.classList.add("close-icon");
        minimizeButton.classList.add("minimize-icon");
        maximizeButton.classList.add("maximize-icon");
    })

    buttons.addEventListener("mouseout", function(ele){
        const element = ele.target;
        closeButton.classList.remove("close-icon");
        minimizeButton.classList.remove("minimize-icon");
        maximizeButton.classList.remove("maximize-icon");
    })

    document.getElementById("terminalInput").addEventListener("keyup", function(event){
        const contentArea = document.getElementById("content");
        
        switch( event.key ){
            case "Enter":
                if( event.target.value === "whoami" ){
                    const p = document.createElement("p");
                    p.innerText = termUser + " ~ % " + event.target.value
                    contentArea.appendChild( p )
                    event.target.value = ""; // reset the input field
                }

            break;
        }
        
    })

})