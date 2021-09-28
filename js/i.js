const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];
animals.forEach(animal => {
    console.log(animal);
});
console.log("Unsorted:", animals.slice());
animals.sort((a, b) => b.length - a.length);
console.log("Sorted:", animals);
// console.log("Before sort:", animals1, "After sort:", animals1.sort((a, b) => a.length - b.length));