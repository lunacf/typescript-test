
// En TS hay 3 formas de recorrer arrays
// for ...of (recorrer uno por uno como un for item in lista)
// .filter() (te quedas solo con los que cumplen una condición)
// .map() (transformas cada elemento) -> sacar solo titulos

interface TestCase {
    id: number;
    title: string;
    executed: boolean;
    result?: string; // ? = opcional
}

const casos: TestCase[] = [
    {
        id: 1,
        title: "Login valido",
        executed: true,
        result: "passed"
    },
    {
        id: 2,
        title: "Login invalido",
        executed: true,
        result: "failed"
    },
    {
        id: 3,
        title: "Logout valido",
        executed: true,
        result: "passed"
    },
    {
        id: 4,
        title: "Logout invalido",
        executed: true,
        result: "not executed"
    },
    {
        id: 5,
        title: "Usuario no activo",
        executed: false,
        result: "not executed"
    }
]

// Filtro por fallidos
const fallidos = casos.filter(caso => caso.result?.toLowerCase() === "failed");

// Filtro por "titulos"
const titulos = casos.map(c => c.title);
console.log(fallidos);
console.log(titulos);

// Filtro para recorrer

for (const caso of casos){
    const resultado = caso.result ?? "passed";
    console.log(`${caso.id} ${caso.title} - ${resultado}`);
}

// Solo los fallidos — misma idea, con un if adentro del loop

console.log("--- Solo fallidos ---");
let encontroFallidos = false;
for (const caso of casos) {
    if (caso.result?.toLowerCase() === "asdas") {
        encontroFallidos = true;
        console.log(`${caso.id} ${caso.title} - ${caso.result}`);
    }
}
if (!encontroFallidos) {
    console.log("No se encontraron resultados");
}


