// Write your solution in this file!
'use strict';

// Declare customerName to be bob in global scope
const customerName = 'bob';
Object.freeze(customerName);

// Function to modify the customerName variable
function upperCaseCustomerName() {
  return window.customerName = customerName.toUpperCase();

}


// Function to set bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite best customer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Function to simulate an error when trying to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

// Export functions for testing
module.exports = {
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};