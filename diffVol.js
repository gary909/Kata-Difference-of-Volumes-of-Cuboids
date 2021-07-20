function findDifference(a, b) {
    var totalA = a[0] * a[1] * a[2];
    var totalB = b[0] * b[1] * b[2];
    if (totalA >= totalB) {
        var answer = totalA - totalB;
    } else {
        var answer = totalB - totalA;
    }
    return answer;
  }

  console.log(findDifference([2, 2, 3], [5, 4, 1]));