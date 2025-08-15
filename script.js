let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    if (qrText.value.length > 0) {
        qrImage.src = "";
        qrImage.src = "loader.gif";
        imgBox.classList.add("show-img");
        setTimeout(() => {
            qrText.style.border = "1px solid #494eea";
            qrImage.src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        }, 3000); 
    } else {
        qrText.style.border = "1px solid red";
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
