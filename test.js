const Problem1 = {
    hello: function(name) {
        console.log(`Hello ${name}`);
    }
};
Problem1.hello("Pepito");

/*Problem 2
Define name inside the object and just expose the method hello
*/
const Problem2 = (() => {
    name2="Pepito";
    return {
        hello() {
            console.log(`Hello ${name2}`);
        }
    }
})();
Problem2.hello();

/* Problem 3 */

function Problem3(CiudadesLista){
    CiudadesLista.forEach(Ciudad => {
        CiudadesConteo[Ciudad] = (CiudadesConteo[Ciudad] || 0) + 1;
    });
    const ListaOrdenada = Object.entries(CiudadesConteo).sort((a, b) => b[1] - a[1])
    const Top5 = ListaOrdenada.slice(0, 5); 
    console.log("Las 5 ciudades con mas apariciones:");
    Top5.forEach(([ciudad, cantidad], index) => {
        console.log(`${index + 1}. ${ciudad}: ${cantidad}`);
    });
}
const ListadoCiudades = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
];
Problem3(ListadoCiudades);