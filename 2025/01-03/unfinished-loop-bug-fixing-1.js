Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//before
function createArray(number){
    var newArray = [];
    //no increment
    for(var counter = 1; counter <= number){
      newArray.push(counter);
    }
    
    return newArray;
  }

  //after
  function createArray(number){
    var newArray = [];
    //added the increment
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }