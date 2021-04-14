//Question 1

//Write a program to print only the even numbers of the array. 



let arrnum = [1, 45, 3, 47, 8, 10, 11, 13, 67, 24];

for (let i = 0; i <= arrnum.length - 1; i++) {
    if (arrnum[i] % 2 === 0) {
        console.log(arrnum[i]);
    }
}



//Question 2

//Find the maximum consecutive 1's in an array of 0's and 1's.


let arrnum = [1, 0, 0, 1, 1, 1, 0, 0];

function ones(arr){
  let count = 0;
  let tempcount = 0;
  for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] === 0){
      count = 0;
    } else {
      count++;
    }
    if(count > tempcount){
      tempcount = count
    }
  }
  return tempcount;
}
console.log(ones(arrnum));



//Question 3

//Write a js code to find the repeated number.


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const duplicateArr = (array) => {
  return array.length !== new Set(array).size;
}

console.log(duplicateArr(arr));




//Question 4

//Write a sample code to call this rest api and display the test result.


const sample = async () => {
    try {
      let response = await fetch(
        'https://example.com/api/get/1'
      );
      let json = await response.json();
      return json.example;
    } catch (error) {
       console.error(error);
    }
  };




//Question 5

//Write a code to sort the object by id.



obj.sort((a, b) => {
    return a.id - b.id;
});
obj.forEach((e) => {
    console.log(`${e.id} ${e.name}`);
});