//function square(number){
//    return number*number;
//}

//let square = function(number){
//    return number*number;
//}

//let square = (number) => number*number;

//function add(a,b){
//    return a+b;
//}

let add = function(a,b){
    return a+b;
}

let isDrinkingAge = (age) => {
    if (age >= 21){
        return 'You can legally drink in the US';
    }else{
        return 'You are too young to legally drink';
    }
}

//for single arguments

let square = number => number*number;//if only one argument, no parenthesis is ok, but parenthesis is good


console.log(square(5));
console.log(add(7,6));
console.log(isDrinkingAge(63));