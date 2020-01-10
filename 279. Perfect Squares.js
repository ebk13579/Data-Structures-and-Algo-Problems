// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

//smells like a knapsack problem where I create the array of squares
// But: I can choose the same element more than once. 
// knapsack Iterative (O(A)) space
var AnumSquares = function(n) {
    let A=[]
    let i=1


    // i create my wanted squares
    while(i*i<=n)A.push(i*(i++))
    //from which Imma make a choice

    let possSums=Array(n+1).fill(Infinity) //possSums[i] is the minimum numbers of perfect squares(items) needed to reach the sum=i 

    //base case
    possSums[0]=0 //to reach sum=0 i need 0 items
    
    for (let j= 0; j < A.length; j++) {
     
        //notice how it doesnt work for this
        // for (let i = n; i >=0; i--) {
        //     if(i-A[j]>=0)possSums[i]=Math.min(possSums[i],1+possSums[i-A[j]])            
        // }

        for (let i = A[j]; i <=n; i++) {
            possSums[i]=Math.min(possSums[i], 1+possSums[i-A[j]])  
            
        }

    }        
  
    // for (const ele of A) {
    //     for (let i = ele; i <=n; i++) {
    //         possSums[i]=Math.min(possSums[i],possSums[i-ele]+1)         
    //     }
    // }
    // return possSums[n]==Infinity?-1:possSums[n]
    console.log(possSums)

    return possSums[n]==Infinity?-1:possSums[n]
};



//dp  recursion +memo
var numSquares = function(n) {
    let A=[]
    let i=1


    // i create my wanted squares
    while(i*i<=n)A.push(i*(i++))
    //from which Imma make a choice

    let possSums={} //possSums[i] is the minimum numbers of perfect squares(items) needed to reach the sum=i 



    // recursion(sum) returns the min number of elements needed to reach sum
    let recursion=(sum)=>{
        if(sum<0)return Infinity
        if(sum==0){
            //the base case : 0 elements needed to reach sum 0
            return 0
        }
        //utilizing the memo to avoid excess computations
        if(possSums[sum]!==undefined)return possSums[sum]

    
        for (let item of A) {
            // the known formula
            possSums[sum]=Math.min(possSums[sum]!==undefined?possSums[sum]:Infinity,recursion(sum-item)+1)
        }
        console.log(possSums)
        return possSums[sum]
    }

    return recursion(n)
};

// just recursion? and faster
var numSquares = function(n) {
    const squares = [];
    let count = n;
    for(let i = n; i >= 1; i--){
        if(Number.isInteger(Math.sqrt(i))){
            squares.push(i)
        }
    }

    var helper = function(n, recs = 0, index = 0){
        if(n === 0){
            count = Math.min(count, recs);
            return;
        }
        if(Number.isInteger(Math.sqrt(n))){
            count = Math.min(count, recs+1);
            return;
        }
        for (const index in squares) {
            if(squares[index]<=n)helper(n-squares[index],recs+1,index+1)
        }

    }

    helper(n);
    return count;
};


// static dp? The same as the above dp+memo
var numSquares = function(n) {
    const squares = [];
    for(let i = n; i >= 1; i--){
        if(Number.isInteger(Math.sqrt(i))){
            squares.push(i)
        }
    }
    let countPS=[0]
    

    //essentially runs for n times( cos each time i m adding exactly one element)
    // so its a funny way of describing every possible sum up to n, same with my previous solution really.
    while (countPS.length<=n) {
        let length=countPS.length // this also represents every possible sum to n
        let count=Infinity
        for (let i = 1; i*i <=length; i++) {
            count=Math.min(count,countPS[length-i*i]+1)
        }

        countPS.push(count)
    }
    console.log(countPS)
    return countPS[n];
};


console.log(AnumSquares(12))