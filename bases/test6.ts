interface Usuarios {
    id: number,
    name: string,
    active: boolean,
    role: string
}

const users: Usuarios [] = [
    {
        id: 1,
        name: "Ari",
        active: true,
        role: "Engineer"
    },
    {
        id: 2,
        name: "Facu",
        active: true,
        role: "Tester"
    },
    {
        id: 3,
        name: "Roberto",
        active: false,
        role: "Data Analyst"
    },
    {
        id: 4,
        name: "Pepe",
        active: false,
        role: "DevOps"
    },
    {
        id: 5,
        name: "Juan",
        active: true,
        role: "Marketing & People"
    }
]

function esperar(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function guardarUsuario(): Promise<void> {
    const usuariosActivos = users.filter(act => act.active)
  
    for (const user of usuariosActivos) {
      console.log(`Guardando a ${user.name}..`);
      await esperar(1000);
      console.log(`${user.name} guardado`);
    }
  }
  
  guardarUsuario();

