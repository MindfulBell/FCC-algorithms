// DESCRIPTION: Bonfire: Friendly Date Ranges 

// Implement a way of converting two dates into a more friendly date range that could be presented to a user.

// It must not show any redundant information in the date range.

// For example, if the year and month are the same then only the day range should be displayed.

// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

// Input date is formatted as YYYY-MM-DD

function friendly(str) {
    //create user friendly months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date1 = str[0].split('-');
    var date2 = str[1].split('-');
    var year1 = date1[0];
    var year2 = date2[0];
    var month1 = months[parseInt(date1[1])-1];
    var month2 = months[parseInt(date2[1])-1];
    var day1 = fixDay(date1[2]);
    var day2 = fixDay(date2[2]);
    //normalize the day string
    function fixDay(str) {
        var num = parseInt(str);
        var ending = '';
        switch (num) {
            case 1:
            case 21:
            case 31:
                ending = 'st';
                break;
            case 2:
            case 22:
                ending = 'nd';
                break;
            case 3: 
                ending = 'rd';
                break;
            default: 
                ending = 'th';
  }
  return num + ending;
}
  
  var range = [];
  if (year2 === year1 && month1 === month2 && day1===day2) { //exact same date, just print it
      range.push(month1 + ' ' + day1 + ', ' + year1);
  }
  else if (year2-year1 >= 2 || (year2-year1 >=1 && month1 === month2)) { //more than 2 year diff, or 1 year and months are same
      range.push(month1 + ' ' + day1 + ', ' + year1);
      range.push(month2 + ' ' + day2 + ', ' + year2);
  }
  else if (year1 === year2 || (year2 - year1) === 1) { //same years, or exactly one year apart and months are/are not equal
      range.push(month1 + ' ' + day1);
      if (month1 === month2) {
          range.push(day2);
      }
      else {
          range.push(month2 + ' ' + day2);
      }
  }
  
  return range;
}

friendly(["2017-12-01", "2017-12-01"]);