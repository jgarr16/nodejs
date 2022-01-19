const rect = require('./rectangle');
const circle = require('./circle');

function solveRect(l,b){
    console.log("Solving for rectangle with length = "+l+" and breadth = "+b+".");

    rect(l,b,(err, rectangle) => {
        if (err) {
            console.log("ERROR: ",err.message);
        } else {
            console.log("The area of the rectangle with the dimensions l = "
                +l+" and b = "+b+" is "+rectangle.area()+".");
            console.log("The perimeter of the rectangle with the dimensions l = "
                +l+" and b = "+b+" is "+rectangle.perimeter()+".");
        }
    });
}

function solveCirc(a){
    console.log(`The area of a circle with a radius of 4 is ${circle.area(4)}.`);
    console.log(`The circumference of a circle with a radius of 4 is ${circle.circumference(4)}.`);
}

// solveRect(2,4);
// solveRect(3,5);
solveRect(-5,3);
// solveRect(4,-3);
// solveCirc();
// console.log("This statement sits after the call to the rectangle module.");