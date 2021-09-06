// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = Object.assign({}, driver );
    newDriver[key] = value;
    console.log( newDriver )
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
    delete driver[name];
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver );
    delete newDriver[key];
    return newDriver;    
}