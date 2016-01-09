//Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, 

//and cash-in-drawer (cid) as the third argument.

//cid is a 2d array listing available currency.

//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

//Otherwise, return change in coin and bills, sorted in highest to lowest order.

function drawer(price, cash, cid) {
  var change = (cash - price);
  var cidObj = {};
  var changeArray = [];
  var denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
];
  cidObj.totalPennies = 0;
  cidObj.total = 0;
  
  toObj(cid);
  console.log(change, cidObj.total);
  if (change > cidObj.total) {
      return 'Insufficient Funds';
  }
  
  else if (change === cidObj.total) {
      return 'Closed';
  }
  else {
      
      for (var i=0; i<denom.length; i++) {
          var curDenomName = denom[i].name;
          var curDenom = denom[i].val;
          var denomChange = 0;
          while (change/curDenom >= 1 && cidObj[curDenomName] > 0) {
              denomChange += curDenom;
              change -= curDenom;
              change = change.toFixed(2);
              cidObj[curDenomName] -= curDenom;
          }
          
          var changePair = [curDenomName, denomChange];
          if (denomChange) {
              changeArray.push(changePair);
              
          }
      }
      if (change > 0) { //couldn't get the correct denominations, so change left;
          return 'Insufficient Funds';
      }
  }  
  function toObj(arr){
      
    for (var i=0; i<arr.length; i++) {
      var pair = arr[i];
      var money = Number.parseFloat((pair[1]).toFixed(2));
      cidObj[pair[0]] = money;
      cidObj.total += money;
    }
  }
  return changeArray;
}
drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
