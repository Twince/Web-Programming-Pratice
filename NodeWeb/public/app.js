window.onload = function(){
    const chatInput = document.querySelector("#msgText");
    const sendBtn = document.querySelector("#sendBtn");

    chatInput.addEventListener("input", e => {
        if(e.target.value !== "") {
            sendBtn.classList.add("on");
        } else {
            sendBtn.classList.remove("on");
        }
    })
}