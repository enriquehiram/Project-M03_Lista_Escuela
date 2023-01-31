class HashTable {
    constructor() {
      // Inicializar la tabla con un tamaño fijo
      this.table = new Array(15);
      // Inicializar el contador de elementos en 0
      this.size = 0;
    }
    // Escribir una funcion hash que acepta un valor llave y lo transgforma en un indice
    _hash(key) {
      let _hash = 0;
  
      for (let i = 0; i < key.length; i++) {
        _hash += key.charCodeAt(i);
      }
  
      return _hash % this.table.length;
    }
    // Crear nuestro metodo set, que va a recibir el par llave valor y utilazara la 
    // funcion _hast
    set(key, value) {
      const index = this._hash(key);
  
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          // Encontro llave-valor en el arreglo
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
    // Crearemos un metodo get, que recibira la llave y devolvera el valor que tenga 
    // almacenado
    get(key) {
      const index = this._hash(key);
  
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i];
          }
        }
      }
  
      return undefined;
    }
    // Crearemos un metodo que nos permita eliminar elementos de la estructura usando 
    // la llave para buscarlos
    remove(key) {
      const index = this._hash(key);
  
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    }
}


class Student {
    constructor (name, lastName, age, gender, class_notes) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        //this.enrollment = enrollement;
        this.class_notes = new HashTable ();
        this.size = 0;
    }

    resume () {
        let presentacion = '';
        if (this.gender == 'hombre'){
            presentacion = 'El alumno'
        }else{
            presentacion = 'La alumna'
        }
        return `${presentacion}: ${this.name} ${this.lastName}, tiene ${this.age} años.`
    }

    StudentAvg () {
        let avg_aux = null;
        let sum = 0;
        let avg = 0;
        for (let i =0; i < courses.length; i++ ){
            avg_aux = this.class_notes.get(courses[i])
            sum += avg_aux[1] //Es uno por que es el segundo campo del array
        }
        avg = sum / this.class_notes.size
        return avg
    }
}

let lista_alumnos = []
let courses = []

function AltaAlumnos(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let gender = document.getElementById("gender").value
//    console.log(nombre)
    lista_alumnos.push(new Student (nombre, apellido, edad, gender))

    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("gender").value = ""
}

function AltaAsignatura(){
    let materias = document.getElementById("materias").value
//    console.log(nombre)
    courses.push(materias)
    document.getElementById("materias").value = ""
}

function InscribirAlumno(){
    
}