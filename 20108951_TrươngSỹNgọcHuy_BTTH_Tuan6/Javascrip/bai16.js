function TestIp() {
    patternIP =/((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]))\.((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]))\.((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]))\.((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]))/;
    var ip = document.getElementById("IP").value;
    if (patternIP.test(ip)) {
        alert("Đang liên kết địa chỉ IP");
        return true;
    }
    else{
        alert("Sai địa chỉ IP");
        return false;
    }
}
function TestURL(){
    patternURL=/[a-z]{4,5}\:\/\/[A-Za-z0-9]{2,}\.[a-z]{3}/
    var url = document.getElementById("URL").value;
    if(patternURL.test(url)){
        alert("Đang liên kết địa chỉ URL");
        return true;
    }
    else{
        alert("Sai địa chỉ URL");
        return false;
    }
}