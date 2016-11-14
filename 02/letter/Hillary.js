//Welcome. This is part of the alternative American electoral debate generator. However, this is only Hillary's half of the conversation. 
//In order to enjoy a full two-way debate, please consult Donald.js, which can be found at Randy Linskens Github directory. 
//Have a great time. 


var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');


//Hillary and Donald alternative debate generator.

const aanhef = ['Now listen', 'Well hello there', 'Hello', 'Hi', 'Dear', 'My dear', 'My', 'Âllo', 'Goodmorning', 'Good to see you', 'Tell me'];

const question1 = [' do you think you would', ' would you ever', ' are you going to', ' will you', ' could you', ' could you ever', ' will you be able to'];

const verbs1 = [' solve', ' get rid of', ' create', ' make', ' accept', ' end', ' start', ' accept', ' end',
				' finish', ' help', ' unify', ' seperate', ' incubate', ' love', ' register', ' visualise', ' cast out',
				' support', ' aid', ' delete', ' secure', ' rely on', ' defy', ' neglect', ' refuse', ' comfort', ' use', ' adore', ' admire', ' care for'];

const adjectives = [' immense', ' beautiful', ' great', ' repulsive', ' lovable', ' respectable', ' inconceivable',
					' incomprehensable', ' problematic', ' attainable', ' mystifying', ' grand', ' miniscule', ' negligible',
					' fierce', ' stupid', ' hard', ' opaque', ' exciting', ' nervewrecking', ' bitter', ' puzzling',
					' unreliable', ' untrustworthy', ' trustworthy', ' uprising', ' emerging', ' submerging', ' silly',
					' thirsty', ' unbelievable', ' dreadful', ' religous', ' twentyfive']; 
	//always maybe 

const nouns = [' mexicans workers', ' economic recessions', ' unemployment issues', ' job shortages', ' healthcare systems', ' Arabs', ' muslims', ' ISIS threats', ' Middle Eastern problems',
				' extremists', ' ethnic groups', ' segregational divides', ' discriminaters', ' racists', ' white supremacists', ' gun laws', ' abortions', ' adoptions',
				' LGBTs', ' mass shootings', ' shootings', ' Bernie Sanders supporters', ' communists', ' Russians', ' Putin followers', ' republicans', ' jurisdictions', ' school systems', 
				' education systems', ' Geneva agreements', ' Sharia followers', ' muslim laws', ' African-American people', ' immigrants', ' environnemental issues', ' stock markets', ' cults', 
				' problems', ' E-mails', ' debts', ' walls', ' refugees', ' conspiracy theorists', ' media', ' taxes', ' wages', ' tax payers', ' women rights', ' women', ' TTIP opposers', ' police brutality'];

const aanspr1 = [' dear', ' lovely', ' silly', ' ignorant', ' lovable', ' intresting', ' unreliable', ' old', ' conservative', ' little', ' sweet', ' adorable'];
	//always maybe

const aanspr2 = [' republican', ' colleague', ' fool', ' dove', ' opponent', ' boy', ' grandpa', ' darling', ' sweetheart', ' rival', ' Messiah'];

const aanspr3 = [' you know what I would do to', ' you know what I think about', ' that is an intresting question about', ' I really dont know what to do about', ' I guess this is what I would do about', 
				' I think this is the best solution for the', ' the only solution to', ' youve got it al wrong about', ' there is no other option considering', ' really? Is your question actually about', 
				' just listen to', ' just look at'];

const antw1 = ['About', 'Considering', 'Talking about', 'Discussing', 'Looking at', 'Taking a stance on', 'Regarding'];

const AV = [' those', ' these', ' our', ' their', ' the', ' the countries', ' the states', ' your', ' some', ' all'];
	//always maybe

const antw2 = [' I', ' I would', ' I will', ' I am going to'];

const verst = [' politely', ' strongly', ' firmly', ' absolutely', ' faithfully'];
	//always maybe

const verbs2 = [' suggest', ' consider',  ' accept', ' deny', ' detest', ' loathe', ' refuse', ' propose', ' allege', ' suggest', ' preach', ' enjoy'];
 
const continous = [' aiding', ' forgetting', ' expanding', ' supporting', ' denying', ' deleting', ' accepting', ' caring for', ' creating', ' leaving',
				 ' attacking', ' defending', ' tickling', ' getting rid of', ' ending', ' starting', ' finishing', ' unifying', ' loving', ' deleting',
				  ' relying on', ' neglecting', ' entertaining', ' seperating', ' getting rid of', ' securing', ' finishing', ' helping', ' breaking']; 

const antw3 = [' is the answer', ' is the solution', ' is the only answer', ' is the only solution', ' is going to solve the problem', ' is going to get us rich', ' is going to create jobs', 
				' is going to solve everything', ' is going to solve it', ' would make me happy', ' is going to make you cry', ' is going to make them cry', ' will be best for us', ' is going to be best for them', 
				' is going to make earth a better place', ' will make America great again', ' till the end', ' till it is over', ' till death', ' till death do us apart', ' at home', 
				' at the White House', ' at the Oval Office', ' with Uncle Sam', ' in America', ' in Mexico', ' is going to secure the economy'];
	//always maybe



// Question/Answer variations Hillary

var question = 'Hillary';
var answer = 'Hillary';


//The option to trigger a question or an answer

program
  .version('The Hillary Q&A generator 1.0')
  .option('-q, --question [Vraag]', 'Question generation')
  .option('-a, --answer [Antwoord]', 'Answer generation')
  .parse(process.argv);


//creating the functions for the sentence generation

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index]; 
}


function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
		} else {
			return '';
	} 
} 
	

//the question generator:

 function shortvr() {
 	return choice(aanhef) + ' Donald, ';
 }

function longvr() {
 	return 'How' + choice(question1) + choice(verbs1) + maybe(adjectives) + choice(nouns) + '? ';
 }



//the answer generator:

 function shortantw() {
 	return 'Well, my' + maybe(aanspr1) + choice(aanspr2) + ',' + choice(aanspr3) + maybe(adjectives) + choice(nouns) + ': ';
 }


  function longantw() {
 	return choice(antw1) + maybe(AV) + maybe(adjectives) + choice(nouns) + ',' + 
 	choice(antw2) + maybe(verst) + choice(verbs2) + choice(continous) + maybe(AV) + maybe(adjectives) + choice(nouns) + maybe(antw3) + '. '; 
 }
//antw1 + (AV) + (adjectives) + nouns, + antw2 + (verst) + verbs2 + continous + (AV) + (adjectives) + nouns + (antw3).
//Example:	[Talking about]+[(our)]+[(great)]+[muslims], +[I]+[(firmly)]+[recommend]+[accepting]+[(their)]+[(lovable)]+[shootings]+[would make America great again].


//word-wrap shortvr
	var text1 = shortvr();


//word-wrap longvr
	var text2 = longvr();


//Word-wrap shortantw
	var text3 = shortantw();
		
	

//Word-wrap longantw	
	 var text4 = '';
 		for(var i = 0; i < 3; i++){

 			text4 += longantw();
	}	//Only necessary loop



//Start of the discussion 

switch(program.question) { 
	case question:
		console.log('\n\n');
	 	console.log(wrap(text1, {'width': 65}));
	 	console.log('\n');
	 	console.log(wrap(text2, {'width': 65}));
	 	console.log('\n\n');
	 	break;
}

switch(program.answer) {
	case answer:
		console.log('\n\n')
		console.log(wrap(text3, {'width': 65}));
		console.log('\n')
		console.log(wrap(text4, {'width': 65}));
	 	console.log('\n\n');
		break;
}
