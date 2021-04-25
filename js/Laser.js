class Laser{
    constructor(x, y){
        this.laser = createSprite(x, y, 550, 10);
        this.laser.shapeColor = 'red';
        this.laser.visible = false;
        //this.laser.setVelocity(2, 5);
    }
    display(){
      //  this.laser.visible = true;
        this.laser.setVelocity(random(-7,-3),random(3,7));
    }
}