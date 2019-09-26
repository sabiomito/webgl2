
/*class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new TypeError('Abstract class "Shape" cannot be instantiated directly.'); 
        }

        if (this.draw === undefined) {
            throw new TypeError('Classes extending the shape abstract class must define draw');
        }
    }
}*/

class Point{

    constructor (x,y,size,color){
        this._x = x;
        this._y = y;
        this._size = size;
        this._color = color;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(_x){
        this._x = x;
    }

    set y(_y){
        this._y = y;
    }

    get size(){
        return this._size;
    }

    set size(_s){
        this._size = s;
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }

    isInside(x,y){
        return (y >= (this.y - Math.round(this.size/2.0)) && y <= (this.y + Math.round(this.size/2.0))
                && x >= (this.x - Math.round(this.size/2.0)) && x <= (this.x + Math.round(this.size/2.0)));
    }
}

class LineSegment{
    constructor (x0,y0,x1,y1){
        this._p1 = new Point(x0,y0,1,color);
        this._y0 = y0;
        this._x1 = x1;
        this._y1 = y1;
        this._color = color;
    }

    get x0(){
        return this._x0;
    }

    get y0(){
        return this._y0;
    }

    set x0(_x0){
        this._x0 = x0;
    }

    set y0(_y0){
        this._y0 = y0;
    }

    get x1(){
        return this._x1;
    }

    get y1(){
        return this._y1;
    }

    set x1(_x1){
        this._x1 = x1;
    }

    set y1(_y1){
        this._y1 = y1;
    }    

    get size(){
        return this._size;
    }

    set size(_s){
        this._size = s;
    }

    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }

}