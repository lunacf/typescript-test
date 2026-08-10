function esperar(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function esperarYSaludar(): Promise<void> {
    console.log("Empezando");
    await esperar(1000);
    console.log("Pasó un segundo");
}

esperarYSaludar();