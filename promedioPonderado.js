const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    }
];

function calcularPromedioPonderado(objetoNotasCurso){
    
    const notesWithCredit = objetoNotasCurso.map(function(noteObject){
        return noteObject.note * noteObject.credit;
    });
    
    const sumOfNotesWithCredit = notesWithCredit.reduce(function(sum = 0, newVal){
        return sum + newVal;
    });
    
    const credits = objetoNotasCurso.map(function(noteObject){
        return noteObject.credit
    });
    
    const sumOfCredit = credits.reduce(function(sum = 0,newVal){
        return sum + newVal;
    })
    
    const weightedAverage = sumOfNotesWithCredit / sumOfCredit;

    return weightedAverage;
}


