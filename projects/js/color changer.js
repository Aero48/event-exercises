function itsClicked(event){
    let response = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = response;
}