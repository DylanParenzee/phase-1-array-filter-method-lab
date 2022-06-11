// Code your solution here


function findMatching(drivers, name){
    return drivers.filter((drivers) => drivers.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(drivers, name){
    return drivers.filter((drivers) => drivers[0] === name[0] && drivers[1] === name[1])
}

function matchName(drivers, str){
    return drivers.filter((drivers) => drivers.name === str)

}