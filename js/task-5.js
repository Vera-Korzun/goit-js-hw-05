class Car {
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }

  constructor(obj) {
    console.log(obj);
    this.maxSpeed = obj.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = obj.price;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    let resultSpeed = this.speed + value;
    if (resultSpeed <= this.maxSpeed) {
      this.speed = resultSpeed;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    let resultSpeed = this.speed - value;
    if (resultSpeed >= 0) {
      this.speed = resultSpeed;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
