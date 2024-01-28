let raceNumber = Math.floor(Math.random() * 1000);
const early=true
const age=16
if(age>=18 && early){
  raceNumber +=1000
  console.log('The race will start at 9:30 am for race number', raceNumber)
}else if (age >=18 && !early){
  raceNumber +=1000
  console.log('The race will start at 11:00 am for race number', raceNumber)
}else if (age < 18 ){
  raceNumber +=1000
  console.log('Youth registrants run at 12:30 pm (regardless of registration) for race number', raceNumber)
}
