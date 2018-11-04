export default class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isPythagorean() {
    return this.a * this.a + this.b * this.b === this.c * this.c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  static where(conditions) {
    return new Triplets(conditions).toArray();
  }
}

class Triplets {
  constructor(conditions) {
    this.min = conditions.minFactor || 1;
    this.max = conditions.maxFactor;
    this.sum = conditions.sum;
  }

  toArray() {
    let triplet;
    const triplets = [];
    for (let a = this.min; a < this.max - 1; a++) {
      for (let b = a + 1; b < this.max; b++) {
        for (let c = b + 1; c <= this.max; c++) {
          triplet = new Triplet(a, b, c);
          if (this.isDesired(triplet)) {
            triplets.push(triplet);
          }
        }
      }
    }
    return triplets;
  }

  isDesired(triplet) {
    return triplet.isPythagorean() && (!this.sum || triplet.sum() === this.sum);
  }
}
