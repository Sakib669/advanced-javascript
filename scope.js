let extra = 15;


function sum(a,b){
    const result = a + b + extra;
    // console.log(result);
    if(result > 9){
        const mood = "ok";
        console.log(mood);
    }
    return result;
    
}

const solution = sum(6, 4);
// console.log(extra);
// console.log(solution);