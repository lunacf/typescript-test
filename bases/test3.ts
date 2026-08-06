
// Interfaces utilizada para definir forma (los tipos de cada campo)
// Autocompletado y errores en tiempo de compilación.

interface TestCase {
    id: number;
    title: string;
    executed: boolean;
    result?: string; // ? = opcional
}

const case1: TestCase = {
    id: 1,
    title: "Login true user",
    executed: true,
    result: "Passed"
};

// Creado para verificar por console.log

interface Usuario {
    id: number;
    username: string;
    email: string;
    active: boolean;
    role: string;
    cellphone?: number;
};

const caseUsuario: Usuario = {
    id: 10,
    username: "faculun",
    email: "faculun@test.com.ar",
    active: true,
    role: "tester automation",
    cellphone: 1132405443
};

const caseUsuario2: Usuario = {
    id: 11,
    username: "otroUserRandom",
    email: "otro@test.com.ar",
    active: false,
    role: "tester manual"
};

interface DatosLogin {
    username: string;
    password: string;
    esperaError: boolean;
};

const usuarioSinError: DatosLogin = {
    username: "carloslun",
    password: "test123",
    esperaError: false
};

const usuarioConError: DatosLogin = {
    username: "luncar",
    password: "test123",
    esperaError: true
};


console.log(usuarioSinError)
console.log(usuarioConError)

