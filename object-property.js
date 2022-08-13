const students = [
    {id: 32, name: "tommy"},
    {id: 21, name: "shane"},
    {id: 11, name: "william"},
    {id: 51, name: "katy"},
]

const names = students.map( s => s.name);
const id = students.map( s => s.id);
const bigger = students.filter(s => s.id > 30);
const biggerOne = students.find(s => s.id > 30);

console.log(biggerOne);