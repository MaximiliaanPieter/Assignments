// Hillary.js is a script that generates Hillary's answers on various difficult political issues in the USA.
 
 /*
  file:   server.js
  desc:   Script that configures a HTTP server that listens to incoming client connections.
          Clients can send questions or short remarks to the server which then returns an answer.
          This assignment is a continuation of the last one where I created a sort of Hillary Clinton bot.
          Why wasting a great idea, let's continue on it! Let's make America great aga..! Oh no, wait. 
  author: R.L. Gandolahage
  date:   20/11/16
*/

// import express ()
var express = require('express');		// npm install --save express
var app = express();

//import chance
var chance = require('chance').Chance(); //npm install --save chance

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

//Topics you can ask Hillabot, and normal questions and remarks such as seen in pat 1/2/9
var pattern_1 = ['Hello', 'Hoi', 'Hallo', 'Hi', 'Âllo', 'good day', 'good evening', 'good morning', 'good afternoon'];

var pattern_2 = ['how are you?', 'how do you feel?', 'are you sick?', "What's up?",'How is it going?', 'How do you do?'];

var pattern_3 = ['immigrants', 'immigrant', 'migrant', 'foreigners', 'foreigner', 'refugees', 'refugee', 'Syrians', 'luck seekers'];

var pattern_4 = ['muslim', 'muslims', 'ISIS', 'Islamic State', 'sharia', 'Arabs', 'terrorist', 'terrorism', 'terrorists', 'extremists', 
                 'Islam'];

var pattern_5 = ['economic recessions', 'recession', 'inflation', 'stock market', 'debt', 'debts', 'economy', 'Wall street', 'bank',
                 'banks', 'bankers', 'brokers', 'finance', 'depression', 'poverty'];

var pattern_6 = ['Mexican', 'Mexicans', 'Mexico', 'Wall', 'Latin American', 'Latin Americans', "Latino's", 'border', 'borders'];

var pattern_7 = ["LGBT's", 'woman', 'women', 'women rights', 'the poor', 'lower class', 'minority', 'minorities', 'black people', 
                 'blacks', 'African American', 'African Americans'];

var pattern_8 = ['Donald', 'Trump', 'republican', 'republicans', 'conservative', 'conservatives', 'right wing'];

var pattern_9 = ['bye', 'goodbye', 'thanks', 'thank you', 'see you later', 'au revoir'];

var pattern_10 = ['no', 'yes', 'maybe', 'I guess'];


//Function that looks for matches in the arrays above
function matches(msg, array_of_patterns) {
  
  var msg_lower = msg.toLowerCase();                     //makes everything lowercase, doesn't matter if you type uppercase
  for(var i = 0; i < array_of_patterns.length; i++) {
    var pattern_lower = array_of_patterns[i].toLowerCase();
    if(msg_lower.search(pattern_lower) > -1) {           //searches for matches in the patterns as listed above
u      return true;
    }
  }
  return false;
}	

//Word library
//General words for every answer

const aanhef = ['Listen', 'Well, I think', 'The way I see it', 'Well,', 'Now,', 'Good question, I think', 'Such an original question,',
o                 "Yeah, well, let's skip this que... just kidding,", 'Hmm.. Let me think. Yes,'];

const ow = [' we', ' all Americans', ' we as a country', ' all of us', ' we, the sane people of this country,', ' me and my future government',
            ' all voters'];

const ww = [' have to', ' need to', ' got to', ' have got to', ' must', ' have no other option but to',  ' are obliged to', ' are forced to', 
            ' only have to', ' just have to'];

const wwpos = [' accept', ' welcome', ' embrace', ' help', ' comfort', ' entertain', ' adore', ' assist', ' aid', ' support', ' admire', ' care for', 
               ' strengthen'];
Y
const wwneg = [' solve', ' end', ' finish', 'seperate', ' register', ' cast out', ' delete', ' stop', ' secure', ' neglect', ' refuse'];

const wwposlijd = [' accepted', ' welcomed', ' embraced', ' helped', ' comforted', ' entertained',  ' adored', ' supported', ' admired', ' cared for'];

const wwneglijd = [' ended', ' finished', ' seperated', ' registered', ' casted out', ' deleted', ' secured', ' neglected', ' refused'];

const AV = [' all', ' these', ' those', ' our', ' the', ' the countries', ' some'];

const AVh = [' All', ' These', ' Those', ' Our', ' The', ' The countries', ' Some'];

const bijvnwpos = [' nice', ' great', ' lovely', ' immense', ' beautiful', ' lovable', ' honest', ' highly valued', ' respectable', ' grand', ' trustworthy', 
                   ' reliable', ' safe'];

const bijvnwneg = [' emerging', ' problematic', ' dangerous', ' scary', ' untrustworthy', ' unsafe', ' unbelievable', ' unreliable', ' misleading', ' sickning',
                   ' disgracefull', ' uprising', ' bitter', ' silly', ' worthless'];

const bijw = [' really', ' absolutely', ' finaly', ' definitely', ' positively', ' truly', ' surely', ' unquestionably'];

const acc = [' by you', ' by me', ' by us', ' by all voters', ' by all Americans', ' by good people', ' by our armed forces', ' by everyone'];

const aanvul = [' in order to make America great again', ' if we want to survive', ' in our country', ' with a lot of talking', ' in the oval office', ' in America',                ' in the United States', ' if we want the world to like us', ' before the sun comes up', ' with your help', ' at the White House', ' in this amazing day and age'];

const aanvul1 = ['Does that answer you question?', 'Please agree?', 'Right?', 'If you disagree, let us talk about it.', "That's what I think.",
                 'That is the way the cookie crumbles.', 'Satisfied?', 'Do you want to know anything else?', 
                 "Have I answered all your questions in a polite and satisfactory way?", "Did I accurately and politely respond to your concerns? I'm asking for a better voter service in the future."];

const zlfstnw_antw3 = [' immigrants', ' migrants', ' foreigners', ' refugees', ' luck seekers'];

const zlfstnw_antw4 = [' muslim extremists', ' ISIS rebels', ' rebels', ' Islamic State threats', ' Arabic people', ' terrorists', ' religious extremists', ' Syrians',
                       ' Islam extremists'];

const zlfstnw_antw5 = [' economic recessions', ' recessions', ' stock market problems', ' debts', ' inflations', ' impoverishments', ' selfish banks', ' selfish bankers',
                       ' reckless brokers', ' finance problems'];

const zlfstnw_antw6 = [' Mexicans', ' Mexican people', ' Latin Americans', ' Mexican workers', ' Latin American guest workers'];

const zlfstnw_antw7 = [" LGBT's", ' women rights', ' women', ' poor people', ' lower class people', ' minorities', ' black fellow Americans', ' African Americans', ' black people'];

const zlfstnw_antw8 = [' republicans', ' Trump fans', " Donaldinho's", ' conservatives', ' right wing politicians', ' racists', ' homophobes', ' sexists'];

const default_antw = ['Excuse me, answering this is very bad for my health. Next question please?', '*HATCHEE* Sorry. Bhat bhas it you bhere askin?', 'Wait, wait, here comes a sneeeeeeeCHÚ! Oh gosh, sorry about that.',
                      "*Ghu-Uche* No please, don't mind me coughing, just ask your next question.", 'Yes, that is indeed a very good point you made there. Let me expla... BILL, WHO THE F*CK IS THAT GIRL UNDER YOUR DESK.. ..THIS TIME?!',
                       'Oeff, that is a difficult question. By the way, did you know you have beautiful eyes?', 'Gosh, look at the weather. Is this normal in your country?', 'Oh look, a butterfly!', 
                       'Before I answer, I need to advise you that this chat may be recorded to help with better voter service in the future.'];


//Creating the functions that compute the randomness of the words in the answer sentences
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


//Function in order to create a greeting linked to the time.
 function Dagdeel(time) {
    var time = new Date().getHours();
      if (time < 6) {
        return "good night. ";
      } else if
        (time < 12 ) {
          return "good morning. ";
        } else if 
          (time < 18) {
            return "good afternoon. ";
          } else { 
          return "good evening. ";
        }
      }


// You uploaded a version with switches, but we already made the if-else statements. It works fine. (Maybe even easier when recycling a lot of words, like this script is doing.)

function answer(msg) {
  if(matches(msg, pattern_1)) {
    return "Well, yes " + Dagdeel() + "Please ask me a question before I get sick.";

      } else if (matches(msg, pattern_3)) {
          return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwpos) + maybe(AV) + maybe(bijvnwpos) + choice(zlfstnw_antw3) + maybe(aanvul) + '. ' + maybe(aanvul1)

        } else if (matches(msg, pattern_4)) {
            return choice(AVh) + choice(bijvnwneg) + choice(zlfstnw_antw4) + maybe(bijw) + choice(ww) + ' be' + choice(wwneglijd) + maybe(acc) + maybe(aanvul) + '. ' + maybe(aanvul1)
        
          } else if (matches(msg, pattern_5)) {
              return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwneg) + maybe(AV) + maybe(bijvnwneg) + choice(zlfstnw_antw5) + maybe(aanvul) + '. ' + maybe(aanvul1)

            } else if (matches(msg, pattern_6)) {
                return choice(AVh) + maybe(bijvnwpos) + choice(zlfstnw_antw6) + maybe(bijw) + choice(ww) + ' be' + choice(wwposlijd) + maybe(acc) + '. There will be no wall' + maybe(aanvul) + '! '

              } else if (matches(msg, pattern_7)) {
                  return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwpos) + maybe(AV) + maybe(bijvnwpos) + choice(zlfstnw_antw7) + maybe(aanvul) + '. ' + maybe(aanvul1)

                } else if (matches(msg, pattern_8)) {
                    return 'Oh gosh, yes,' + choice(zlfstnw_antw8) + ". A sickning group indeed. But o well, let's" + maybe(bijw) + choice(wwpos) + ' those' + maybe(bijvnwneg) + choice(zlfstnw_antw8) + '. That way we will at least end up in heaven..'
                
                  } else if (matches(msg, pattern_2)) {
                      return "I'm getting sick very easily lately, but I feel well enough. Thanks."
                  //Has to be somewhere close to the end, otherwise it'll respond to questions such as HOW DO YOU FEEL about immigrants?

                    } else if (matches(msg, pattern_9)) {
                        return "This was it? Good. I'll get back to bed now. If you need me, use the button below to check where I am. Goodbye!"

                      } else if (matches(msg, pattern_10)) {
                          return "I really admire your courage to say what you think. I'll use your opinion to find a way that both of us like. Thank you very much!"

    } else {
        return choice(default_antw);
  }
}


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log("We are now live with Hillary");
  //io.emit("We are now live with Hillary");

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('message from human', function(msg) {

  	console.log('U: ' + msg);

    var response = answer(msg);

  	io.emit('Hillabot:', response);

  });

  socket.on('disconnect', function() {

  	console.log("See Hillabot Beta© for Hillary's official answers.");
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('Reaching Hillary on port: ' + 8088 + " (But don't get to close, she's a little sick)");
});

