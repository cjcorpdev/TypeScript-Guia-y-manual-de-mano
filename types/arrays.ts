(()=>{
  // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 78, 8, 9, 10];
  const numbers: number[] = [1, 2, 3, 4, 5,6, 78, 8, 9, 10];
  numbers.push(12)
  console.log(numbers)

  const villains = ['Omega Rojo', 'Dormamu', 'Duende Verde']
  villains.forEach(v => console.log(v.toLowerCase()));
})()