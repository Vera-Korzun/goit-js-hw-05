class Storage {
  constructor(array) {
    this.items = array;
  }
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  //   for (const item of this.items) {
  //     if (this.items[item] === item) {
  //       this.items.splice(i, 1);
  //     }
  //   }
  const length = this.items.length;
  for (let i = 0; i < length; i += 1) {
    if (this.items[i] === item) {
      this.items.splice(i, 1);
    }
  }
};

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
