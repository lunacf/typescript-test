// tipos

let nombre: string = "facu";
const edad: number = 26;
let activo: boolean = true;
const tools: string[] = ["Java", "Selenium", "Jira"];
let user: string = "cfluna";
let estado_civil: string = "casado";
let tiene_auto: boolean = false;
const dias_vacaciones: number = 30;
const clubes_futbol: string[] = ["boca juniors", "san lorenzo", "racing", "independiente"];
const usuario_admin: string = "Admin_PSE";
const cliente_antiguo: boolean = true;

function saludar(nombre: string): string {
     return `Buenos días ${nombre}`
};

const salu2 = (usuario: string): string => {
    return `Buenas, ${usuario}`
};

console.log(saludar("facundo"))
console.log(salu2("pediloo"))