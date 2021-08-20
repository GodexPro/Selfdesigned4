class Box{
    constructor(x,y){
        var opt = {
            friction : 0.3
        }

        this.body = Bodies.rectangle(x,y,30,30,opt);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}