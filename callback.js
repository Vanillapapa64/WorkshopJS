//We'll se the demonstration of callback functions
function Double(number){
    const answer=number*2
    console.log(answer)
}
function Half(number){
    const answer= number/2
    console.log(answer)
}
//below is the main function that takes another function as input ie callback function
function Calculate(number,callback){
    callback(number)
}

Calculate(9,Half)
Calculate(9,Double)