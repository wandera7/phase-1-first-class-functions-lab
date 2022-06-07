// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>drivers.slice(0,2);
const returnLastTwoDrivers=(drivers)=>drivers.slice(-2);
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=(fare)=>()=>fare *fare;
const  fareDoubler=(fare)=>fare*2;
const fareTripler=(fare)=>fare *3;
const selectDifferentDrivers=(array,driver)=>{
    return driver(array);
}