
var a=4


console.log(parseInt('101',2))
console.log(a.toString(2))

var totalHammingDistance = function(nums) {
    var total=0
    function HammingDistance(A,B){
        var tot=0
        A=String((A^B).toString(2))

        for (let i = 0; i < A.length ; i++) {
            if(Number(A[i])==1){
                tot++
            }
        }

        return tot
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1 ; j < nums.length; j++) {
            total+=HammingDistance(nums[i],nums[j])
            
        }
    }
    return total
};