let red = 0;
let green = 0;
let blue = 0;

let dvColorBlock = document.getElementById("colorBlock");
let dvIndicator = document.getElementById("indicator");

function itsClicked(event){
    red += Number(event.target.getAttribute("data-red"));
    green += Number(event.target.getAttribute("data-green"));
    blue += Number(event.target.getAttribute("data-blue"));

    //console.log(red);
    //console.log(green);
    //console.log(blue);

    dvColorBlock.style.backgroundColor = "rgb(" + red + "," + green + "," + blue+ ")";
    dvIndicator.innerHTML = "Current Color: " + dvColorBlock.style.backgroundColor;
}