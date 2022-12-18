class Alumno {
    constructor (name, lastName, age, gender, enrollement, notes) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.enrollment = enrollement;
        this.notes = notes;
    }

    bio () {
        return `${this.name} tiene ${this.age} años. A el le gusta ${this.interests}`
    }

    greeting () {
        return `Hola! Yo soy ${this.name}`
    }
}