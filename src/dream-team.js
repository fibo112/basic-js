module.exports = function createDreamTeam(members) {
  var arr = [];
  var dreamarr = [];
  if (!Array.isArray(members)) {
    return false;
  }
    for (var i = 0; i < members.length; i++)
    if (typeof members[i] == 'string') {
      arr.push(members[i]);
      
    }
      
      for (var j = 0; j < arr.length; j++)
        
        dreamarr.push(arr[j][0]);
        
        dreamarr.sort().join('');
        var sum=[];
        for(var i=0;i<dreamarr.length;i++)
        
        sum = sum + dreamarr[i];
          
        
    return sum;
};