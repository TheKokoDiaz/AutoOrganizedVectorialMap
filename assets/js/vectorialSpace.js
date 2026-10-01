// NÚMEROS ALEATORIOS
function getRandom() {
  return Math.random();
}

//+ DATOS DE ENTRENAMIENTO +
// Lista de 45 animales que usaremos para entrenar el mapa
var Animales=[
	'🦁', // León
	'🐆', // Puma
	'🐅', // Tigre
	'🐒', // Mono
	'🐻', // Oso
	'🐎', // Caballo
	'🦒', // Jirafa
	'🐘', // Elefante
	'🦛', // Hipopótamo
	'🦏', // Rinoceronte
	'🐕', // Perro
	'🐖', // Cerdo
	'🐄', // Vaca
	'🦆', // Pato
	'🪿', // Ganso
	'🐇', // Conejo
	'🐐', // Cabra
	'🐈', // Gato
	'🦓', // Cebra
	'🐓', // Gallina
	'🦎', // Ajolote
	'🐹', // Hámster
	'🐢', // Tortuga
	'🦊', // Zorro
	'🐺', // Lobo
	'🦌', // Venado
	'🫎', // Alce
	'🦘', // Canguro
	'🐨', // Koala
	'🐼', // Panda
	'🦥', // Perezoso
	'🦦', // Nutria
	'🦫', // Castor
	'🦇', // Murciélago
	'🦅', // Águila
	'🦉', // Búho
	'🐧', // Pingüino
	'🦩', // Flamenco
	'🦚', // Pavo real
	'🐊', // Cocodrilo
	'🐍', // Serpiente
	'🐸', // Rana
	'🐬', // Delfín
	'🐋', // Ballena
	'🐙'  // Pulpo
];

// Características
var etiquetas = [
	'Movilidad',
	'Ecosistema',
	'Habitat',
	'Tamanio',
	'Alimentacion',
	'Actividad',
	'Organizacion_social',
	'Reproduccion',
	'Clima_predominante',
	'Longevidad',
	'Cubierta_corporal',
	'Grupo_zoologico',
	'Regulacion_termica',
	'Cuidado_parental',
	'Número_de_crias_por_camada',
	'Comunicacion_predominante',
	'Defensa_principal',
	'Patron_migratorio',
	'Distribucion_geografica',
	'Estado_de_conservacion'
];

// + MATRIZ DE CARACTERÍSTICAS DE LOS ANIMALES +
var Caract = [
	// Perfiles representativos en el mismo orden que etiquetas y los selectores HTML.
	[0.4,0.62,0.80,0.64,0.22,0.6,0.50,0.50,0.72,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.75,0.20,0.60,0.48], // León
	[0.4,0.62,0.80,0.64,0.22,0.6,0.12,0.50,0.96,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.12,0.20,0.60,0.16], // Puma
	[0.4,0.62,0.80,0.64,0.22,0.4,0.12,0.50,0.56,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.75,0.20,0.40,0.64], // Tigre
	[0.8,0.12,0.16,0.48,0.33,0.2,0.37,0.50,0.56,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.62,0.20,0.60,0.16], // Mono
	[0.4,0.62,0.80,0.64,0.33,0.8,0.12,0.50,0.96,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.75,0.20,0.60,0.32], // Oso
	[0.4,0.62,0.80,0.64,0.11,0.2,0.50,0.50,0.32,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.25,0.20,0.80,0.16], // Caballo
	[0.4,0.62,0.80,0.80,0.11,0.2,0.50,0.50,0.72,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.25,0.40,0.40,0.48], // Jirafa
	[0.4,0.62,0.80,0.80,0.11,0.8,0.37,0.50,0.72,0.64,0.50,0.12,0.25,0.80,0.16,0.80,0.62,0.40,0.40,0.64], // Elefante
	[0.6,0.50,0.48,0.80,0.11,0.4,0.50,0.50,0.56,0.64,0.50,0.12,0.25,0.60,0.16,0.80,0.75,0.20,0.40,0.48], // Hipopótamo
	[0.4,0.62,0.80,0.80,0.11,0.6,0.12,0.50,0.72,0.64,0.50,0.12,0.25,0.60,0.16,0.80,0.75,0.20,0.40,0.80], // Rinoceronte
	[0.4,0.62,0.80,0.48,0.33,0.8,0.37,0.50,0.96,0.32,0.12,0.12,0.25,0.60,0.32,0.80,0.62,0.20,0.80,0.16], // Perro
	[0.4,0.62,0.80,0.48,0.33,0.2,0.50,0.50,0.56,0.32,0.12,0.12,0.25,0.60,0.48,0.80,0.25,0.20,0.80,0.16], // Cerdo
	[0.4,0.62,0.80,0.64,0.11,0.2,0.50,0.50,0.32,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.62,0.20,0.80,0.16], // Vaca
	[0.8,0.50,0.48,0.32,0.33,0.2,0.62,0.25,0.96,0.32,0.25,0.25,0.25,0.40,0.48,0.16,0.25,0.40,0.80,0.16], // Pato
	[0.8,0.50,0.48,0.48,0.11,0.2,0.62,0.25,0.32,0.48,0.25,0.25,0.25,0.60,0.32,0.16,0.62,0.40,0.80,0.16], // Ganso
	[0.4,0.62,0.64,0.32,0.11,0.6,0.37,0.50,0.32,0.32,0.12,0.12,0.25,0.60,0.80,0.80,0.25,0.20,0.80,0.16], // Conejo
	[0.4,0.62,0.80,0.48,0.11,0.2,0.50,0.50,0.32,0.48,0.12,0.12,0.25,0.60,0.32,0.80,0.25,0.20,0.80,0.16], // Cabra
	[0.4,0.62,0.80,0.32,0.22,0.4,0.12,0.50,0.96,0.32,0.12,0.12,0.25,0.60,0.32,0.80,0.75,0.20,0.80,0.16], // Gato
	[0.4,0.62,0.80,0.64,0.11,0.2,0.50,0.50,0.72,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.25,0.40,0.40,0.32], // Cebra
	[0.8,0.62,0.80,0.32,0.33,0.2,0.62,0.25,0.96,0.32,0.25,0.25,0.25,0.40,0.48,0.16,0.25,0.20,0.80,0.16], // Gallina
	[0.6,0.50,0.48,0.16,0.22,0.4,0.12,0.25,0.24,0.32,0.50,0.50,0.50,0.20,0.80,0.48,0.12,0.20,0.20,0.80], // Ajolote
	[0.4,0.25,0.64,0.16,0.33,0.4,0.12,0.50,0.64,0.16,0.12,0.12,0.25,0.40,0.48,0.48,0.25,0.20,0.40,0.16], // Hámster
	[0.4,0.25,0.80,0.32,0.11,0.2,0.12,0.25,0.64,0.80,0.62,0.37,0.50,0.20,0.80,0.32,0.37,0.20,0.60,0.32], // Tortuga
	[0.4,0.62,0.80,0.32,0.33,0.4,0.12,0.50,0.96,0.32,0.12,0.12,0.25,0.60,0.32,0.80,0.12,0.20,0.80,0.16], // Zorro
	[0.4,0.62,0.80,0.64,0.22,0.4,0.50,0.50,0.96,0.48,0.12,0.12,0.25,0.80,0.32,0.16,0.62,0.20,0.60,0.16], // Lobo
	[0.4,0.62,0.80,0.64,0.11,0.6,0.50,0.50,0.32,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.25,0.40,0.60,0.16], // Venado
	[0.4,0.62,0.80,0.80,0.11,0.6,0.12,0.50,0.16,0.48,0.12,0.12,0.25,0.60,0.16,0.16,0.75,0.40,0.40,0.16], // Alce
	[0.4,0.25,0.80,0.64,0.11,0.4,0.37,0.50,0.72,0.48,0.12,0.12,0.25,0.60,0.16,0.80,0.75,0.20,0.40,0.16], // Canguro
	[0.4,0.62,0.16,0.32,0.11,0.4,0.12,0.50,0.48,0.48,0.12,0.12,0.25,0.60,0.16,0.16,0.75,0.20,0.20,0.64], // Koala
	[0.4,0.62,0.80,0.64,0.11,0.8,0.12,0.50,0.24,0.48,0.12,0.12,0.25,0.60,0.16,0.16,0.75,0.20,0.20,0.48], // Panda
	[0.4,0.12,0.16,0.32,0.11,0.8,0.12,0.50,0.80,0.48,0.12,0.12,0.25,0.60,0.16,0.64,0.12,0.20,0.40,0.16], // Perezoso
	[0.6,0.50,0.48,0.32,0.22,0.4,0.37,0.50,0.96,0.32,0.12,0.12,0.25,0.60,0.32,0.80,0.62,0.20,0.60,0.32], // Nutria
	[0.8,0.50,0.48,0.32,0.11,0.4,0.37,0.50,0.32,0.48,0.12,0.12,0.25,0.60,0.32,0.48,0.62,0.20,0.60,0.16], // Castor
	[0.2,0.62,0.32,0.16,0.44,0.4,0.87,0.50,0.96,0.48,0.12,0.12,0.25,0.60,0.16,0.16,0.25,0.80,0.80,0.16], // Murciélago
	[0.2,0.62,0.16,0.48,0.22,0.2,0.25,0.25,0.96,0.48,0.25,0.25,0.25,0.60,0.32,0.16,0.25,0.40,0.60,0.16], // Águila
	[0.2,0.62,0.16,0.32,0.22,0.4,0.12,0.25,0.96,0.48,0.25,0.25,0.25,0.60,0.32,0.16,0.12,0.20,0.60,0.16], // Búho
	[0.8,0.37,0.48,0.32,0.55,0.2,0.87,0.25,0.08,0.48,0.25,0.25,0.25,0.80,0.32,0.16,0.62,0.40,0.40,0.32], // Pingüino
	[0.8,0.50,0.48,0.48,0.88,0.2,0.62,0.25,0.56,0.48,0.25,0.25,0.25,0.60,0.16,0.16,0.62,0.40,0.60,0.16], // Flamenco
	[0.8,0.62,0.80,0.48,0.33,0.2,0.37,0.25,0.56,0.32,0.25,0.25,0.25,0.40,0.32,0.32,0.25,0.20,0.40,0.16], // Pavo real
	[0.6,0.50,0.48,0.64,0.22,0.4,0.12,0.25,0.56,0.64,0.37,0.37,0.50,0.40,0.80,0.16,0.37,0.20,0.60,0.16], // Cocodrilo
	[0.4,0.62,0.80,0.32,0.22,0.4,0.12,0.75,0.56,0.48,0.37,0.37,0.50,0.20,0.48,0.48,0.50,0.20,0.80,0.16], // Serpiente
	[0.8,0.50,0.48,0.16,0.44,0.4,0.37,0.25,0.80,0.32,0.50,0.50,0.50,0.20,0.80,0.16,0.50,0.20,0.80,0.16], // Rana
	[0.6,0.37,0.48,0.64,0.55,0.2,0.37,0.50,0.96,0.64,0.50,0.12,0.25,0.60,0.16,0.16,0.62,0.40,0.80,0.32], // Delfín
	[0.6,0.37,0.48,0.80,0.88,0.8,0.37,0.50,0.96,0.80,0.50,0.12,0.25,0.60,0.16,0.16,0.62,0.40,0.80,0.48], // Ballena
	[0.6,0.37,0.48,0.48,0.22,0.4,0.12,0.25,0.96,0.16,0.50,0.75,0.50,0.40,0.80,0.32,0.12,0.20,0.80,0.16] // Pulpo
];

// + PARÁMETROS DEL SOM +
var medida= 500;                    		// Tamaño del canvas en píxeles
var map = document.getElementById('map'); 	// Referencia al canvas
var ctx = map.getContext('2d');     		// Contexto 2D para dibujar
var margen = medida;           				// Margen del 5% del canvas
var largo = medida;        					// Área útil del canvas
var R = 10;                           		// Número de iteraciones de entrenamiento (épocas)
var FC = 20;                         		// Tamaño de la grilla del mapa (20x20 = 400 neuronas)
var N = Caract[0].length;            		// Número de características por animal (20)
var n = Caract.length;             			// Número de animales en el dataset (45)
var k = FC*FC*N;                    		// Número total de pesos (20*20*20 = 8000)

//* INICIALIZACIÓN DE PESOS
// Matriz de pesos W: cada neurona tiene N pesos (uno por característica)
// Los pesos se inicializan aleatoriamente entre 0 y 1
var W = Array.from({length: k}, () => Math.random());

//* PARÁMETROS DE ENTRENAMIENTO
var DS = 1;	// Desviación estándar inicial para la función de vecindad

// + ALGORITMO DE ENTRENAMIENTO SOM +
console.log("Iniciando entrenamiento del SOM...");

//* BUCLE PRINCIPAL DE ENTRENAMIENTO
for (let r = 0; r < R; r++) {//1 - Para cada época de entrenamiento
	console.log("Época " + (r+1) + "/" + R);
	
	// Matriz para almacenar las posiciones de las neuronas ganadoras
	// PosMn[0] = coordenadas X, PosMn[1] = coordenadas Y
	PosMn=[Array(n+1).fill(0),Array(n+1).fill(0)];	
	
	// Para cada animal en el dataset de entrenamiento
	for (let A = 0; A < n; A++) {//2
		console.log("  Procesando animal: " + Animales[A]);
		
		// PASO 1: ENCONTRAR LA NEURONA GANADORA (BMU - Best Matching Unit)
		let mn = Infinity; // Distancia mínima encontrada
		
		// Recorrer toda la grilla de neuronas
		for (let x = 0; x < FC; x++) {//3 - Coordenada X de la neurona
			for (let u = 0; u < FC; u++) {//4 - Coordenada Y de la neurona
				// Calcular distancia euclidiana entre el animal y la neurona
				D=0;
				for (let l = 0; l < N; l++) {//5 - Para cada característica
					// Sumar las diferencias absolutas entre características del animal y pesos de la neurona
					D+=Math.abs( Caract[A][l] - W[l + u * N + x * FC * N]);
				}
				
				// Si esta neurona está más cerca, es la nueva ganadora
				if(D < mn & D!=0 & D!=1){
					mn=D;
					PosMn[0][A]=x; // Guardar coordenada X de la neurona ganadora
					PosMn[1][A]=u; // Guardar coordenada Y de la neurona ganadora
				}
			}
		}
		
		// PASO 2: ACTUALIZAR PESOS DE LA NEURONA GANADORA Y SUS VECINAS
		var AW=Array(k).fill(0);      // Array para almacenar los cambios de pesos
		AWprueba = Array(k).fill(0);   // Array auxiliar
		
		// Recorrer toda la grilla nuevamente para actualizar pesos
		for (let h = 0; h < FC; h++) {//3 - Coordenada X de la neurona actual
			for (let a = 0; a < FC; a++) {//4 - Coordenada Y de la neurona actual
				// Calcular distancia entre neurona ganadora y neurona actual
				let d=Math.sqrt(Math.pow(PosMn[0][A]-h,2) + Math.pow(PosMn[1][A]-a,2));
				
				// Para cada característica de esta neurona
				for (let b = 0; b < N; b++) {//5
					// Aplicar función de vecindad gaussiana y calcular cambio de peso
					// Función de vecindad: e^(-d²/2σ²) donde σ = DS
					// Cambio de peso = función_vecindad * (característica_animal - peso_actual)
					AW[ b + a * N + h * FC * N ] = ( Math.pow(Math.E,- Math.pow(d,2) / (2 * Math.pow(DS,2))))  * (Caract[A][b] - W[b + a * N + h * FC * N]);
				}
			}
		}
		
		// Aplicar los cambios de peso calculados
		for (let q = 0; q < k; q++) {
			W[q]=(W[q] + AW[q]);
		}
	}
	
	// ACTUALIZACIÓN DE BARRA DE PROGRESO
	progreso = Math.round(r/R*100) + 10;
	if(progreso>=100){
		/* document.getElementById('train_label').innerHTML  = "Mapa Listo! <i class='fa fa-fw fa-thumbs-o-up'></i>"; */
		progreso = 100;
		console.log("Entrenamiento completado!");
	}
	else{
		/* document.getElementById('train_label').innerHTML  = "Cargando Mapa <i class='fa fa-refresh fa-spin'></i> " + progreso + '%';							 */
	}
	/* document.getElementById('train_div').style.width  = progreso + '%'; */
}

// + VISUALIZACIÓN DEL MAPA +
console.log("Dibujando mapa...");

// DIBUJAR GRID DEL MAPA
ctx.lineWidth = 0.5;
ctx.beginPath();			
ctx.moveTo(margen, margen);
ctx.lineTo(margen, largo);		// Línea vertical izquierda
ctx.moveTo(margen,margen);
ctx.lineTo(largo,margen);		// Línea horizontal superior
ctx.stroke();

// Dibujar líneas de la cuadrícula
for (let m = 1; m <= n; m++) {
	paso = ((largo/n)*m) + margen;
	ctx.lineWidth = 0.5;
	ctx.beginPath();			
	ctx.moveTo(paso, margen);
	ctx.lineTo(paso, largo);		// Líneas verticales
	ctx.moveTo(margen,paso);
	ctx.lineTo(largo,paso);		// Líneas horizontales
	ctx.stroke();
}	

//* COLOCAR ETIQUETAS DE ANIMALES EN EL MAPA
var lista = document.getElementById("animalList");
var lista_respaldo = "";

for (let m = 0; m < n; m++) {
	ctx.font = '10px Arial';
	ctx.fillStyle = "black";
	
	// Obtener coordenadas de la neurona ganadora para este animal
	let X = PosMn[0][m];
	let Y = PosMn[1][m];
	
	// Convertir coordenadas de grilla a píxeles del canvas
	// Agregar pequeña variación aleatoria para evitar superposición
	let x = ((X * largo )/n)* getRandom1(0.9,1.1);
	let y = ((Y * largo)/n)* getRandom1(0.9,1.1);
	
	// Dibujar nombre del animal en el canvas
	ctx.fillText(Animales[m],x,y);
	
	// Crear etiqueta para mostrar en la lista
	label_animal = Animales[m] + " = [" + Math.round(x)+ ", " + Math.round(y) + "] ";
	let la = document.createElement("label");
	lista.append(label_animal, la);
	lista_respaldo = lista_respaldo + "<label>" + label_animal + "</label>";
}

// FUNCIÓN AUXILIAR PARA NÚMEROS ALEATORIOS EN RANGO
function getRandom1(min, max) {
  return Math.random() * (max - min) + min;
}

// + FUNCIONES PARA ANIMAL NUEVO +
var anterior = "";
var start = 0;

// FUNCIÓN PARA PROCESAR UN NUEVO ANIMAL
function cargar_nuevo(){
	console.log("Procesando nuevo animal...");
	
	var map2 = document.getElementById('map');
	var ctx2 = map2.getContext('2d');
	
	// Obtener valores del formulario
	var nuevo = document.getElementById('nuevo').value;
	var Tamano = document.getElementById('Tamano').value;
	var Hogar = document.getElementById('Hogar').value;	
	var Cuatro_Patas = document.getElementById('Cuatro_Patas').value;
	var Cazador = document.getElementById('Cazador').value;
	var Corre = document.getElementById('Corre').value;
	var Plumas = document.getElementById('Plumas').value;
	var Pelo = document.getElementById('Pelo').value;
	var Nadador = document.getElementById('Nadador').value;
	var Trepa = document.getElementById('Trepa').value;
	var Colmillos = document.getElementById('Colmillos').value;
	var Cuernos = document.getElementById('Cuernos').value;

	// Verificar que todos los campos estén completos
	if(nuevo != '' & Tamano != '' & Hogar != '' & Cuatro_Patas != '' & Cazador != '' & Corre != '' & Plumas != '' & Pelo != '' & Nadador != '' & Trepa != '' & Colmillos != '' & Cuernos != ''){
		lista.innerHTML = '';		
		
		// Crear vector de características del nuevo animal
		nuevo_animal = [parseFloat(Tamano),parseFloat(Hogar),parseFloat(Cuatro_Patas),parseFloat(Cazador),parseFloat(Corre),parseFloat(Plumas),parseFloat(Pelo),parseFloat(Nadador),parseFloat(Trepa),parseFloat(Colmillos),parseFloat(Cuernos)];
		
		// ENCONTRAR LA NEURONA GANADORA PARA EL NUEVO ANIMAL
		let mn2 = Infinity;
		for (let x = 0; x < FC; x++) {//3
			for (let u = 0; u < FC; u++) {//4
				let D2=0;
				// Calcular distancia entre nuevo animal y esta neurona
				for (let l = 0; l < N; l++) {//5
					 D2+=Math.abs( nuevo_animal[l] - W[l + u * N + x * FC * N]);
				}
				// Si es la neurona más cercana, guardar sus coordenadas
				if(D2 < mn2 ){
					mn2=D2;
					PosMn[0][n]=x;  // Coordenada X de la neurona ganadora
					PosMn[1][n]=u;  // Coordenada Y de la neurona ganadora
				}
			}
		}

		// DIBUJAR EL NUEVO ANIMAL EN EL MAPA
		ctx2.font = '12px Arial';
		ctx2.fillStyle = "red";  // Color rojo para distinguir el nuevo animal
		
		// Convertir coordenadas de grilla a píxeles
		let X = PosMn[0][n];
		let Y = PosMn[1][n]
		let x = ((X * largo )/n);
		let y = ((Y * largo )/n);
		
		// Dibujar nombre del nuevo animal
		ctx2.fillText(nuevo,x,y);		
		start=1;
		
		// Actualizar lista con el nuevo animal
		label_animal = "Nuevo! " + nuevo + " (" + Math.round(x)+ "," + Math.round(y) + "), ";
		lista_respaldo = lista_respaldo + "<label>" + label_animal + "&nbsp</label>";
		lista.innerHTML = lista_respaldo;
		
		console.log("Nuevo animal '" + nuevo + "' colocado en posición [" + Math.round(x) + "," + Math.round(y) + "]");
	}
}		