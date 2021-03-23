// function Rectangle1(width, height){
//     //thuoc tinh
//     this.width= width;
//     this.height = height;
//     //phuong thuc
//     this.getArea = function (){
//         return this.width*this.height;
//     }
//     this.getPerimeter = function (){
//         return (width+height)*2;
//     }
// }

class Rectangle{
    constructor(_width, _height) {
        this.width= _width;
        this.height= _height;
    }
    getArea(){
        return this.width*this.height;
    }

    getPerimeter(){
        return (this.height+this.width)*2;
    }
    drawCanvas(x, y){
        let e = document.getElementById("myCanvas");
        let ctx = e.getContext("2d");
        ctx.fillRect(x, y, this.width, this.height);
    }
    deleteCanvas(x, y){
        let e = document.getElementById("myCanvas");
        let ctx = e.getContext("2d");
        ctx.clearRect(x, y, this.width, this.height);
    }
}

let hcn1 = new Rectangle(10, 20);
let hcn2 = new Rectangle(45, 90);
hcn1.drawCanvas(10, 5);
hcn1.deleteCanvas(10, 5);
hcn2.drawCanvas(100, 50);
// let mtCuaKA = new Rectangle1(15, 10);

