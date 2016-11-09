//Trying to make a Boekhandelcatalog

var program = require('commander');
 
program
  .version('Assignment 1.1')
  .option('-t, --title [Titel]', 'Boektitel')
  .option('-a, --author [Auteur]', 'Auteur')
  .option('-p, --price [Prijs]', 'Prijs')
  .option('-k, --kind [Soort]', 'Soort (Hardcover/Paperback)')
  .parse(process.argv);

  var book1_title = "Shadows in the Field"
  var book1_author = "Barz, Gregory F - Cooley Timothy J"
  var book1_price = "39,95"
  var book1_kind =  "Paperback"

  var book2_title = "Discovering Statistics Using R"
  var book2_author = "Field, Andy"
  var book2_price = "69,95"
  var book2_kind =  "Paperback"

  var book3_title = "Epsilon Uitgaven Muzikale Computers"
  var book3_author = "Honingh, Aline K."
  var book3_price = "17"
  var book3_kind =  "Paperback"

  var book4_title = "Eenvoudige Muziekleer"
  var book4_author = "Schouten, Hennie"
  var book4_price = "14,95"
  var book4_kind =  "Paperback"

  var book5_title = "A History of Western Music"
  var book5_author = "Burkholder, J Peter"
  var book5_price = "56,50"
  var book5_kind =  "Paperback"

switch(program.title)
{
    case book1_title:
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Kind: " + book1_kind);
        break;
    case book2_title:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Kind: " + book2_kind);
        break;
    case book3_title:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Kind: " + book3_kind);
        break;
    case book4_title:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Kind: " + book4_kind);
        break;
    case book5_title:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Kind: " + book5_kind);
        break;

};

switch(program.author)
{
    case book1_author:
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Kind: " + book1_kind);
        break;
    case book2_author:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Kind: " + book2_kind);
        break;
    case book3_author:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Kind: " + book3_kind);
        break;
    case book4_author:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Kind: " + book4_kind);
        break;
    case book5_author:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Kind: " + book5_kind);
        break;

};

switch(program.price)
{
    case book1_price:
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Kind: " + book1_kind);
        break;
    case book2_price:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Kind: " + book2_kind);
        break;
    case book3_price:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Kind: " + book3_kind);
        break;
    case book4_price:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Kind: " + book4_kind);
        break;
    case book5_price:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Kind: " + book5_kind);
        break;

};

switch(program.kind)
{
    case book1_kind:
        console.log("Title: " + book1_title);
        console.log("Author: " + book1_author);
        console.log("Price: " + book1_price);
        console.log("Kind: " + book1_kind);
        console.log (" ");
    case book2_kind:
        console.log("Title: " + book2_title);
        console.log("Author: " + book2_author);
        console.log("Price: " + book2_price);
        console.log("Kind: " + book2_kind);
        console.log (" ");
    case book3_kind:
        console.log("Title: " + book3_title);
        console.log("Author: " + book3_author);
        console.log("Price: " + book3_price);
        console.log("Kind: " + book3_kind);
        console.log (" ");
    case book4_kind:
        console.log("Title: " + book4_title);
        console.log("Author: " + book4_author);
        console.log("Price: " + book4_price);
        console.log("Kind: " + book4_kind);
        console.log (" ");
    case book5_kind:
        console.log("Title: " + book5_title);
        console.log("Author: " + book5_author);
        console.log("Price: " + book5_price);
        console.log("Kind: " + book5_kind);
        break;
    default:
        console.log('Once Upon A Time I dont know how to get rid of this...');
        break;
}