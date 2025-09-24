const ages =[25,31,42,77];

let myArray = ages.map(
    (element)=>{
        if(element > 70){
            console.log(element*2);
        }else{
            console.log(element);
        }
    }
)

