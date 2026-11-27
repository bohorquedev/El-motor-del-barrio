CELULA: RA

INTEGRANTES:

- DAVID PAYARES BOHORQUEZ
- ELVER DUVAN ROMERO CARDENAS
- JUAN MIGUEL
- SANTIAGO ALZATE

PREYECTO: Tienda de barrio

INSTRUCCIONES: 

1. Ve a la zona de pruebas
2. Identifica la función a ejecutar
3. ELimina los simbolos "//" (que se encuentran al inicio de cada función en la zona de pruebas) 
4. Abre en la temrinal (Ctrl + j) y digita código node motor.js
5. Vuelve a digitar los simbolos "//" al inicio de la función que acabas de ejecutar
6. Repite desde el paso 2 si deseas probar otra(s) funcione(s) y/o
7. Fin.

------------------------------------------
------------------------------------------
Tabla de costo del nivel 5

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


## Análisis de complejidad computacional (Big O)

La notación Big O nos permite analizar el crecimiento del costo computacional de las funciones según aumenta la cantidad de registros de la tienda.

Para este análisis se utiliza:

- **n:** cantidad total de registros.
- **k:** cantidad de categorías diferentes.

### Nivel 1 – Operaciones básicas

| Función | Complejidad | Justificación |
|---|---|---|
| Recorrer registro y llenar totalValores | O(n) | Recorre todos los registros una vez. |
| mostrarRegistro() | O(1) | Accede directamente a las propiedades de un objeto. |
| listarTodo() | O(n) | Recorre todos los registros y muestra cada uno. |

### Nivel 2 – Reportes y análisis

| Función | Complejidad | Justificación |
|---|---|---|
| totalGeneral() | O(n) | Recorre los valores mediante reduce() para calcular la suma. |
| promedio() | O(n) | Recorre los valores para calcular la suma y el promedio. |
| registroMayor() | O(n) | Recorre los valores para encontrar el mayor. |
| filtrarPorCategoria() | O(n) | Revisa todos los registros para encontrar coincidencias. |
| totalesPorCategoria() | O(n) | Recorre los registros y suma los valores de la categoría seleccionada. |
| personasUnicas() | O(n) | Recorre los registros y utiliza Set para evitar duplicados. |
| recurrentesRapido() | O(n) | Utiliza dos Set para identificar personas repetidas en un recorrido. |
| recurrentesLento() | O(n²) | Utiliza ciclos anidados para comparar cada persona con las demás. |
| categoriaEstrella() | O(n) | Cuenta las categorías y después identifica la más frecuente. |
| parQueSuma() | O(n) | Utiliza Map para buscar complementos mientras recorre los registros. |

### Nivel 3 – Estructuras de datos

| Función | Complejidad | Justificación |
|---|---|---|
| llegar() | O(1) amortizado | Agrega una persona al final de la cola mediante push(). |
| atender() | O(n) | Elimina el primer elemento mediante shift(), reorganizando los índices restantes. |
| agregarRegistro() | O(1) amortizado | Agrega un registro al final del array mediante push(). |
| deshacer() | O(1) | Elimina el último registro mediante pop(). |

### Conclusión

Las funciones O(1) tienen un costo constante, mientras que las funciones O(n) aumentan proporcionalmente con la cantidad de registros.

La función recurrentesLento() presenta una complejidad O(n²), debido a sus ciclos anidados. En cambio, recurrentesRapido() utiliza Set y consigue resolver el mismo problema en O(n) promedio.

Esto demuestra cómo elegir estructuras de datos adecuadas puede mejorar la eficiencia de un algoritmo.

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

## Contador de pasos: recurrentesLento vs recurrentesRapido

Se realizó una comparación entre dos algoritmos encargados de identificar personas que aparecen más de una vez en la base de datos de la tienda.

**Datos utilizados:**
- 30 registros.
- 29 personas diferentes.
- 1 persona repetida: Valentina.

**Resultados:**

| Algoritmo | Pasos contabilizados |
|---|---:|
| recurrentesLento() | 900 |
| recurrentesRapido() | 30 |

**Análisis:**

- recurrentesLento(): realiza 900 comparaciones entre nombres debido a sus dos ciclos anidados.
- recurrentesRapido(): realiza 30 consultas mediante Set.has(), una por cada registro.

**Conclusión:**

La versión rápida reduce considerablemente las operaciones principales necesarias para identificar personas repetidas. En este caso, realiza 30 consultas frente a las 900 comparaciones de la versión lenta.

Esto demuestra la ventaja de utilizar estructuras de datos como Set para optimizar algoritmos.