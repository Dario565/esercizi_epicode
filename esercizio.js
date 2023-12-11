/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
I principali datatype in javascript sono anche detti tipi semplici o primitivi e sono 5 : String , Number , Boolean , Null , Undefined.

La String é un tipo di dato che puo contenere sia caratteri alafabetici che numerici e possono essere delimitate dalle virgolette sia singole che doppie e può avere una qualsiasi lunghezza volendo può essere anche vuota.

Il Number è un tipo di dato che puo contenere qualsiasi tipo di carattere numerico sia integro o decimale e in alcuni casi anche valori numerici speciali.

Il Boolean è il tipo di dato appunto booleano è molto importante nella programmazione è un entita logica che puo assumere solo due valori ovvero true e false.

Il Null è un tipo di dato completamente vuoto che ancora non contiene nulla.

L'Undefined invece è un tipo di dato alla quale non è stato assegnato un valore e che non è ancora stato ben definito.


*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti sono gruppi di variabili, una raccolta di coppie key-value che servono a definire o descrivere un entità */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20; 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12; 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let name = "Dario Franco"; 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

 let sottr = 4 - x; 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

 let name1 = "john";
   let name2 = "John";

   console.log(name1 === name2);
   console.log(name1.toLowerCase() === name2.toLowerCase())
