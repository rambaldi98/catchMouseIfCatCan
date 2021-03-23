class Product{
    constructor(_name, _price, _number, _description) {
        this.name = _name;
        this.price = _price;
        this.number = _number;
        this.description = _description;
    }
    getAmount(){
        return this.price * this.number;
    }
}

let sp1= new Product("But thien long", 4, 3, "https://thienlonggroup.com/old_images/assets/images/tin-tuc-su-kien/27-03/Anh-1.jpg");
let sp2= new Product("But thien long 2", 5, 3, "Mực xanh");
let sp3= new Product("But thien long 3", 4, 9, "Mực tím");
let sp4= new Product("But thien long 4", 4, 10, "Mực đỏ");