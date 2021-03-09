const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, rec) {
    if (!Array.isArray(arr)) throw new Exception('not an array');

    rec = 1;
    for(let i = 0; i < arr.length; i++) {
      let subDepth = 1;
      if (Array.isArray(arr[i])) {
        subDepth += this.calculateDepth(arr[i]);
        if (subDepth > rec) {
          rec = subDepth;
        }
      }
    }
    return rec;
  }
};