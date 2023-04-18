let a = Array.from({ length: 100 }, (_, i) => i)
// const numeros =() => {
//     return a.map((numero) => { 
//         // console.log(numero.toString().padStart(2, "0"));
//         return numero.toString().padStart(2, "0"); 
//     });
// };
// const objArr = a.map(num => ({
//     "id": num,
//     "name": '',
//     "observations": '',
//     "telephone": 0,
//     "paid": false
// }));

const objArr = a.map(num => ({
    "id": num,
    "nombre": '',
    "notas": '',
    "telefono": 0,
    "pagada": false
}));

// console.log(objArr);

// console.log(numeros());

let numeros = [
{ id: 0, name: '', observations: '', telephone: 0, paid: false },
{ id: 1, name: '', observations: '', telephone: 0, paid: false },
{ id: 2, name: '', observations: '', telephone: 0, paid: false },
{ id: 3, name: '', observations: '', telephone: 5, paid: false },
{ id: 4, name: '', observations: '', telephone: 0, paid: false },
{ id: 5, name: '', observations: '', telephone: 0, paid: false },
{ id: 6, name: '', observations: '', telephone: 0, paid: false },
{ id: 7, name: '', observations: '', telephone: 0, paid: false },
{ id: 8, name: '', observations: '', telephone: 0, paid: false },
{ id: 9, name: '', observations: '', telephone: 0, paid: false },
{ id: 10, name: '', observations: '', telephone: 0, paid: false },
{ id: 11, name: '', observations: '', telephone: 0, paid: false },
{ id: 12, name: '', observations: '', telephone: 0, paid: false },
{ id: 13, name: '', observations: '', telephone: 0, paid: false },
{ id: 14, name: '', observations: '', telephone: 0, paid: false },
{ id: 15, name: '', observations: '', telephone: 0, paid: false },
{ id: 16, name: '', observations: '', telephone: 0, paid: false },
{ id: 17, name: '', observations: '', telephone: 0, paid: false },
{ id: 18, name: '', observations: '', telephone: 0, paid: false },
{ id: 19, name: '', observations: '', telephone: 0, paid: false },
{ id: 20, name: '', observations: '', telephone: 0, paid: false },
{ id: 21, name: '', observations: '', telephone: 0, paid: false },
{ id: 22, name: '', observations: '', telephone: 0, paid: false },
{ id: 23, name: '', observations: '', telephone: 0, paid: false },
{ id: 24, name: '', observations: '', telephone: 0, paid: false },
{ id: 25, name: '', observations: '', telephone: 0, paid: false },
{ id: 26, name: '', observations: '', telephone: 0, paid: false },
{ id: 27, name: '', observations: '', telephone: 0, paid: false },
{ id: 28, name: '', observations: '', telephone: 0, paid: false },
{ id: 29, name: '', observations: '', telephone: 0, paid: false },
{ id: 30, name: '', observations: '', telephone: 0, paid: false },
{ id: 31, name: '', observations: '', telephone: 0, paid: false },
{ id: 32, name: '', observations: '', telephone: 0, paid: false },
{ id: 33, name: '', observations: '', telephone: 0, paid: false },
{ id: 34, name: '', observations: '', telephone: 0, paid: false },
{ id: 35, name: '', observations: '', telephone: 0, paid: false },
{ id: 36, name: '', observations: '', telephone: 0, paid: false },
{ id: 37, name: '', observations: '', telephone: 0, paid: false },
{ id: 38, name: '', observations: '', telephone: 0, paid: false },
{ id: 39, name: '', observations: '', telephone: 0, paid: false },
{ id: 40, name: '', observations: '', telephone: 0, paid: false },
{ id: 41, name: '', observations: '', telephone: 0, paid: false },
{ id: 42, name: '', observations: '', telephone: 0, paid: false },
{ id: 43, name: '', observations: '', telephone: 0, paid: false },
{ id: 44, name: '', observations: '', telephone: 0, paid: false },
{ id: 45, name: '', observations: '', telephone: 0, paid: false },
{ id: 46, name: '', observations: '', telephone: 0, paid: false },
{ id: 47, name: '', observations: '', telephone: 0, paid: false },
{ id: 48, name: '', observations: '', telephone: 0, paid: false },
{ id: 49, name: '', observations: '', telephone: 0, paid: false },
{ id: 50, name: '', observations: '', telephone: 0, paid: false },
{ id: 51, name: '', observations: '', telephone: 0, paid: false },
{ id: 52, name: '', observations: '', telephone: 0, paid: false },
{ id: 53, name: '', observations: '', telephone: 0, paid: false },
{ id: 54, name: '', observations: '', telephone: 0, paid: false },
{ id: 55, name: '', observations: '', telephone: 0, paid: false },
{ id: 56, name: '', observations: '', telephone: 0, paid: false },
{ id: 57, name: '', observations: '', telephone: 0, paid: false },
{ id: 58, name: '', observations: '', telephone: 0, paid: false },
{ id: 59, name: '', observations: '', telephone: 0, paid: false },
{ id: 60, name: '', observations: '', telephone: 0, paid: false },
{ id: 61, name: '', observations: '', telephone: 0, paid: false },
{ id: 62, name: '', observations: '', telephone: 0, paid: false },
{ id: 63, name: '', observations: '', telephone: 0, paid: false },
{ id: 64, name: '', observations: '', telephone: 0, paid: false },
{ id: 65, name: '', observations: '', telephone: 0, paid: false },
{ id: 66, name: '', observations: '', telephone: 0, paid: false },
{ id: 67, name: '', observations: '', telephone: 0, paid: false },
{ id: 68, name: '', observations: '', telephone: 0, paid: false },
{ id: 69, name: '', observations: '', telephone: 0, paid: false },
{ id: 70, name: '', observations: '', telephone: 0, paid: false },
{ id: 71, name: '', observations: '', telephone: 0, paid: false },
{ id: 72, name: '', observations: '', telephone: 0, paid: false },
{ id: 73, name: '', observations: '', telephone: 0, paid: false },
{ id: 74, name: '', observations: '', telephone: 0, paid: false },
{ id: 75, name: '', observations: '', telephone: 0, paid: false },
{ id: 76, name: '', observations: '', telephone: 0, paid: false },
{ id: 77, name: '', observations: '', telephone: 0, paid: false },
{ id: 78, name: '', observations: '', telephone: 0, paid: false },
{ id: 79, name: '', observations: '', telephone: 0, paid: false },
{ id: 80, name: '', observations: '', telephone: 0, paid: false },
{ id: 81, name: '', observations: '', telephone: 0, paid: false },
{ id: 82, name: '', observations: '', telephone: 0, paid: false },
{ id: 83, name: '', observations: '', telephone: 0, paid: false },
{ id: 84, name: '', observations: '', telephone: 0, paid: false },
{ id: 85, name: '', observations: '', telephone: 0, paid: false },
{ id: 86, name: '', observations: '', telephone: 0, paid: false },
{ id: 87, name: '', observations: '', telephone: 0, paid: false },
{ id: 88, name: '', observations: '', telephone: 0, paid: false },
{ id: 89, name: '', observations: '', telephone: 0, paid: false },
{ id: 90, name: '', observations: '', telephone: 0, paid: false },
{ id: 91, name: '', observations: '', telephone: 0, paid: false },
{ id: 92, name: '', observations: '', telephone: 0, paid: false },
{ id: 93, name: '', observations: '', telephone: 0, paid: false },
{ id: 94, name: '', observations: '', telephone: 0, paid: false },
{ id: 95, name: '', observations: '', telephone: 0, paid: false },
{ id: 96, name: '', observations: '', telephone: 0, paid: false },
{ id: 97, name: '', observations: '', telephone: 0, paid: false },
{ id: 98, name: '', observations: '', telephone: 0, paid: false },
{ id: 99, name: '', observations: '', telephone: 0, paid: false }
]

function xxx() {
    return numeros.value.reduce((acu, current) => acu + parseInt(current.telephone), 0)    
}


console.log(xxx());