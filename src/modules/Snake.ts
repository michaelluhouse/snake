class Snake{
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {

    if(this.X === value){
      return;
    }

    if(value < 0 || value > 600){
      throw new Error('蛇🐍撞墙了');
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      // console.log('水平方向发生了掉头');
      if(value > this.X){
        value = this.X - 10;
      }else{
        value = this.X + 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }

  set Y(value) {

    if(this.Y === value){
      return;
    }

    if(value < 0 || value > 700){
      throw new Error('蛇🐍撞墙了');
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  moveBody(){
    // console.log(this.bodies.length);

    for(let i=this.bodies.length-1; i>0; i--){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
      
      // console.log(X, Y);

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

      // console.log(this.bodies[i])
    }
  }

  checkHeadBody(){
    for (let i = 1; i<this.bodies.length; i++){
      let db = this.bodies[i] as HTMLElement;
      if(this.X === db.offsetLeft && this.Y === db.offsetTop){
        throw new Error('撞到自己了!')
      }
    }
  }
}

export default Snake;