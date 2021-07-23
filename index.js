// Code your solution here
// This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (array, string) {
    return array.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase();
    });
}

findMatching(drivers, 'Bobby');


function fuzzyMatch (array, string) {
    return array.filter(function (name) {
        return name.startsWith(string);
    });
}

function matchName (array, string) {
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
    return array.filter(function (name) {
        return name.name === string;

    });
}





