let date = new Date(); // oggetto di tipo Date
console.log(typeof date);
console.log(date);
console.dir(date);

let date2 = Date(); // genera una stringa con la data
console.log(date2);
console.log(typeof date2);

let date3 = Date.now();
console.log(date3); // millisecondi dal 1 gennaio 1970
console.log(Date.parse(date2));

console.log("----- Get day/month, etc. -----");
console.log(date.getDate()); // numero del giorno del mese
console.log(date.getMonth() + 1); // mese (parte da 0)
console.log(date.getFullYear()); // anno
// loggo una stringa:
// Sono le 10 e 51
console.log(`Sono le ${date.getHours()} e ${date.getMinutes()}`);
console.log(` ${date.setYear(2023)}`);

console.log("----- Converti data -----");
console.log(date.toString()); // stringa con la data completa
console.log(date.toDateString()); // stringa con giorno mese anno
console.log(date.toTimeString()); // stringa con ora e fuso orario
