<?php 
include("header.php");   
//require ('class/alumno.class.php');
//$objMetro=new Alumno;

// DEFINICIÓN DE CARACTERÍSTICAS DE LOS ANIMALES
// Estas son las 11 características que usaremos para clasificar cada animal
$etiquetas = ['Tamano',
'Hogar',
'Cuatro_Patas',
'Cazador',
'Corre',
'Plumas',
'Pelo',
'Nadador',
'Trepa',
'Colmillos',
'Cuernos'];
?>
    <section class="content">
    
      <div class="row">
		<div class="col-md-6" >
			<div  class="box box-success direct-chat" >
				<center>
					<h4 class='nombre' >PROYECTO: MAPA AUTOORGANIZADO</h4>
					<h4 class='nombre' >MATERIA: WEB SEMÁNTICA</h4>
					<h4 class='nombre' >DOCENTE: DR. LUIS REY LECHUGA GUTIERREZ </h4>
				</center>				
			</div>
		</div>		
		<div class="col-md-6" >
			<div  class="box box-success direct-chat" >
				<center>
					<h4 class='nombre' >Integrantes:</h4>
					<h4 class='nombre' >RUTH ABIGAIL MUÑOZ ESCÁRCEGA 213220002</h4>
					<h4 class='nombre' >SAMUEL MENDEZ VEGA 213220001</h4>
					<h4 class='nombre' >RAYMUNDO CORONADO MENDOZA 213220149</h4>
				</center>
			</div>
		</div>
            <div id="marco" class="col-md-12" >
                <div   class="box box-warning" ><br>
					<div   class="box-body" >
						<!-- FORMULARIO PARA INGRESAR UN NUEVO ANIMAL -->
						<div   class="row" >
							<div class='col-12 col-sm-10 col-md-8 col-lg-6' >
								<label >Nuevo Animal (Nombre)</label>
								<div class="input-group margin">
								<input type="text" class="form-control" onchange='cargar_nuevo()' id="nuevo" name="nuevo" placeholder="Ingresa un nuevo animal" maxlength="25">
									<span class="input-group-btn">
									<button onclick="resetear();"  type="button" class="btn btn-success btn-flat">Resetear!</button>
									</span>
								</div>
								<br>
							</div>	
						</div>
						<!-- SELECTORES PARA LAS CARACTERÍSTICAS DEL ANIMAL -->
						<div   class="row" >
								<!-- Tamaño: categorías normalizadas entre 0.33 y 0.99 -->
								<div class="col-12 col-sm-6  col-md-3 col-lg-2">
									<label>Tamaño</label>
									<select id="Tamano" name="Tamano" class="form-control" onchange="cargar_nuevo()">
										<option value="">Selecciona una opción</option>
										<option value="0.33">Pequeño</option>										
										<option value="0.66">Mediano</option>	
										<option value="0.99">Grande</option>	
									</select>					
								</div>
								<!-- Hogar: dónde vive normalmente el animal -->
								<div class="col-12 col-sm-6  col-md-3 col-lg-2">
									<label>Hogar</label>
									<select id="Hogar" name="Hogar" class="form-control" onchange="cargar_nuevo()">
										<option value="">Selecciona una opción</option>
										<option value="0.33">Granja</option>										
										<option value="0.66">Casa</option>	
										<option value="0.99">Zoológico</option>	
									</select>					
								</div>								
					<?php
					// GENERACIÓN AUTOMÁTICA DE LOS DEMÁS SELECTORES
					// Para las características restantes (índices 2-10), generamos selectores binarios (Sí/No)
					for($i=2; $i<11;$i++) {
						$valor = $etiquetas[$i];
						echo	"<div class='col-12 col-sm-6  col-md-3 col-lg-2'>
									<label >$valor</label>
									<select id='$valor' name='$valor' class='form-control' onchange='cargar_nuevo()' >
										<option value='' >Selecciona una opción</option>
										<option value='0' >No</option>										
										<option value='1' >Sí</option>	

									</select>					
								</div>";
					}
					?>
						</div>					
					</div>
				</div>
				<!-- BARRA DE PROGRESO DEL ENTRENAMIENTO -->
				<p id='train_label' class='train_label' >Entrenando... <i class='fa fa-refresh fa-spin'></i></p>
				<div class='progress progress-sm active'>
					<div id='train_div'  class=' progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='20' aria-valuemin='0' aria-valuemax='100' style='width: 0%'>
						<span  id='train_span'  class='sr-only'>Iniciando..</span>
					</div>
				</div>

            </div>
			<!-- CANVAS DONDE SE DIBUJA EL MAPA AUTOORGANIZADO -->
			<div  class="col-md-6" >
				<canvas id='canva_mapa' width="500" height="500" style='border:1px solid #000000;padding: 0;margin: auto;display: block;'></canvas>	 
			</div>
			<!-- ÁREA PARA MOSTRAR LA LISTA DE ANIMALES Y SUS POSICIONES -->
			<div id="lista_animales" class="col-md-6" >		
			</div>
			
		</div>		
     </div>
    </section>
	
<script>
// FUNCIÓN AUXILIAR PARA GENERAR NÚMEROS ALEATORIOS
function getRandom() {
  return Math.random();
}

// ==================== DATOS DE ENTRENAMIENTO ====================
// Lista de 20 animales que usaremos para entrenar el mapa
var Animales=['León',
'Puma',
'Tigre',
'Mono',
'Oso',
'Caballo',
'Jirafa', 
'Elefante', 
'Hipopótamo', 
'Rinoceronte',
'Perro',
'Cerdo',
'Vaca',
'Pato',
'Ganzo',
'Conejo',
'Cabra', 
'Gato', 
'Cebra', 
'Gallina'];

// Etiquetas de las características (mismas que en PHP)
var etiquetas = ['Tamano',
'Hogar',
'Cuatro_Patas',
'Cazador',
'Corre',
'Plumas',
'Pelo',
'Nadador',
'Trepa',
'Colmillos',
'Cuernos'];

// MATRIZ DE CARACTERÍSTICAS DE LOS ANIMALES
// Cada fila representa un animal, cada columna una característica
// Los valores están normalizados entre 0 y 1
var Caract = [
// Tamaño,Hogar,Patas,Cazador,Corre,Plumas,Pelo,Nadador,Trepa,Colmillos,Cuernos
[0.66,0.99,1,1,1,0,1,0,0,1,0],//'León'     - Grande, zoológico, 4 patas, cazador, corre, sin plumas, con pelo, no nada, no trepa, con colmillos, sin cuernos
[0.66,0.99,1,1,1,0,1,0,1,1,0],//'Puma'     - Similar al león pero trepa
[0.66,0.99,1,1,1,0,1,0,1,1,0],//'Tigre'    - Similar al león pero trepa
[0.66,0.99,0,0,1,0,1,0,1,1,0],//'Mono'     - Mediano, zoológico, sin 4 patas (bípedo), no cazador, corre, sin plumas, con pelo, no nada, trepa, con colmillos, sin cuernos
[0.99,0.99,1,1,0,0,1,0,0,1,0],//'Oso'      - Grande, zoológico, 4 patas, cazador, no corre, sin plumas, con pelo, no nada, no trepa, con colmillos, sin cuernos
[0.99,0.33,1,0,1,0,1,0,0,0,0],//'Caballo'  - Grande, granja, 4 patas, no cazador, corre, sin plumas, con pelo, no nada, no trepa, sin colmillos, sin cuernos
[0.99,0.99,1,0,1,0,0,0,0,0,1],//'Jirafa'   - Grande, zoológico, 4 patas, no cazador, corre, sin plumas, sin pelo, no nada, no trepa, sin colmillos, con cuernos
[0.99,0.99,1,0,0,0,0,1,0,0,1],//'Elefante' - Grande, zoológico, 4 patas, no cazador, no corre, sin plumas, sin pelo, nada, no trepa, sin colmillos, con cuernos (colmillos)
[0.99,0.99,1,0,0,0,0,1,0,1,0],//'Hipopótamo' - Grande, zoológico, 4 patas, no cazador, no corre, sin plumas, sin pelo, nada, no trepa, con colmillos, sin cuernos
[0.99,0.99,1,0,1,0,0,0,0,0,1],//'Rinoceronte' - Grande, zoológico, 4 patas, no cazador, corre, sin plumas, sin pelo, no nada, no trepa, sin colmillos, con cuernos
[0.33,0.66,1,0,1,0,1,1,0,1,0],//'Perro'    - Pequeño, casa, 4 patas, no cazador, corre, sin plumas, con pelo, nada, no trepa, con colmillos, sin cuernos
[0.66,0.33,1,0,0,0,0,0,0,0,0],//'Cerdo'    - Mediano, granja, 4 patas, no cazador, no corre, sin plumas, sin pelo, no nada, no trepa, sin colmillos, sin cuernos
[0.66,0.33,1,0,0,0,0,0,0,0,1],//'Vaca'     - Mediana, granja, 4 patas, no cazador, no corre, sin plumas, sin pelo, no nada, no trepa, sin colmillos, con cuernos
[0.33,0.33,0,0,0,1,0,1,0,0,0],//'Pato'     - Pequeño, granja, sin 4 patas, no cazador, no corre, con plumas, sin pelo, nada, no trepa, sin colmillos, sin cuernos
[0.33,0.33,0,0,0,1,0,1,0,0,0],//'Ganso'    - Similar al pato
[0.33,0.33,1,0,1,0,1,0,0,0,0],//'Conejo'   - Pequeño, granja, 4 patas, no cazador, corre, sin plumas, con pelo, no nada, no trepa, sin colmillos, sin cuernos
[0.33,0.33,1,0,1,0,1,0,1,0,1],//'Cabra'    - Pequeña, granja, 4 patas, no cazador, corre, sin plumas, con pelo, no nada, trepa, sin colmillos, con cuernos
[0.33,0.66,1,0,1,0,1,0,1,0,0],//'Gato'     - Pequeño, casa, 4 patas, no cazador, corre, sin plumas, con pelo, no nada, trepa, sin colmillos, sin cuernos
[0.66,0.99,1,0,1,0,0,0,0,0,0],//'Cebra'    - Mediana, zoológico, 4 patas, no cazador, corre, sin plumas, sin pelo, no nada, no trepa, sin colmillos, sin cuernos
[0.33,0.33,0,0,1,1,0,0,0,0,0],//'Gallina'  - Pequeña, granja, sin 4 patas, no cazador, corre, con plumas, sin pelo, no nada, no trepa, sin colmillos, sin cuernos
];

// ==================== PARÁMETROS DEL SOM ====================
var medida= 500;                    // Tamaño del canvas en píxeles
var map = document.getElementById('canva_mapa'); // Referencia al canvas
var ctx = map.getContext('2d');     // Contexto 2D para dibujar
var margen = medida*0.05;           // Margen del 5% del canvas
var largo = medida - margen;        // Área útil del canvas
var R=10;                           // Número de iteraciones de entrenamiento (épocas)
var FC=20;                          // Tamaño de la grilla del mapa (20x20 = 400 neuronas)
var N=Caract[0].length;            // Número de características por animal (11)
var n = Caract.length;             // Número de animales en el dataset (20)
var k= FC*FC*N;                    // Número total de pesos (20*20*11 = 4400)

// INICIALIZACIÓN DE PESOS
// Matriz de pesos W: cada neurona tiene N pesos (uno por característica)
// Los pesos se inicializan aleatoriamente entre 0 y 1
var W = Array.from({length: k}, () => Math.random());

// PARÁMETROS DE ENTRENAMIENTO
var DS=1;	// Desviación estándar inicial para la función de vecindad

// ==================== ALGORITMO DE ENTRENAMIENTO SOM ====================
console.log("Iniciando entrenamiento del SOM...");

// BUCLE PRINCIPAL DE ENTRENAMIENTO
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
		document.getElementById('train_label').innerHTML  = "Mapa Listo! <i class='fa fa-fw fa-thumbs-o-up'></i>";
		progreso = 100;
		console.log("Entrenamiento completado!");
	}
	else{
		document.getElementById('train_label').innerHTML  = "Cargando Mapa <i class='fa fa-refresh fa-spin'></i> " + progreso + '%';							
	}
	document.getElementById('train_div').style.width  = progreso + '%';
}

// ==================== VISUALIZACIÓN DEL MAPA ====================
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

// COLOCAR ETIQUETAS DE ANIMALES EN EL MAPA
var lista = document.getElementById("lista_animales");
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
	label_animal = Animales[m] + " = [" + Math.round(x)+ "," + Math.round(y) + "]," +" ";
	let la = document.createElement("label");
	lista.append(label_animal, la);
	lista_respaldo = lista_respaldo + "<label>" + label_animal + "</label>";
}

// FUNCIÓN AUXILIAR PARA NÚMEROS ALEATORIOS EN RANGO
function getRandom1(min, max) {
  return Math.random() * (max - min) + min;
}

// ==================== FUNCIONES PARA ANIMAL NUEVO ====================
var anterior = "";
var start = 0;

// FUNCIÓN PARA PROCESAR UN NUEVO ANIMAL
function cargar_nuevo(){
	console.log("Procesando nuevo animal...");
	
	var map2 = document.getElementById('canva_mapa');
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

// FUNCIÓN PARA RESETEAR EL FORMULARIO
function resetear(){
	console.log("Reseteando formulario...");
	
	lista.innerHTML = '';
	// Limpiar todos los campos del formulario
	var nuevo = document.getElementById('nuevo').value = "";
	var Tamano = document.getElementById('Tamano').selectedIndex = "0";
	var Hogar = document.getElementById('Hogar').selectedIndex = "0";	
	var Cuatro_Patas = document.getElementById('Cuatro_Patas').selectedIndex = "0";
	var Cazador = document.getElementById('Cazador').selectedIndex = "0";
	var Corre = document.getElementById('Corre').selectedIndex = "0";
	var Plumas = document.getElementById('Plumas').selectedIndex = "0";
	var Pelo = document.getElementById('Pelo').selectedIndex = "0";
	var Nadador = document.getElementById('Nadador').selectedIndex = "0";
	var Trepa = document.getElementById('Trepa').selectedIndex = "0";
	var Colmillos = document.getElementById('Colmillos').selectedIndex = "0";
	var Cuernos = document.getElementById('Cuernos').selectedIndex = "0";
}
</script>	
<?php
include ('footer.php');
?>
