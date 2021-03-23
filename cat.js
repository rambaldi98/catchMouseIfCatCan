class Cat{
    constructor(_name, _weight,_speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
    }
    speak(str){
        return this.name + " " + str;
    }
    catch(mouse){
        if (this.speed > mouse.speed)
        console.log(this.name + " da bat dc chuot " + mouse.name);
    }
    eat(mouse){
        if (mouse.status)
        {
            mouse.status = false;
            this.weight += mouse.weight;
            console.log("chuot " + mouse.name + " da bi meo " + this.name + "thit" );
        }
    }
}
let meo =  new Cat("Kieu Anh", 45, 35);