var i = 0;
var j = 2;

function changeBalloon() {

    var balloon = document.getElementById("balloon");

    if (balloon.style.width <= "415")
    {
            balloon.style.width = (balloon.offsetWidth + 10) + "px";
            balloon.style.height = (balloon.offsetHeight + 10) + "px";
    }
    else
    {
        balloon.style.width = 200 + "px";
        balloon.style.height = 200 + "px";
    }
    changeColour(balloon);
}

function changeColour()
{
    console.log(i);
    switch (i)
    {
        case 0:
            i++;
            document.getElementById("balloon").style.background = "green";
        break;
        case 1:
            i++;
            document.getElementById("balloon").style.background = "blue";
        break;
        case 2:
            i = 0;
            document.getElementById("balloon").style.background = "red";
        break;
    }
}

function changeLess() {

    var balloon = document.getElementById("balloon");

    if (balloon.style.width > "200")
    {
            balloon.style.width = (balloon.offsetWidth -5) + "px";
            balloon.style.height = (balloon.offsetHeight -5) + "px";
    }
    changeReverse(balloon);
}

function changeReverse()
{
    switch (j)
    {
        case 0:
            j = 2;
            document.getElementById("balloon").style.background = "green";
        break;
        case 1:
            j--;
            document.getElementById("balloon").style.background = "blue";
        break;
        case 2:
            j--;
            document.getElementById("balloon").style.background = "red";
        break;
    }
}