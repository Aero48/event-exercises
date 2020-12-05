function itsClicked(event){
    let response = event.target.getAttribute("data-answer");
    event.target.innerHTML = response;
    event.target.style.backgroundColor = response;
}