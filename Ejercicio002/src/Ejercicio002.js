/*
    Tras haber creado nuestra base de datos 
    mediante los comandos:
        > db.createCollection("musica");
        > use "musica"
        
    Introduciremos los siguientes datos mediante 
    la función "insertOne".
    Estructura: {
        titulo: String,
        fecha: String,
        cantante: List
        miembros: List
    }
*/

db.musica.insertOne({
    "titulo": "Extremoduro",
    "fecha": "1987",
    "cantante": ["Roberto"],
    "miembros": ["Roberto", "Iñaki", "José", "Miguel"]
});

db.musica.insertOne({
    "titulo": "Estopa",
    "fecha": "1999",
    "cantante": ["David"],
    "miembros": ["David", "José"]
});

db.musica.insertOne({
    "titulo": "Fito & Fitipaldis",
    "fecha": "1998",
    "cantante": ["Fito"],
    "miembros": ["Fito", "Carlos", "Javier", "Joserra"]
});

db.musica.insertOne({
    "titulo": "SFDK",
    "fecha": "1993",
    "cantante": ["Zatu"],
    "miembros": ["Zatu", "Oscar"]
});

/* Un find de búsqueda general que nos devuelve todos los documentos insertados*/

    db.musica.find({})

/* Un find que filtrará los datos segun su título y nos mostrará el grupo SFDK*/ 

    db.musica.find({ titulo: "SFDK"})

/* Un find con un operador de consulta, en este caso con $or que filtra documentos que cumplan ambas coindiciones implantadas */

    db.musica.find({$or: [
        { titulo : "Fito & Fitipaldis"},
        { titulo : "Extremoduro"},

    ] })

/* Adjunto pdf con imágenes del resultado de cada consulta*/

