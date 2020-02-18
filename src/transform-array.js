module.exports = function transform(arr) {
    var transformarr = [];
    if (!Array.isArray(arr)) {
        return false;
    }
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == '--double-next') {
            transformarr.push(i + 1);
        } else if (arr[i] == '--discard-prev') {
            transformarr.splice((i - 1), 1);
        } else if (arr[i] == '--double-prev') {
            transformarr.push(i - 1);
        } else if (arr[i] == '--discard-next') {
            transformarr.splice((i + 1), 1);
        } else {
            transformarr.push(i);
        }
        return transformarr;
        };
