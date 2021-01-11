const findBestEmployee = function(employees) {
  const results = Object.values(employees);
  const bestResult = Math.max(...results);
  // for (const employee in employees) {
  //   if (employees[employee] === bestResult) {
  //     return employee;
  //   }
  // }
  const keys = Object.keys(employees);
  for (const key of keys) {
    if (employees[key] === bestResult) {
      return key;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
