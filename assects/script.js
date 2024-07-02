const inputbox = document.getElementById("input");
const button = document.getElementById("button");
const qrimg = document.getElementById("qrimg");

function generate(){
    if(inputbox.value.length > 0){
        qrimg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputbox.value}`;
        inputbox.value = "";
    }
    else{
        inputbox.classList.add("vibrate");
        setTimeout(()=>{
            inputbox.classList.remove("vibrate");
        },1000)
    }
    
}
