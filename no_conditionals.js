function forLoop(start, end, body, then) {
	function loop(counter) {
		body(counter);
		funcs[(counter===end)*1](counter+1);
	}	
	var funcs = [loop, then || function() {}];
	funcs[(start===end)*1](start);
}

function whileLoop(cond, body, then) {
	function loop() {
		body();
		funcs[cond()*1]();
	}	
	var funcs = [then || function() {}, loop];
	funcs[cond()*1]();
}

function ifThen(cond, trueBody, falseBody) {
	var funcs = [falseBody || function(){}, trueBody];
	funcs[cond()*1]();
}

ifThen(function() {return false;}, 
	function() {document.writeln('Condition is true.');},
	function() {document.writeln('Condition is false.');}
);

var i = 0;
whileLoop(function() { return i<10;}, function(){
	document.write(i++);
}, function() {document.writeln('');});

var numbers = [3, 5, 1, 9, 2, 4, 4, 6];

forLoop(1, numbers.length-1, function(counter) {
	forLoop(1, numbers.length-1, function(counter) {
		var first = numbers[counter-1];
		var second = numbers[counter];
		numbers[counter-1] = first*(first<=second) + second*(second<first);
		numbers[counter] = first*(first>=second) + second*(second>first);
	});
}, function() {document.writeln('sorted')});

//Print
forLoop(0, numbers.length-1, function(i){document.write(numbers[i]);}, function(){document.writeln();});

var outFizz = ['Fizz', '', '']
var outBuzz = ['Buzz', '', '', '', '']
var numbers = [''];

forLoop(0, 99, function(counter) {
	var i = counter +1;
	numbers[i] = i;
	document.write(outFizz[i%3]);
	document.write(outBuzz[i%5]); 
	document.writeln(numbers[i*(i%3!=0)*(i%5!=0)]);	
}, function() {document.writeln('Done!!!');});
