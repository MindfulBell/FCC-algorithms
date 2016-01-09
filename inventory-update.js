//Inventory Update

// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. 
// Update current inventory item quantity, and if an item cannot be found, 
// add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
  //check each curInv value against the newInv, find matches, update values, then remove from newInv list (checking them off kind of)
    arr1.forEach(function(val, ind){
            var curName = val[1];
            arr2.forEach(function(val2, ind2, array2){
                var newName = val2[1];
                if (curName === newName) {
                    val[0] += val2[0];
                    array2.splice(ind2, 1); //removing them from newInv
                }
            });
    });    
  //add remaining items we don't already have in curInv and then sort...
    return (arr1.concat(arr2)).sort(function(a,b) {
        if (a[1] > b[1]) {
            return 1;
        }
    });
}

var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);