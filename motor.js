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


//console.log(listarTodo(registro)) 


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

//console.log(registroMayor(totalValores))

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



function personasUnicas(data){
    let nombres = new Set()
    for(let i = 0; i < data.length;i++){
        nombres.add(data[i].persona)
    }
   
    
    return `Tenemos ${nombres.size} personas diferentes.`

}

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
// ZONA DE PRUEBAS

console.log(parQueSuma(registro, 35600))
