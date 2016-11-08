//Trying to make a Boekhandelcatalog

var program = require('commander');
 
program
  .version('Assignment 1.0')
  .option('-t, --title [titel]', 'Title', /^(Shadows in the Field|Discovering Statistics Using R|Epsilon uitgaven Muzikale Computers|Eenvoudige Muziekleer|A History of Western Music)$/i)
  .option('-a, --author [auteur]', 'Author', /^(Barz, Gregory F - Cooley, Timothy J|Field, Andy|Honingh, Aline K|Schouten, Hennie|Burkholder, J Peter)$/i)
  .option('-p, --price [prijs]', 'Price', /^(39,95|69,95|17|14,95|56,50)$/i)
  .option('-k, --kind [soort]', 'Kind', /^(Paperback)$/i)
  .parse(process.argv);

switch(program.title)
{
    case('Shadows in the Field'):
        console.log('Title: Shadows in the Field');
        console.log('Author: Barz, Gregory F - Cooley, Timothy J');
        console.log('Price: 39,95');
        console.log('Kind: Paperback');
        break;
    case('Discovering Statistics Using R'):
        console.log('Title: Dicovering Statistics Using R');
        console.log('Author: Field, Andy');
        console.log('Price: 69,95');
        console.log('Kind: Paperback');
        break;
    case('Epsilon Uitgaven Muzikale Computers'):
        console.log('Title: Epsilon Uitgaven Muzikale Computers');
        console.log('Author: Honingh, Aline K.');
        console.log('Price: 17');
        console.log('Kind: Paperback');
        break;
    case('Eenvoudige Muziekleer'):
        console.log('Title: Eenvoudige Muziekleer');
        console.log('Author: Schouten, Hennie');
        console.log('Price: 14,95');
        console.log('Kind: Paperback');
        break;
    case('A History of Western Music'):
        console.log('Title: A History of Western Music');
        console.log('Author: Burkholder, J Peter');
        console.log('Price: 56,50');
        console.log('Kind: Paperback');
        break;

}
    
switch(program.author)
{
	case('Barz, Gregory F - Cooley, Timothy J'):
		console.log('Title: Shadows in the Field');
        console.log('Author: Barz, Gregory F - Cooley, Timothy J');
        console.log('Price: 39,95');
        console.log('Kind: Paperback');
        break;
    case('Field, Andy'):
        console.log('Title: Dicovering Statistics Using R');
        console.log('Author: Field, Andy');
        console.log('Price: 69,95');
        console.log('Kind: Paperback');
        break;
    case('Honingh, Aline K'):
        console.log('Title: Epsilon Uitgaven Muzikale Computers');
        console.log('Author: Honingh, Aline K.');
        console.log('Price: 17');
        console.log('Kind: Paperback');
        break;
    case('Schouten, Hennie'):
        console.log('Title: Eenvoudige Muziekleer');
        console.log('Author: Schouten, Hennie');
        console.log('Price: 14,95');
        console.log('Kind: Paperback');
        break;
    case('Burkholder, J Peter'):
        console.log('Title: A History of Western Music');
        console.log('Author: Burkholder, J Peter');
        console.log('Price: 56,50');
        console.log('Kind: Paperback');
        break;

}

switch(program.price)
{
	case('39,95'):
		console.log('Title: Shadows in the Field');
        console.log('Author: Barz, Gregory F - Cooley, Timothy J');
        console.log('Price: 39,95');
        console.log('Kind: Paperback');
        break;
    case('69,95'):
        console.log('Title: Dicovering Statistics Using R');
        console.log('Author: Field, Andy');
        console.log('Price: 69,95');
        console.log('Kind: Paperback');
        break;
    case('17'):
        console.log('Title: Epsilon Uitgaven Muzikale Computers');
        console.log('Author: Honingh, Aline K.');
        console.log('Price: 17'); 
        console.log('Kind: Paperback');
        break;
    case('14,95'):
        console.log('Title: Eenvoudige Muziekleer');
        console.log('Author: Schouten, Hennie');
        console.log('Price: 14,95');
        console.log('Kind: Paperback');
        break;
    case('56,50'):
        console.log('Title: A History of Western Music');
        console.log('Author: Burkholder, J Peter');
        console.log('Price: 56,50');
        console.log('Kind: Paperback');
        break;
   
}

switch(program.kind)
{
	case('Paperback'):
		console.log('Title: Shadows in the Field');
        console.log('Author: Barz, Gregory F - Cooley, Timothy J');
        console.log('Price: 39,95');
        console.log('Kind: Paperback');
        console.log('&');
        console.log('Title: Dicovering Statistics Using R');
        console.log('Author: Field, Andy');
        console.log('Price: 69,95');
        console.log('Kind: Paperback');
        console.log('&');
        console.log('Title: Epsilon Uitgaven Muzikale Computers');
        console.log('Author: Honingh, Aline K.');
        console.log('Price: 17');
        console.log('Kind: Paperback');
        console.log('&');
        console.log('Title: Eenvoudige Muziekleer');
        console.log('Author: Schouten, Hennie');
        console.log('Price: 14,95');
        console.log('Kind: Paperback');
        console.log('&');
        console.log('Title: A History of Western Music');
        console.log('Author: Burkholder, J Peter');
        console.log('Price: 56,50');
        console.log('Kind: Paperback');
        break;
    default:
        console.log('Once Upon A Time I dont know how to get rid of this...');
        break;

}