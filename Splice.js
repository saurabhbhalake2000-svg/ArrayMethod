var data =[10,20,30,"hello",true,false,54];
console.log(data);
console.log();

//splice :removing + adding +updating

//array.splice(startIndex,count)
//removing
//data.splice(4,1);
//console.log(data);

//array.splice(indexNumber,0,new-element)
//data.splice(1,1,"Sagar");  //remove & insert
data.splice(1,0,"Sagar");   //0:insert & existing element shift
console.log(data);