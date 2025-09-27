// Create an array of ages
const ages =[25,31,42,77];


// Use the map() method to loop through each element in the array
let myArray = ages.map(
    (element)=>{
        // If the element is greater than 70, print double the value
        if(element > 70){
            console.log(element*2);
        }else{
            // Otherwise, just print the element
            console.log(element);
        }
    }
)

