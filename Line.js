export default class Line{
    constructor(pointOne, pointTwo) {
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.point = {x: this.pointOne.x, y: this.pointOne.y,};
        this.points = [];
        this.deltaX = Math.abs(pointTwo.x - pointOne.x);
        this.deltaY = Math.abs(pointTwo.y - pointOne.y);
        this.signX = (pointOne.x > pointTwo.x) ? -1 : 1;
        this.signY = (pointOne.y > pointTwo.y) ? -1 : 1;
        this.direction = true;
        if(this.deltaX < this.deltaY){
            let rez = this.deltaX;
            this.deltaX = this.deltaY;
            this.deltaY = rez;
            this.direction = false;
        }
        this.of = Math.floor(this.deltaX/2);
    }
    getPoints(){
        if(!this.points.length){
            this.points.push({x: this.point.x, y: this.point.y,});
            while (this.point.x !== this.pointTwo.x || this.point.y !== this.pointTwo.y){
                this.of = (this.of < 0) ? this.of + this.deltaX - this.deltaY : this.of - this.deltaY;
                if(this.of < 0){
                    this.point.x += this.signX;
                    this.point.y += this.signY;
                }
                else {
                    if(this.direction) this.point.x += this.signX;
                    else this.point.y += this.signX;
                }
                this.points.push({x: this.point.x, y: this.point.y,});
            }
        }
        return this.points;

    }
    clearPoints(){
        this.point.x = this.pointOne.x;
        this.point.y = this.pointOne.y;
        this.points = [];
    }
}