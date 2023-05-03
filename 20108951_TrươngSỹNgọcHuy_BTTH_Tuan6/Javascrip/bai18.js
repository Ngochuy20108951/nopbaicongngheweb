function KTHo(){
    let ho = document.getElementById("Ho").value;
    if (/[^a-z^A-Z]/.test(ho)) {
        document.getElementById("ErrorHo").innerHTML = "Sai cú pháp";
        return false;
    }
    else if (ho.trim() == "") {
        document.getElementById("ErrorHo").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else{
        document.getElementById("ErrorHo").innerHTML = "*";
        return true;
    }
}
function KTTen(){
    let ten = document.getElementById("Ten").value;
    if (/[^a-z^A-Z]/.test(ten)) {
        document.getElementById("ErrorTen").innerHTML = "Sai cú pháp";
        return false;
    }
    else if (ten.trim() == "") {
        document.getElementById("ErrorTen").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else{
        document.getElementById("ErrorTen").innerHTML = "*";
        return true;
    }
}
function KTEmail(){
    let Email = document.getElementById("email").value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        document.getElementById("ErrorEmail").innerHTML = "Không tồn tại địa chỉ Email này";
        return false;
    }
    else if (Email.trim() == "") {
        document.getElementById("ErrorEmail").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else{
        document.getElementById("ErrorEmail").innerHTML = "*";
        return true;
    }
}
function CMail(){
    let Email = document.getElementById("email").value;
    let KTMail = document.getElementById("CheckMail").value;
    if (KTMail!=Email) {
        document.getElementById("ErrorKTmail").innerHTML = "Email không khớp";
        return false;
    }
    else if (KTMail.trim() == "") {
        document.getElementById("ErrorKTmail").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else{
        document.getElementById("ErrorKTmail").innerHTML = "*";
        return true;
    }
}
function KTPass(){
    let pass = document.getElementById("password").value;
    if (pass.trim() == "") {
        document.getElementById("ErrorPass").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else{
        document.getElementById("ErrorPass").innerHTML = "*";
        return true;
    }
}
function KTDate(){
    let NS = document.getElementById("Date").value;
    if (/[^0-9]/.test(NS)) {
        document.getElementById("ErrorDate").innerHTML = "Phải nhập số";
        return false;
    }
    else if (NS.trim() == "") {
        document.getElementById("ErrorDate").innerHTML = "Bắt buộc phải nhập";
        return false;
    }
    else if(eval(NS)>2004){
        document.getElementById("ErrorDate").innerHTML = "Bạn chưa đủ 18 tuổi";
    }
    else{
        document.getElementById("ErrorDate").innerHTML = "*";
        return true;
    }
}
function CheckAll(){
    if(!KTHo() || !KTTen()|| !KTEmail() || !CMail() || !KTPass()|| !KTDate())
    {
        alert("Có phần chưa điền");
        return false;
    }
}