// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

var findMinDifference = function(A) {
    A=A.map(d=>[Number(d[0]+d[1]),Number(d[3]+d[4])])
    console.log(A)
    function calc(timeA,timeB){
        if(timeA[0]<timeB[0]){
            let switchy=timeA
            timeA=timeB
            timeB=switchy
        }

        if(timeA[0]==timeB[0])
        {
            return Math.abs(timeA[1]-timeB[1])
        }
        else{
                console.log(`${timeA} ${timeB}`,
                [timeB[0]*60+timeB[1]
                +(24-timeA[0])*60-timeA[1]
                ,
            (timeA[0]-timeB[0])*60+
            ((timeA[1]>=timeB[1])?(timeA[1]-timeB[1]):(timeB[1]-timeA[1]))]
            )
                return Math.min(
                    
                    timeB[0]*60+timeB[1]
                    +(24-timeA[0])*60-timeA[1]
                    ,
                (timeA[0]-timeB[0])*60+
               timeA[1]-timeB[1])
                    
                
                
            
       
        }
    }   
    var result=Infinity

    for (let i = 0; i < A.length; i++) {
        for (let j = i+1; j < A.length; j++) {
            result=Math.min(result,calc(A[i],A[j]))   
            console.log(i,j,calc(A[i],A[j]))         
        }        
    }

    return result
};



var findMinDifference=(A)=>{
    A=A.map(d=>[Number(d[0]+d[1]),Number(d[3]+d[4])])
    .sort((a,b)=>(a[0]==b[0]?(a[1]-b[1]):(a[0]-b[0]) ))

    var minuteDifference=(ta,tb)=>{
        return (tb[0]-ta[0])*60+tb[1]-ta[1]

    }
    console.log(A)
    var result=Infinity
    for (let i = 0; i < A.length-1; i++) {
        result=Math.min(result,minuteDifference(A[i],A[i+1]))
        console.log(result)        
    }

    //  [timeB[0]*60+timeB[1]
    //+(24-timeA[0])*60-timeA[1]
   return Math.min(result,A[0][0]*60+A[0][1]+(24-A[A.length-1][0])*60-A[A.length-1][1]
   )


}

var findMinDifference=(A)=>{
    var dict=Array(1440).fill(false)
    var result=Infinity
    for (let i = 0; i < A.length; i++) {
        var []=A[i]// "23:49"
       if( dict[
            (A[i][0]+A[i][1])*60
            +(A[i][3]+A[i][4])*1
            ]    
            ){
                return 0
            } 

        else{
            dict[
                (A[i][0]+A[i][1])*60
                +(A[i][3]+A[i][4])*1
                ] =true 
        } 
    }

    var firstTrueInd=0
    var temp=1// distance between the array elements (1 because minutes)
    let i=0
    while(!dict[i]){
        i++
    }
    firstTrueInd=i
    i++
    for (i; i < dict.length; i++) {
        if(dict[i]){
            result=Math.min(temp,result)
            temp=1
            continue;
        }
        temp++
    }
    
    console.log(result,firstTrueInd)

    return Math.min(result, temp+firstTrueInd)
}

console.log(findMinDifference(
  // ["23:59","00:00"]
  //["00:00","23:59","00:00"]

  ["12:12","00:13"]
))

