
//No Repeats Please

//Return the number of total permutations of the provided string that don't have repeated consecutive letters.

//For example, 'aab' should return 2 because it has 6 total permutations, 

//but only 2 of them don't have the same letter (in this case 'a') repeating.




function permAlone(str) {
    //heaps algorithm taken from https://en.wikipedia.org/wiki/Heap%27s_algorithm; translated to JS
    var leng = str.length;
    var myArr = str.split('');
    var permu = 0;
    
    var re = /(.)\1/g;
//still struggle with fully grasping this!
    function generate(n, arr) {
        if (n == 1) {
            if (arr.join('').match(re) === null) {
                permu++;
            }
            return arr;
        }
        else {
            for (var i=0; i<n-1; i++) {
                generate(n-1, arr);
                if (n%2 === 0) {
                    var current = arr[i];
                    arr[i] = arr[n-1];
                    arr[n-1] = current;
                }
                else {
                    var startVal = arr[0];
                    arr[0] = arr[n-1];
                    arr[n-1] = startVal;
                }
            }
            generate(n-1, arr);
        }
    }
    generate(leng, myArr);
    return permu;
}

permAlone('aabb');