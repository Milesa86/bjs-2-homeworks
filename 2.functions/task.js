function getArrayParams(...arr) {

  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let avg = arr.reduce((total, currentItem) => {
    total += currentItem / arr.length;
    return Number(total.toFixed(2));

  }, 0);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let avg = arr.reduce((total, currentItem) => {
      total += currentItem;
      return total;
    }, 0);
    return avg;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    sumEvenElement = 0;
    sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let array = arrOfArr[i];
    const workerResult = func(...array);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult
    }
  }
  return maxWorkerResult;
}
