//normal
function monitorCount(rows,columns){
    return rows*columns;

  }
  const numOfMonitors=monitorCount(5,4);
  console.log(numOfMonitors);
//helper functions
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns){
    return monitorCount(rows,columns)*200;
  }
  const totalCost=costOfMonitors(5,4);
  console.log(totalCost)

//function expression
const plantNeedsWaters=function(day){
    if(day==='Wednesday'){
      return true;
    }else{
      return false;
    }
  }

  console.log(plantNeedsWaters('Tuesday'));
  //arrow function
  const plantNeedsWater = (day)=> {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  //Concise Body Arrow Functions
  const squareNums = (num) => {
    return num * num;
  };
//refactor
const squareNum = num => num * num;

