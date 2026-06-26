var data = [10,20,true, "sagar",10, { city:"pune" }, [1,2,3]];

//slice :[20,true,"sagar"] : array.slice(startIndex,lastIndex+1)
var subArray=data.slice(1,3+1);   //var subArray=data.slice(1);  want to access all
console.log(subArray);


//indexOf :ondexOf will return first encounter element index number 
var indexNumber = data.indexOf(10);
console.log(indexNumber);

//lastIndexOf :lastIndexOf will return last encounter element index number 
var indexNumber = data.lastIndexOf(10);
console.log(indexNumber);



















console.log("-------------------------")
console.log()

//console.log(data.length);
//indexOf
var indexNumber =data.indexOf(10);
console.log(indexNumber);

//lastIndexOf
var indexNumber =data.lastindex(10);
console.log(indexNumber);