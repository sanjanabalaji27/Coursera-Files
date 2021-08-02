/* var message = "in global";
console.log("global : message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a : message = " + message);
	b();
}
function b (){
	console.log("b : message = " + message);
}
a();

var x;
console.log(x);

if(x == undefined) {
	console.log("x is undefined");
}

x = 5;
if(x == undefined) {
	console.log("x is undefined");
}
else
{
	console.log("x is defined");
}
var string = "Hello! "
string += "This is a string";
console.log(string + "!");

console.log((5+4)/3);
console.log(undefined/5);

var w = 4, y = 4;
if(w == y){
console.log("w =4 is equal to y=4");
}

w = "4";
if (w == y){
console.log("w ='4' is equal to y=4");
}

if(w === y){
	console.log("Strict : w ='4' is equal to y=4");
}
else{
	console.log("Strict : w ='4' is not equal to y=4");
}

if ( false || null || undefined || "" || 0 || NaN){
	console.log("This line wont get executed");
}
else
{
	console.log ("All false");
}

if (true && "hello" && 1 && -1 && "false")
{
	console.log("All true");
}

var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + i;
}
console.log("sum of 0 through 9 is : " + sum);
*/

/*
function orderChickenWith (sideDish){
	
	if (sideDish == undefined){
		sideDish = "whatever";
	}
	
	sideDish = sideDish || "whatever!";
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();


var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.faveColor = "Blue";

console.log(company);
console.log("The company's CEO name is "  + company.ceo.firstName);
console.log(company["name"]);
company.$stock = 110;
company["Stock of company"] = 120;

console.log(company["stock of company"]);


// Better way: Object literal
 
var Facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"

	},
	$Stock : 110
};

console.log(Facebook.ceo.firstName);

//Function

function multiply(x, y) {
		return x * y;
}
multiply.version = "v.1.0.0"
console.log(multiply(5, 3));
console.log(multiply.toString());
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier){
		var myFunc = function (x) {
		return multiplier * x;
};
		return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));		

//Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);


//Function Constructors

function test() {
	console.log("Hello Coursera!");
	console.log(this);
	this.myName = "Sanjana";
}
test();

function Circle(radius){
console.log(this);
this.radius = radius;
//this.getArea = function (){
//		return Math.PI * Math.pow(this.radius, 2);
//	};
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle);
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


//Object Literal and "this"

var literalCircle = {
	radius: 10,
	
	getArea: function() {
		var self = this;
		console.log(this);
		var increaseRadius = function() {
			self.radius = 20;
		};
		increaseRadius();

		return Math.PI * Math.pow(self.radius, 2);
	}
}

console.log(literalCircle.getArea());
*/

//Arrays

var array = new Array();
