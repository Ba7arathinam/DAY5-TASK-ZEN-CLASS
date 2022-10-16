// //1.fimd odd in array
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var oddnum=function(arr){
    var temp=[]
  
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            temp.push(arr[i]);
        }
    }
    return temp;
    
}
console.log(oddnum(arr))

//3.sum of all num in array

var ar=[2,3,1,4]

var sum=function(ar){
    var total=0;
    for (var i in ar){
        total += ar[i]
    }
    return total;
}
console.log(sum(ar))

// 4.find prime number in array

var arr4=[1,2,3,4,7,13,11,16,19];
var prime = [];
var Result4=function(arr4){
    for(var i=0;i<arr4.length;i++){
        var count=0;
      if(arr4[i]<1){
        break;//not a prime
      }
    for(var j=2;j<=arr4[i];j++){
      if(arr4[i]%j==0) {
          count++
      }
    }
      if(count<2){
            prime.push(arr4[i]);
      }
    }
   return prime;
}
console.log(Result4(arr4));
// f.Return median of two sorted arrays of the same size.

var m1 = [1,111,24,38,93];
var m2 = [202,76,65,501,41];
var median = function(m1,m2){
  var arr = [...m1,...m2].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var mid1 = arr[arr.length/2];
    var mid2 = arr[arr.length/2-1];
    return((mid1+mid2)/2); 
  }
  else{
    return (arr[Math.floor(arr.length/2)]);
  }
};
console.log(median(m1,m2));
// Remove duplicate from array
var arr7=[1,6,4,2,2,8];
var temp=[];
var org=function(arr7){
  for(var i=0;i<arr7.length;i++){
    var count=0;
    for(var j=0;j<arr7.length;j++){
      if(arr7[i]==arr7[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(arr7[i]);
    }
  }
  return(temp);  
};
console.log(org(arr7));

//palindrom
var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
var Result5=function(arr5){
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i]; //-->Original String(OS)
      var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
      if(OS==RS){
         palindrome.push(arr5[i]);
      }
   }
   return palindrome;
   }
   console.log(Result5(arr5));