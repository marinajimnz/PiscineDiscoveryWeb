function changeColour(){
    var hexa;
    var color;
    var i;
    
    hexa = "0123456789ABCDEF";
    color ="#";
    i = 0;
    
    while(i < 6)
    {
        color = color + hexa[Math.floor(Math.random() * 16)];
        i++;
    }
    document.body.style.background = color;
}