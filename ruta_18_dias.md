# Ruta de Aprendizaje: TypeScript + Playwright desde los Fundamentos
### Personalizada para Carlos Facundo Luna — 18 días (sin asumir Java)

**Punto de partida real:**
- 7 años de QA manual (diseño de casos, STLC, Agile) — esto no se toca, es tu base más fuerte.
- Python con lógica sólida (scraping, Playwright-Python) — acá te vas a apoyar para entender conceptos, no para traducir sintaxis.
- Java: lo dejamos de lado. Si en algún momento se cruza en una entrevista, lo mencionás como "expuesto pero no es mi foco", sin drama.
- TypeScript y Playwright en TS: **arrancamos de cero, en serio**, para que lo internalices con confianza real y no memorizando traducciones.

---

## Bloque 1 (Días 1-4): TypeScript desde cero

### Día 1 — Variables, tipos básicos
- `let`, `const` (nunca `var`).
- Tipos: `string`, `number`, `boolean`, `array`.
```typescript
let nombre: string = "Carlos";
let anios: number = 7;
let activo: boolean = true;
let herramientas: string[] = ["Playwright", "Selenium", "Cypress"];
```
- Practicá escribiendo 10-15 líneas variando tipos, sin copiar de ningún lado — el objetivo es que la sintaxis empiece a salir sola.

### Día 2 — Funciones
- Función tradicional y arrow function (son dos formas de escribir lo mismo, vas a ver ambas en proyectos reales).
```typescript
function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre: string): string => {
  return `Hola, ${nombre}`;
};
```
- Parámetros opcionales (`?`) y valores por default.
- Practicá: función que reciba un array de strings (nombres de test cases) y devuelva cuántos hay.

### Día 3 — Objetos e interfaces
- Un objeto en TS es similar a un diccionario de Python, pero con forma definida (tipada).
```typescript
interface CasoDePrueba {
  id: number;
  titulo: string;
  ejecutado: boolean;
  resultado?: string; // opcional
}

const caso1: CasoDePrueba = {
  id: 1,
  titulo: "Login con usuario válido",
  ejecutado: true,
  resultado: "Passed"
};
```
- Esto es fundamental: en QA vas a modelar constantemente datos así (usuarios, formularios, respuestas de API).
- Práctica: crear una interfaz para modelar un "Usuario" de un sistema genérico (sin datos reales) con 5-6 campos.

### Día 4 — Arrays, loops y métodos comunes
- `for`, `for...of`, y los métodos que más vas a usar: `.map()`, `.filter()`, `.forEach()`.
```typescript
const casos: CasoDePrueba[] = [caso1, caso2, caso3];
const ejecutados = casos.filter(c => c.ejecutado);
const titulos = casos.map(c => c.titulo);
```
- Si en Python usaste list comprehensions o `filter()`/`map()`, el concepto es el mismo, cambia la sintaxis.
- Práctica: dado un array de 5 "casos de prueba", filtrar los que fallaron y mostrar solo sus títulos.

---

## Bloque 2 (Días 5-6): Async/await — la base para entender Playwright

### Día 5 — Qué es una Promesa
- En Python usaste `asyncio` para el scraping — el concepto de "esperar algo que tarda" ya lo tenés, ahora lo vemos en la sintaxis de JS/TS.
- `async function`, `await`, por qué casi todo en Playwright usa esto.
```typescript
async function esperarYSaludar(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Pasó 1 segundo");
}
```
- No te preocupes si al principio no "cierra" del todo — es normal, se entiende mucho mejor una vez que lo ves funcionando dentro de Playwright (día 7 en adelante).

### Día 6 — Práctica de consolidación
- Repaso de todo el bloque 1 y 2 sin apuro.
- Ejercicio integrador: un array de "usuarios" (interface + datos), una función async que simule "guardar" cada uno con un delay, y un loop que los procese uno por uno con `for...of` + `await`.
- Si esto te sale con confianza, estás listo para Playwright. Si no, quedate un día más acá — no hay drama, mejor sólido que rápido.

---

## Bloque 3 (Días 7-10): Playwright en TypeScript — recién ahora

### Día 7 — Instalación y primer test
```bash
npm init playwright@latest
```
- Te va a generar la estructura del proyecto sola. Abrí `playwright.config.ts` y `tests/example.spec.ts` y leelos con calma, sin tocar nada todavía.
- Anatomía de un test:
```typescript
import { test, expect } from '@playwright/test';

test('el título de la página es correcto', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```
- Corré ese test tal cual viene, después modificalo apuntando a una web simple (ej. `saucedemo.com`).

### Día 8 — Locators y acciones básicas
- Los locators recomendados por Playwright (más estables que CSS/XPath crudo):
```typescript
await page.getByRole('button', { name: 'Login' }).click();
await page.getByLabel('Usuario').fill('standard_user');
await page.getByTestId('error-message').isVisible();
```
- Practicá en `saucedemo.com`: login con usuario válido e inválido, verificando el mensaje de error.

### Día 9 — Assertions y auto-waiting
- `expect()` con varias variantes: `toBeVisible`, `toHaveText`, `toHaveURL`, `toHaveCount`.
- Por qué Playwright espera solo automáticamente (no necesitás `sleep()` como quizás hacías en scripts de Python más simples).
- Práctica: flujo completo de login + agregar un producto al carrito + verificar que el contador del carrito se actualizó.

### Día 10 — Page Object Model, primera vez de verdad
- Una clase que agrupa los locators y acciones de una pantalla, para no repetir código en cada test.
```typescript
import { Page, Locator } from '@playwright/test';

class LoginPage {
  private page: Page;
  private inputUsuario: Locator;
  private inputClave: Locator;
  private botonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsuario = page.getByLabel('Usuario');
    this.inputClave = page.getByLabel('Contraseña');
    this.botonLogin = page.getByRole('button', { name: 'Login' });
  }

  async login(usuario: string, clave: string) {
    await this.inputUsuario.fill(usuario);
    await this.inputClave.fill(clave);
    await this.botonLogin.click();
  }
}
```
- Práctica: refactorizar el test del día 9 usando esta clase.

---

## Bloque 4 (Días 11-13): Lo que ya sabés, ahora en Playwright-TS

Acá vas rápido porque el concepto ya lo tenés de tu trabajo diario, solo cambia la herramienta.

### Día 11 — API Testing con Playwright
- Ya sabés testear APIs con Postman/SoapUI/Newman. Playwright tiene su propio cliente HTTP integrado:
```typescript
const response = await request.get('https://reqres.in/api/users/2');
expect(response.status()).toBe(200);
const body = await response.json();
expect(body.data.id).toBe(2);
```
- Práctica: tomar 3-4 requests que ya tengas armados en Postman y replicarlos acá.

### Día 12 — Data-driven testing
- Vos ya diseñás matrices de casos de prueba a mano (7 años haciéndolo) — esto es escribir esa misma matriz en código:
```typescript
const casosInvalidos = [
  { campo: 'dni', valor: '', error: 'El DNI es obligatorio' },
  { campo: 'email', valor: 'noesunemail', error: 'Formato inválido' },
];

for (const caso of casosInvalidos) {
  test(`rechaza ${caso.campo} con "${caso.valor}"`, async ({ page }) => {
    // completar campo y verificar mensaje de error
  });
}
```
- Instalá Faker.js para generar datos ficticios (clave por compliance, ya lo sabés por ISO 9001).

### Día 13 — Fixtures y ambientes
- `.env` para manejar distintas URLs (dev/staging/prod), algo que seguramente ya gestionás manualmente en tu trabajo.
- Fixtures custom de Playwright (versión avanzada, no te obsesiones si no cierra 100% este día, se entiende mejor con la práctica del proyecto final).

---

## Bloque 5 (Días 14-16): CI/CD — el gap más importante para tu objetivo salarial

### Día 14 — Fundamentos de GitHub Actions
- Es configuración (YAML), no programación nueva. Un archivo que le dice a GitHub "cuando pase X, hacé Y".
```yaml
name: Playwright Tests
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
```
- Práctica: subir tu proyecto a GitHub, crear este archivo en `.github/workflows/playwright.yml`, hacer un push y ver el pipeline correr.

### Día 15 — Reportes en el pipeline
- Guardar el reporte HTML como artifact del pipeline, para poder verlo aunque el test haya fallado.
- Trace viewer para debuggear fallos.

### Día 16 — Pipeline completo e integración
- Un solo pipeline que corra tests UI + tests API + genere reporte + falle el build si algo rompe.
- Esto es exactamente lo que te van a preguntar en una entrevista técnica de nivel semi-senior/senior.

---

## Bloque 6 (Días 17-18): Portfolio y CV

### Día 17 — Proyecto integrador
Un formulario de carga de datos (inspirado en el tipo de problema de tu trabajo actual, pero con datos y código 100% tuyos, sin nada del gobierno):
- POM completo
- 8-10 tests E2E con data-driven testing
- Tests de API
- Pipeline de CI/CD funcionando
- README profesional con capturas del reporte

### Día 18 — Actualización de CV y LinkedIn
- Mover TypeScript de "in progress" a habilidad activa.
- Agregar "Playwright (TypeScript)" en Technical Skills.
- Agregar GitHub Actions / CI/CD — esto es lo que más pesa para el filtro de búsquedas remotas.
- Agregar "Page Object Model" en Core Competencies.

---

## Sobre ir con calma

Fijate que en esta versión los primeros 6 días son 100% fundamentos sin tocar Playwright todavía — es a propósito. Vas a llegar al bloque 3 con la sintaxis ya incorporada, no memorizada de un ejemplo. Si algún día sentís que no "cerró" del todo, quedate un día extra ahí antes de avanzar. Con tu experiencia de QA, una vez que la sintaxis de TS se asiente, todo lo demás (POM, API testing, data-driven) es aplicar cosas que ya sabés hacer, solo que en código.
