function isEnoughCapacity(products, containerSize) {
  //   const productsQuantity = Object.values(products);
  //   let totalProducts = 0;
  //   productsQuantity.forEach(element => {
  //     totalProducts += element;
  //   });
  return (
    containerSize >=
    Object.values(products).reduce((total, value) => {
      return total + value;
    }, 0)
  );
}



console.group('TASK-1');
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
console.groupEnd(); // false