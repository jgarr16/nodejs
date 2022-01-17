module.exports = (x,y,callback) => {
    if (x<=0 || y<=0){
        setTimeout(() => 
            callback(new Error("Dimensions must be greater than zero: "
                +x+" and "+y+"."),
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

