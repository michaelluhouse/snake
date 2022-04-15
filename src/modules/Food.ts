class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {

    let top = Math.round(Math.random() * 55) * 10;
    let left = Math.round(Math.random() * 56) * 10;
 
    this.element.style.left = top + 'px';
    this.element.style.top = left + 'px';

  }
}

// const food = new Food();
// console.log(food.X, food.Y)
// food.change();
// console.log(food.X, food.Y)

export default Food;