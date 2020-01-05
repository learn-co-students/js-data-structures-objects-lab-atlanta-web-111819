// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver);
    return Object.assign(newDriver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
    delete driver[key];

    return driver
}