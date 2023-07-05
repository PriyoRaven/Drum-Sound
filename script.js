var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<noOfDrumButtons; i++) {

    //on-display click
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
        //Keyboard click recognisation

    addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key) {

        switch (key) {
            case "a":
                var tom1 = new Audio('sound/tom-1.mp3');
                tom1.play();
            break;
            
            case "s":
                var tom2 = new Audio('sound/tom-2.mp3');
                tom2.play();
            break;
            
            case "d":
                var tom3 = new Audio('sound/tom-3.mp3');
                tom3.play();
            break;
            
            case "f":
                var tom4 = new Audio('sound/tom-4.mp3');
                tom4.play();
            break;
            
            case "g":
                var snare = new Audio('sound/snare.mp3');
                snare.play();
            break;
            
            case "h":
                var crash = new Audio('sound/crash.mp3');
                crash.play();
            break;
            
            case "j":
                var kickbass = new Audio('sound/kick-bass.mp3');
                kickbass.play();
            break;

        
            default: console.log(buttonInnerHTML);

        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 200);
}