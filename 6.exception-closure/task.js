const parseCount = (value) => {
  const parseNumber = Number.parseInt(value, 10);
  if (isNaN(parseNumber)) {
    const parseError = new Error("Невалидное значение");
    throw parseError;
  }
  return parseNumber;
}

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch(err) {
    return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
      const triangleError = new Error("Треугольник с такими сторонами не существует");
      throw triangleError;
    }
    this.side_a = a;
    this.side_b = b;
    this.side_c = c;
  }
  getPerimeter() {
    return this.side_a + this.side_b + this.side_c;
  }
  getArea() {
    const halfPerimetr = 0.5 * this.getPerimeter();
    const area = Math.sqrt(halfPerimetr * (halfPerimetr - this.side_a) * (halfPerimetr - this.side_b) * (halfPerimetr - this.side_c));
    return parseFloat(area.toFixed(3));
  }
}

const getTriangle = (a, b, c) => {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    return {
      getPerimeter: function () {
        return "Ошибка! Треугольник не существует";
      },
      getArea: function() {
        return "Ошибка! Треугольник не существует";
      }
      }
    }
  }
