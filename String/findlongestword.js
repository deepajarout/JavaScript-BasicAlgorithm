// Basic Solution

function findLongestWordBasic(str){

    var words = str.split(' '); //split() is a string function  which is used to split or you can say to cut a string into smaller sections or pieces

    var  maxLength=0;

    for(var i=0;i<words.length;i++){
      
      if(words[i].length > maxLength)
    {
      maxLength=words[i].length;
    }
    
    }
    return  maxLength;
  }
  
  
  console.log(findLongestWordBasic('hello '));//output=5
  
  console.log(findLongestWordBasic('hello MY name is DeepaJarout'));//output= 11


  //Intermediate Solution


function findLongestWordIntermediate(str){
  
    return  str.split(' ').reduce(function(x,y){ //split() is a string function  which is used to split or you can say to cut a string into smaller sections or pieces
      
    return  Math.max(x,y.length);
      
    },0);
  }
  
  
  console.log(findLongestWordIntermediate('hello '));//output=5
  
  console.log(findLongestWordIntermediate('hello MY name is DeepaJarout'));//output= 11


  //Advanced Solution


function findLongestWord(str){
  
    str = str.split(' '); // reduce() is array method Returns the accumulated result from the last call of the callback function
    
     if (str.length==1){
       return str[0].length;
     }
    
     if (str[0].length>=str[1].length){
       str.splice(1,1);    // splice() is array method return A new Array, containing the removed items (if any)
       return findLongestWord(str.join(' '));
     }
    
     if (str[0].length<=str[1].length){
     
       return findLongestWord(str.slice(1,str.length).join(' ')); // slice() is array method return  A new Array, containing the selected elements, str (1,n) = value show from 1 to n-1
     }
      
    
  }
  
  
  console.log(findLongestWord('hello '));// output = 5
  
  console.log(findLongestWord('hello MY name is DeepaJarout'));//output =  11
