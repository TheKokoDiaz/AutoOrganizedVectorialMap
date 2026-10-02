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

// + ENTRENAMIENTO SOM 3D +
// Cada neurona de la grilla XYZ conserva un peso por característica del animal.
var SOM3D_SIZE = 20;
var SOM3D_FEATURES = etiquetas.length;
var SOM3D_ANIMALS = Animales.length;
var SOM3D_NODE_COUNT = SOM3D_SIZE ** 3;
var SOM3D_WEIGHTS = Array.from({ length: SOM3D_NODE_COUNT * SOM3D_FEATURES }, getRandom);
// PosMn guarda por separado las coordenadas X, Y y Z de cada animal.
var PosMn = [Array(SOM3D_ANIMALS), Array(SOM3D_ANIMALS), Array(SOM3D_ANIMALS)];

// Convierte XYZ en un índice lineal para almacenar los pesos en un arreglo.
function som3DIndex(x, y, z) {
	return (x * SOM3D_SIZE + y) * SOM3D_SIZE + z;
}

// PASO 1: encuentra la unidad de mejor coincidencia (BMU) para un vector.
function som3DFindWinner(vector) {
	var bestDistance = Infinity;
	var winner = { x: 0, y: 0, z: 0 };

	// Recorre las coordenadas X, Y y Z de toda la grilla de neuronas.
	for (var x = 0; x < SOM3D_SIZE; x++) {
		for (var y = 0; y < SOM3D_SIZE; y++) {
			for (var z = 0; z < SOM3D_SIZE; z++) {
				var offset = som3DIndex(x, y, z) * SOM3D_FEATURES;
				var distance = 0;

				// Suma las diferencias absolutas entre las 20 características y los pesos.
				for (var feature = 0; feature < SOM3D_FEATURES; feature++) {
					distance += Math.abs(vector[feature] - SOM3D_WEIGHTS[offset + feature]);
				}

				if (distance < bestDistance) {
					bestDistance = distance;
					winner = { x: x, y: y, z: z };
				}
			}
		}
	}

	return winner;
}

// PASO 2: entrena el mapa durante varias épocas con tasa y radio decrecientes.
function obtainEpochs(){
	if(sessionStorage.epochs == null || sessionStorage.epochs == NaN){
		epochs = 8;
	} else {
		epochs = sessionStorage.epochs;
	}

	let txtEpochs = document.getElementById('epochs');
	txtEpochs.value = epochs;

	return epochs;
}

function obtainRate(){
	if(sessionStorage.rate == null || sessionStorage.rate == NaN){
		rate = 0.35;
	} else {
		rate = sessionStorage.rate;
	}

	let txtRate = document.getElementById('rate');
	txtRate.value = rate;

	return rate;
}

var SOM3D_EPOCHS = obtainEpochs();
var SOM3D_LEARNING_RATE = obtainRate();

for (var epoch = 0; epoch < SOM3D_EPOCHS; epoch++) {
	var progress = epoch / (SOM3D_EPOCHS - 1);
	var learningRate = SOM3D_LEARNING_RATE * Math.exp(-2.2 * progress);
	var radius = Math.max(1, SOM3D_SIZE * 0.45 * Math.exp(-3 * progress));
	var radiusSquared = radius * radius;
	var animalOrder = Array.from({ length: SOM3D_ANIMALS }, function (_, index) { return index; });

	// Mezcla el orden de los animales en cada época para evitar un orden fijo de aprendizaje.
	for (var shuffleIndex = animalOrder.length - 1; shuffleIndex > 0; shuffleIndex--) {
		var swapIndex = Math.floor(Math.random() * (shuffleIndex + 1));
		[animalOrder[shuffleIndex], animalOrder[swapIndex]] = [animalOrder[swapIndex], animalOrder[shuffleIndex]];
	}

	// Presenta cada animal, localiza su BMU y actualiza las neuronas cercanas en XYZ.
	for (var animalIndex of animalOrder) {
		var vector = Caract[animalIndex];
		var winner = som3DFindWinner(vector);
		var reach = Math.ceil(radius * 2.5);

		// Limita el recorrido al vecindario de la BMU en los tres ejes.
		for (var nodeX = Math.max(0, winner.x - reach); nodeX <= Math.min(SOM3D_SIZE - 1, winner.x + reach); nodeX++) {
			for (var nodeY = Math.max(0, winner.y - reach); nodeY <= Math.min(SOM3D_SIZE - 1, winner.y + reach); nodeY++) {
				for (var nodeZ = Math.max(0, winner.z - reach); nodeZ <= Math.min(SOM3D_SIZE - 1, winner.z + reach); nodeZ++) {
					var dx = nodeX - winner.x;
					var dy = nodeY - winner.y;
					var dz = nodeZ - winner.z;
					var distanceSquared = dx * dx + dy * dy + dz * dz;
					var influence = Math.exp(-distanceSquared / (2 * radiusSquared));
					var weightOffset = som3DIndex(nodeX, nodeY, nodeZ) * SOM3D_FEATURES;

					// La influencia gaussiana acerca los pesos vecinos al vector del animal.
					for (var featureIndex = 0; featureIndex < SOM3D_FEATURES; featureIndex++) {
						var weightIndex = weightOffset + featureIndex;
						SOM3D_WEIGHTS[weightIndex] += learningRate * influence * (vector[featureIndex] - SOM3D_WEIGHTS[weightIndex]);
					}
				}
			}
		}
	}
}

// PASO 3: calcula la posición final XYZ de cada animal tras el entrenamiento.
for (var animal = 0; animal < SOM3D_ANIMALS; animal++) {
	var animalWinner = som3DFindWinner(Caract[animal]);
	PosMn[0][animal] = animalWinner.x;
	PosMn[1][animal] = animalWinner.y;
	PosMn[2][animal] = animalWinner.z;
}

// PASO 4: proyecta las posiciones XYZ al canvas 2D con una vista isométrica.
var mapCanvas = document.getElementById('map');
var mapContext = mapCanvas.getContext('2d');
var axisXScale = Math.SQRT1_2;
var axisYScale = Math.SQRT1_2 / 2;
var depthScale = Math.sqrt(axisXScale ** 2 + axisYScale ** 2);
var mapHalfRange = (SOM3D_SIZE - 1) / 2;
var mapPixelRatio = Math.min(window.devicePixelRatio || 1, 2);

// Centra el cubo y comprime ligeramente Z para dar profundidad sin cambiar el tamaño de los emojis.
function projectSOM3D(x, y, z, scale, centerX, centerY) {
	var centeredX = x - mapHalfRange;
	var centeredY = y - mapHalfRange;
	var centeredZ = z - mapHalfRange;
	return {
		x: centerX + (centeredX - centeredY) * axisXScale * scale,
		y: centerY + ((centeredX + centeredY) * axisYScale - centeredZ * depthScale) * scale
	};
}

// Dibuja un segmento proyectado; se usa para el marco y los ejes de referencia.
function drawSOM3DLine(start, end, color, width) {
	mapContext.beginPath();
	mapContext.moveTo(start.x, start.y);
	mapContext.lineTo(end.x, end.y);
	mapContext.strokeStyle = color;
	mapContext.lineWidth = width;
	mapContext.stroke();
}

// Ajusta la resolución al canvas, dibuja el cubo y coloca los animales en sus coordenadas.
function drawSOM3D() {
	var bounds = mapCanvas.getBoundingClientRect();
	var width = Math.max(1, bounds.width);
	var height = Math.max(1, bounds.height);
	mapPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
	mapCanvas.width = Math.round(width * mapPixelRatio);
	mapCanvas.height = Math.round(height * mapPixelRatio);
	mapContext.setTransform(mapPixelRatio, 0, 0, mapPixelRatio, 0, 0);
	mapContext.clearRect(0, 0, width, height);

	var margin = Math.min(width, height) * 0.09;
	var horizontalExtent = mapHalfRange * 2 * axisXScale;
	var verticalExtent = mapHalfRange * (2 * axisYScale + depthScale);
	var scale = Math.min((width - 2 * margin) / (2 * horizontalExtent), (height - 2 * margin) / (2 * verticalExtent));
	var centerX = width / 2;
	var centerY = height / 2;
	var low = 0;
	var high = SOM3D_SIZE - 1;

	// Limpia el canvas y establece el fondo antes de dibujar el mapa.
	mapContext.fillStyle = '#102a32';
	mapContext.fillRect(0, 0, width, height);
	mapContext.lineWidth = 1;

	for (var a = low; a <= high; a += high) {
		for (var b = low; b <= high; b += high) {
			drawSOM3DLine(projectSOM3D(low, a, b, scale, centerX, centerY), projectSOM3D(high, a, b, scale, centerX, centerY), 'rgba(149, 190, 182, 0.38)', 1);
			drawSOM3DLine(projectSOM3D(a, low, b, scale, centerX, centerY), projectSOM3D(a, high, b, scale, centerX, centerY), 'rgba(149, 190, 182, 0.38)', 1);
			drawSOM3DLine(projectSOM3D(a, b, low, scale, centerX, centerY), projectSOM3D(a, b, high, scale, centerX, centerY), 'rgba(149, 190, 182, 0.38)', 1);
		}
	}

	// Resalta X, Y y Z para que se distingan los tres ejes del espacio.
	var origin = projectSOM3D(mapHalfRange, mapHalfRange, mapHalfRange, scale, centerX, centerY);
	var xAxis = projectSOM3D(high, mapHalfRange, mapHalfRange, scale, centerX, centerY);
	var yAxis = projectSOM3D(mapHalfRange, high, mapHalfRange, scale, centerX, centerY);
	var zAxis = projectSOM3D(mapHalfRange, mapHalfRange, high, scale, centerX, centerY);
	drawSOM3DLine(origin, xAxis, '#f28b65', 2);
	drawSOM3DLine(origin, yAxis, '#72c9a4', 2);
	drawSOM3DLine(origin, zAxis, '#76b9ed', 2);

	mapContext.font = 'bold 15px Raleway, sans-serif';
	mapContext.textAlign = 'center';
	mapContext.textBaseline = 'middle';
	mapContext.fillStyle = '#f28b65';
	mapContext.fillText('X', xAxis.x + 10, xAxis.y);
	mapContext.fillStyle = '#72c9a4';
	mapContext.fillText('Y', yAxis.x - 9, yAxis.y);
	mapContext.fillStyle = '#76b9ed';
	mapContext.fillText('Z', zAxis.x, zAxis.y - 10);

	// Ordena los emojis por profundidad para dibujar primero los más alejados.
	var drawOrder = Array.from({ length: SOM3D_ANIMALS }, function (_, index) { return index; });
	drawOrder.sort(function (first, second) {
		return PosMn[0][first] + PosMn[1][first] + PosMn[2][first] - PosMn[0][second] - PosMn[1][second] - PosMn[2][second];
	});

	mapContext.font = `${Math.max(14, Math.min(22, Math.round(scale * 0.9)))}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
	mapContext.textAlign = 'center';
	mapContext.textBaseline = 'middle';
	mapContext.fillStyle = '#ffffff';
	for (var index of drawOrder) {
		var point = projectSOM3D(PosMn[0][index], PosMn[1][index], PosMn[2][index], scale, centerX, centerY);
		mapContext.fillText(Animales[index], point.x, point.y);
	}
}

// Muestra las coordenadas XYZ de cada animal en la lista bajo el canvas.
var animalList = document.getElementById('animalList');
animalList.replaceChildren();
for (var listIndex = 0; listIndex < SOM3D_ANIMALS; listIndex++) {
	var animalEntry = document.createElement('span');
	animalEntry.className = 'animal-entry';
	animalEntry.textContent = `${Animales[listIndex]} = [${PosMn[0][listIndex]}, ${PosMn[1][listIndex]}, ${PosMn[2][listIndex]}]`;
	animalList.append(animalEntry);
}

drawSOM3D();
window.addEventListener('resize', drawSOM3D);

// Busca la BMU del animal nuevo y lo añade al mapa sin volver a entrenar los pesos.
function cargar_nuevo() {
	var animalName = document.getElementById('emoji').value.trim();
	var fieldIds = [
		'travel', 'ecosistem', 'habitats', 'size', 'diet',
		'activity', 'social-structure', 'reproduction', 'climate', 'lifespan',
		'body-covering', 'animal-group', 'thermoregulation', 'parental-care',
		'offspring-count', 'communication', 'defense', 'migration',
		'distribution', 'conservation'
	];
	var rawFeatures = fieldIds.map(function (id) {
		return document.getElementById(id).value;
	});
	var animalForm = document.querySelector('form');
	var hasImportedCurrentForm = animalForm.dataset.imported === 'true';

	if (!animalName || rawFeatures.some(function (value) { return value === ''; })) {
		animalForm.dataset.imported = 'false';
		return;
	}

	if (hasImportedCurrentForm) {
		return;
	}

	var features = rawFeatures.map(Number);
	if (features.length !== SOM3D_FEATURES || !features.every(Number.isFinite)) {
		return;
	}

	var position = som3DFindWinner(features);
	Animales.push(animalName);
	Caract.push(features);
	PosMn[0].push(position.x);
	PosMn[1].push(position.y);
	PosMn[2].push(position.z);
	SOM3D_ANIMALS = Animales.length;
	animalForm.dataset.imported = 'true';

	var animalEntry = document.createElement('span');
	animalEntry.className = 'animal-entry new-animal';
	animalEntry.textContent = `${animalName} = [${position.x}, ${position.y}, ${position.z}]`;
	animalList.append(animalEntry);
	drawSOM3D();
}

var animalFormControls = document.querySelector('form');
animalFormControls.addEventListener('input', cargar_nuevo);
animalFormControls.addEventListener('change', cargar_nuevo);