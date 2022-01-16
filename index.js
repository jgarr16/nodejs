var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for a rectangle with l = "+l+" and b = "+b+" lengths.");

    if (l<=0 || b<=0){
        console.log("The dimensions must be greater than zero");
    } else {
        console.log('The area is '+rect.area(l,b)+'.');
        console.log('The perimeter is '+rect.perimeter(l,b)+'.');
    }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);