module.exports = (x,y,callback) => {
    if (x<=0 || y<=0){
        if (x<=0 && y<=0){ 
            var change = "length and breadth variables";
        } else if (x<=0){ 
            var change = "length variable";
        } else if (y<=0){
            var change = "breadth variable";
        } else {
            var change = "";
        }
        setTimeout(() => 
            callback(new Error("Dimensions must be > 0, but you used: "
                +x+" and "+y+". Change the "+change+" and run it again."),
            null), 
            2000);  
    } else {
        setTimeout(() => 
            callback(null,
            {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }), 
            2000);        
    }

}

