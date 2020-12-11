module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }

  let onlyStrings = members.filter(name => typeof name === "string");
  let withoutWhitespaces = onlyStrings.map(name => name.replace(/ /g, ''));
  let uppercaseNames = withoutWhitespaces.map(name => name.toUpperCase());
  let firstLetters = uppercaseNames.map(name => name.charAt(0));
  let sortedLetters = firstLetters.sort();
  let secretName = sortedLetters.join('');

  return secretName;
};
