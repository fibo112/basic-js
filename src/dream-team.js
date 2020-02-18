module.exports = function createDreamTeam(members) {
  var arr = [];
  if (!Array.isArray(members)) {
    return false;
  }
    for (var i = 0; i < members.length; i++)
    if (typeof members[i] != 'string') {
      continue;
    } 
      arr.push(members[i]);
      var dreamarr = [];
      for (var j = 0; j < arr.length; j++)
        dreamarr.push(j);
      dreamarr.sort().join('');
    return dreamarr;
};