class Calculator{
    constructor(){
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045
    }

    //Getter
    get pi(){
        return `PI (${this.PI})`
    }


    get e(){
        return `Eulner's number (${this.E})`
    }

    //METHODS
    //return height is --- on ratio x:y
    ratio(x,y,width){
        let widthRatio=width/x;
        let heightRatio=widthRatio*y;
        return `height is ${heightRatio} on ratio ${x}:${y}`
    } 

    // return percentage of x in y.
    percentage(x,y) {
        return `${(x/y)*100}%`
    }

    // Returns the sum of x added to y.
    add(x, y){
        return x+y
    } 

    // Returns the differente of y subtracted to x.
    subtract(x, y){
        return y-x
    } 

    // Returns the product of x multiplied by y.
    multiply(x, y) {
        return x*y
    }

    // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
    divide(x, y) {
        if(y===0){
            return "Error: Divisor can't be 0"
        }else{
            return x/y
        }

    }

    //Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
    modulation(x, y){
        if(y===0){
            return "Error: Divisor can't be 0"
        }else{
            return (x%y)
        }
    }  

    // Returns the power of x elevated to y.
    elevate(x, y) {
        return Math.pow(x,y)
    }

    // Returns the square root of x.
    sqrt(x) {
        return Math.sqrt(x)
    }

}


const calculator= new Calculator()
console.log(calculator.ratio(3,4,600))
