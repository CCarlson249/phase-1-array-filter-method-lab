// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(drivers){
        return drivers.toLowerCase().startsWith(letters.toLowerCase());
    })
}



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }