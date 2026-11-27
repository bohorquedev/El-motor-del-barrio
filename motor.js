// DIA 1 - DATOS

const registro = require ("./db.js")


// Creamos un array global para el almacenamiento de los valores(precios) ya que lo estaremos usando mucho.
let totalValores= []

for (let i=0; i < registro.length;i++)  {
    totalValores.push(registro[i].valor)
    }


//Mostramos el registro solicitado y usamos un caso borde
function mostrarRegistro(registro) {
    if(!registro){
    return "Este registro no esta en la lista"
    }

    return `Persona: ${registro.persona} categoria: ${registro.categoria}  Dia: ${registro.dia} valor: ${registro.valor}  Cantidad: ${registro.cantidad}`
}

//Mostramos todos los registros que tenemos.

function listarTodo(datos) {
    for(let i=0;i<datos.length;i++){
        console.log (mostrarRegistro(datos[i]))
    }
    
}



// DIA 2 - REPORTES

    // 	totalGeneral(datos) - SUM VALORES
function totalGeneral (reg,totalValores){
        if(!reg) return "Este valor no esta en la lista"

        let SumValores = totalValores.reduce((sumarvalores,listaValores)=> sumarvalores + listaValores,0)
        return SumValores
}




    // promedio(datos) - PROM VALORES


function promedio(totalValores) {
    
        let SumValores = totalValores.reduce((sumarvalores,listaValores)=> sumarvalores + listaValores,0)
        let average = SumValores / totalValores.length
        return average
}
   
    
    // 	registroMayor(datos) -Devuelve el registro con el valor más alto

function registroMayor(totalValores) {
        let mayorList = totalValores[0]

        for (let i = 1; i < totalValores.length;i++){
            if(mayorList < totalValores[i]){ 
                mayorList = totalValores[i]
            }
        }
        return mayorList
    }



// filtrarPorCategoria(datos, categoria) -Devuelve un arreglo con los registros de esa categoría

function filtrarPorCategoria(registro, categoria){

     for(let i=0;i<registro.length;i++){
        if(registro[i].categoria == categoria)
            console.log (registro [i]) 
    }

}
filtrarPorCategoria(registro,"EnlatAdos")

// totalesPorCategoria(datos) - Devuelve un objeto con el total de valor de cada categoría

function totalesPorCategoria (registro, categoria){
    let categoriaValor = []

    for (let i=0; i < registro.length;i++)  {
        if(registro[i].categoria == categoria)
            categoriaValor.push(registro[i].valor)
    }
   
    for(let i=0;i<categoria.length;i++){
     if(registro[i].categoria == categoria) {
          let SumCategoria = categoriaValor.reduce((sumarvalores,listaValores)=> sumarvalores + listaValores,0)
          return `categoria: ${categoria} valorTotal: ${SumCategoria}`
     }
          
    }
        
}   


// Devuelve el numero de personas que tenemos

function personasUnicas(data){
    let nombres = new Set()
    for(let i = 0; i < data.length;i++){
        nombres.add(data[i].persona)
    }
   
    
    return `Tenemos ${nombres.size} personas diferentes.`

}

//Devuelme el los registros recurrentes
function recurrentesRapido(data){
    let recurrentes = new Set()
    let newSet = new Set()
    for (let value of data){
        if(newSet.has(value.persona)){
            recurrentes.add(value.persona)
        } else newSet.add(value.persona)
    }
    
    return [...recurrentes]

}

// Devuelve los recurrentes con una eficiencia cuadratica
function recurrentesLento(datos) {
    let recurrentes = [];
    for (let i = 0; i < datos.length; i++) {
        let contador = 0;
        for (let j = 0; j < datos.length; j++) {
            if (datos[i].persona === datos[j].persona) {
                contador++;
            }
        }
        if (contador > 1 && !recurrentes.includes(datos[i].persona)) {
            recurrentes.push(datos[i].persona);
        }
    }

    return recurrentes;
}

// Devuelve la categoria mas recurrente

function categoriaEstrella(datos) {
    let categorias = new Map();

    for (let registro of datos) {
        let categoria = registro.categoria;

        if (categorias.has(categoria)) {
            categorias.set(categoria, categorias.get(categoria) + 1);
        } else {
            categorias.set(categoria, 1);
        }
    }
    let max = 0;
    let ganadora = null;

    for (let [categoria, cantidad] of categorias) {
        if (cantidad > max) {
            max = cantidad;
            ganadora = categoria;
        }
    }

    return ganadora;
}

// Devuelve la si existen dos valores que sumen el objetivo
function parQueSuma(datos, objetivo) {
    let registros = new Map();

    for (let registro of datos) {
        let complemento = objetivo - registro.valor;

        if (registros.has(complemento)) {
            return [registros.get(complemento), registro];
        }

        registros.set(registro.valor, registro);
    }

    return null;
}


//Atendemos los clientes en cola
class Cola {
    constructor() {
        this.fila = [];
    }

    llegar(persona) {
        this.fila.push(persona);
    }

    atender() {
        if (this.fila.length === 0) {
            return "No hay clientes en espera";
        }

        return this.fila.shift();
    }
}




// registro.forEach(compra => {
//     cola.llegar(compra);
// });

// Aqui podemos agregar nuevos registros
function agregarRegistro(datos, registro) {
    datos.push(registro);
    return datos;
}

//Aqui podemos eliminar los registros
function deshacer(datos) {
    if (datos.length === 0) {
        return "No hay registros para deshacer";
    }

    return datos.pop();
}




// ==========================================
// ZONA DE PRUEBAS - TIENDA DE BARRIO
// ==========================================

let valoresPrueba = registro.map(compra => compra.valor);


// ==========================================
// NIVEL 1 - OPERACIONES BÁSICAS
// ==========================================

console.group("NIVEL 1 - OPERACIONES BÁSICAS");

console.log("1. Mostrar un registro:");
console.log(mostrarRegistro(registro[0]));

console.log("2. Mostrar registro inexistente:");
console.log(mostrarRegistro(null));

console.log("3. Listar todos los registros:");
listarTodo(registro);

console.log("4. Total de registros:", registro.length);

console.groupEnd();


// ==========================================
// NIVEL 2 - REPORTES Y ANÁLISIS
// ==========================================

console.group("NIVEL 2 - REPORTES Y ANÁLISIS");

console.log("1. Total general de ventas:");
console.log(totalGeneral(registro, valoresPrueba));

console.log("2. Promedio de ventas:");
console.log(promedio(valoresPrueba));

console.log("3. Registro con mayor valor:");
console.log(registroMayor(valoresPrueba));

console.log("4. Filtrar por categoría - Aseo:");
filtrarPorCategoria(registro, "Aseo");

console.log("5. Total de ventas por categoría:");

let categoriasPrueba = [
    "Aseo",
    "Granos",
    "Lácteos",
    "Legumbres",
    "Enlatados"
];

for (let categoria of categoriasPrueba) {
    console.log(totalesPorCategoria(registro, categoria));
}

console.log("6. Cantidad de personas únicas:");
console.log(personasUnicas(registro));

console.log("7. Personas recurrentes - versión rápida:");
console.log(recurrentesRapido(registro));

console.log("8. Personas recurrentes - versión lenta:");
console.log(recurrentesLento(registro));

console.log("9. Categoría estrella:");
console.log(categoriaEstrella(registro));

console.log("10. Par de compras que suma $50.000:");
console.log(parQueSuma(registro, 50000));

console.groupEnd();


// ==========================================
// NIVEL 3 - ESTRUCTURAS DE DATOS
// ==========================================

console.group("NIVEL 3 - ESTRUCTURAS DE DATOS");



console.group("1. COLA - QUEUE");

const colaPrueba = new Cola();

colaPrueba.llegar(registro[0]);
colaPrueba.llegar(registro[1]);
colaPrueba.llegar(registro[2]);

console.log("Fila inicial:");
console.log(colaPrueba.fila);

console.log("Cliente atendido:");
console.log(colaPrueba.atender());

console.log("Fila después de atender:");
console.log(colaPrueba.fila);

console.log("Siguiente cliente:");
console.log(colaPrueba.fila[0]);

console.groupEnd();


console.group("2. PILA - STACK");

let datosPrueba = [...registro];

console.log("Cantidad inicial de registros:");
console.log(datosPrueba.length);

const nuevaCompra = {
    persona: "Carlos",
    categoria: "Granos",
    dia: 7,
    valor: 25000,
    cantidad: 3
};

console.log("Agregar nuevo registro:");
agregarRegistro(datosPrueba, nuevaCompra);

console.log("Cantidad después de agregar:");
console.log(datosPrueba.length);

console.log("Deshacer última operación:");
console.log(deshacer(datosPrueba));

console.log("Cantidad después de deshacer:");
console.log(datosPrueba.length);

console.groupEnd();

console.groupEnd();


// ==========================================
// NIVEL 5 - CONTADOR DE PASOS
// ==========================================

console.group("NIVEL 5 - CONTADOR DE PASOS");

console.log("Versión lenta:");
console.log(recurrentesLento(registro));

console.log("Versión rápida:");
console.log(recurrentesRapido(registro));

console.groupEnd();


// ==========================================
// FIN DE LAS PRUEBAS
// ==========================================

console.log("FIN DE TODAS LAS PRUEBAS");
console.log(parQueSuma(registro, 35600))
