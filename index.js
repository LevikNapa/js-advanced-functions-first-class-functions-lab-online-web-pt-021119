// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
   let firstTwo = []
   firstTwo.push(drivers[0]);
   firstTwo.push(drivers[1]);
   return firstTwo;
}

const returnLastTwoDrivers = function (drivers) {
   let lastTwo = []
   lastTwo.push(drivers[drivers.length-2]);
   lastTwo.push(drivers[drivers.length-1]);
   return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier (num) {
  return function createFareMultiplier (fare) {
    return num * fare;
  }
}

function fareDoubler (fare) {
  return  createFareMultiplier(2)(fare);
};

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers (array, func) {
  return func(array);
};
