// let list = [
//     "Retro C02", "Retro C10", "day Ham 2 C02"
// ]
let list = [
    sp1, sp2, sp3, sp4
]
// hien thi danh sach
function showAll(){
    let content="";
    for (let i = 0; i < list.length; i++) {
        // content += `<tr>
        //     <th>${list[i]}</th>
        //     </tr>`;
        // content += "<tr><th>"+list[i]+"</th></tr>";
        content += "<tr>" +
            "<td>"+list[i].name+"</td>" +
            "<td>"+list[i].price+"</td>" +
            "<td>"+list[i].number+"</td>" +
            "<td><img width='100' src="+list[i].description+"/></td>" +
            "<td>"+list[i].getAmount()+"</td>" +

            "<td><button onclick="+"deleteTask("+i+")"+">Xoa</button><button onclick="+"edit("+i+")"+">Sua</button></td></tr>";
    }
    document.getElementById("list").innerHTML = content;
}
//tao moi
function createNewProduct(){
    //lay du lieu
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newNumber = document.getElementById("newNumber").value;
    let newDes = document.getElementById("newDescription").value;
    let newP = new Product(newName, newPrice, newNumber, newDes)
    //them moi vao mang
    list.push(newP);
    // hien thi lai ra bang
    showAll();
}
function deleteTask(index){
    //xoa trong mang
    list.splice(index, 1);
    //hien thi lai du lieu
    showAll();
}
function edit(index){
    // lay gia tri moi
    let newName = prompt("Moi nhap ten moi", list[index].name);
    let newPrice = prompt("Moi nhap gia moi", list[index].price);
    let newNumber = prompt("Moi nhap so luong moi", list[index].number);
    let newDescription = prompt("Moi nhap mo ta moi", list[index].description);
    //gan lai gia tri
    list[index].name = newName;
    list[index].price = newPrice;
    list[index].number = newNumber;
    list[index].description = newDescription;
    //hien thi lai danh sach
    showAll();
}