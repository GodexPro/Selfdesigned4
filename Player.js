class Player{
    constructor(x,y){
        var opt = {
            friction : 0.2
            
        }
        
        this.body = Bodies.rectangle(x,y,40,40,opt);
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