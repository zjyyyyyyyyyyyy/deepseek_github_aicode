function printAllTriplets(arr) {
  // 参数验证
  if (!Array.isArray(arr)) {
    console.error('Input must be an array');
    return;
  }

  const n = arr.length;

  // 限制输出数量，避免控制台被淹没
  const maxOutput = 1000;
  let outputCount = 0;

  for (let i = 0; i < n && outputCount < maxOutput; i++) {
    for (let j = i + 1; j < n && outputCount < maxOutput; j++) {
      for (let k = j + 1; k < n && outputCount < maxOutput; k++) {
        console.log(arr[i], arr[j], arr[k]);
        outputCount++;
      }
    }
  }

  if (outputCount >= maxOutput) {
    console.warn(`Output limited to first ${maxOutput} triplets`);
  }
}