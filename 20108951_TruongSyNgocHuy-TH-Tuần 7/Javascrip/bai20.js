let i=0
function dangky(){
    let hoten=document.getElementById("txtHoten").value
    let errHoten=document.getElementById("errHoten")
    if(hoten.trim()==""){
        errHoten.innerHTML="họ tên bắt buộc nhập"
        return false
    }
    if(/[0-9]/.test(hoten)){
        errHoten.innerHTML="họ tên không chứa số"
        return false
    }
    errHoten.innerHTML="*"
    let LOAI= "LT" 
    let LOAITH=document.getElementById("rdoTH").checked
    if(LOAITH)
        LOAI="TH"
    let MONHOC=document.getElementById("selMH").value
    let LOP=document.getElementById("selLOP").value
    let row='<tr><td class="text-center">'+(++i)+'</td><td class="text-center">'+hoten+'</td><td class="text-center">'+MONHOC+'</td><td class="text-center">'+LOP+'</td><td class="text-center">'+LOAI+"</td></tr>"
    let myTable=document.getElementById("tbl")
    let newrow=myTable.insertRow(myTable.rows.length)
    newrow.innerHTML=row
    return true
}