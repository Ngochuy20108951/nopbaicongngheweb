function validateForm() {
    var username = document.forms["contactForm"]["username"].value;
    // var username = document.getElementById("username").value;
    var pass = document.forms["contactForm"]["pass"].value;
    // var pass = document.getElementById("pass").value;
    var RPpass = document.forms["contactForm"]["RPpass"].value;
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["Phone"].value;
    var emails = document.forms["contactForm"]["Email"].value;
    if (username == null || username == "") {
        alert("Tên đăng nhập chưa được điền");
        return false;
    } else if (pass == null || pass == "" || !(/^[a-zA-Z\d]{6,}$/.test(pass))) {
        alert("Mật khẩu không đúng form");
        return false;
    } else if (RPpass != pass)
    {
        alert("Mật khẩu không khớp");
    } else if (name == null || name == ""){
        alert("Họ tên chưa được điền");
        return false;
    }
    Namepattern=/[0-9(!@#$%^&*()_"'`?+=\.,|]/;
    if(Namepattern.test(name))
    {
        alert("Tên không được có kí tự đặc biệt và không có số");
        return false;
    }
    if(/\D/.test(phone) || !(/[0-9]{9,10}/.test(phone)))
    {
        alert("Không tồn tại số điện thoại này");
        return false;
    }
    Emailpattern=/[A-Za-z0-9]\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}/;
    if(!Emailpattern.test(emails))
    {
        alert("Không tồn tại địa chỉ email này");
        return false;
    }
}