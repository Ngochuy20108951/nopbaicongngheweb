let sp1 = {tensp:"Loại hoa 1", hinhanh:"../Img/hinh1.jpg",soluong:1, dongia:100000}
let sp2 = {tensp:"Loại hoa 2", hinhanh:"../Img/hinh2.jpg",soluong:10, dongia:120000}
let sp3 = {tensp:"Loại hoa 3", hinhanh:"../Img/hinh3.jpg",soluong:5, dongia:140000}
let sp4 = {tensp:"Loại hoa 4", hinhanh:"../Img/hinh4.jpg",soluong:2, dongia:170000}
let sp5 = {tensp:"Loại hoa 5", hinhanh:"../Img/hinh5.jpg",soluong:15, dongia:200000}
let dssp = [sp1, sp2, sp3, sp4, sp5]
let i = 0

function napDSSP(dssp){
    dssp.forEach(sp => {
        let row = "<tr><td class='text-center'>"+(++i)+"</td><td>"+sp.tensp+"</td><td><img src='"+sp.hinhanh+"' width='100'></td><td contenteditable='true' onkeyup='getTongtien()'>"+sp.soluong+"</td><td class='text-right'>"+sp.dongia+"</td></tr>"

        let myTable = document.getElementById("tbl")
        let newRow = myTable.insertRow(myTable.rows.length)
        newRow.innerHTML = row
    });
}

function getTongtien(){
    let tongtien = 0
    let myTable = document.getElementById("tbl")
    let rows = myTable.rows.length
    for(let i = 0; i < rows; i++){
        let soluong = myTable.rows[i].cells[3].innerHTML
        let dongia = myTable.rows[i].cells[4].innerHTML
        let thanhtien = soluong * dongia

        tongtien += thanhtien
    }

    document.getElementById("total").innerHTML = tongtien
}

window.onload = function(){
    napDSSP(dssp)
    getTongtien()
}