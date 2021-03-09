const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  // throw new CustomError('Not implemented');
  if(!Array.isArray(members))
  return false;

  let arr = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === 'string'){
      arr.push(members[i].trim().split('')[0].toUpperCase());
    }
  }

  return arr.sort().join('');
};
