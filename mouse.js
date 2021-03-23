class Mouse{
    constructor(_name, _weight,_speed) {
        this.status = true;
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    speak(str){
        return this.name + " " + str;
    }

}

let chuot1 = new Mouse("Chuot 1", 49, 30);
let chuot2 = new Mouse("Chuot 2", 65, 40);