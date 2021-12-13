/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    nums = []
    for(var i = 1; i<=n; i++){
        if (i%15==0) {
           nums.push("FizzBuzz")
        
        }
    else if (i%3==0)
        {
            nums.push("Fizz")
            
        }
    else if (i%5==0)
        {
            nums.push("Buzz")
        }
    else 
    {
        nums.push(i.toString())
    }
    } 
    return nums
};
