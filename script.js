const euro = document.getElementById('euro');
let animationDuration = 4; 
let clickTimeout;

function changeAnimationDuration(newDuration) {
    euro.style.animationDuration = `${newDuration}s`;
}

euro.addEventListener('click', function() {
   
    clearTimeout(clickTimeout);

    
    if (animationDuration > 1) {
        animationDuration -= 1;
    }else if (animationDuration == 1){
        animationDuration = 0.5;
    } else if(animationDuration == 0.5){
        animationDuration = 0.25;
    } else {
        animationDuration = 0.1;
    }

    
    changeAnimationDuration(animationDuration);

    
    clickTimeout = setTimeout(() => {
        animationDuration = 4; 
        changeAnimationDuration(animationDuration);
    }, 2500);
});