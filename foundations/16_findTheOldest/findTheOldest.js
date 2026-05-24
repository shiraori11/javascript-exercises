const findTheOldest = function(people) {
  let oldestPerson;

  for (person of people) {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    
    if (oldestPerson === undefined) {
      oldestPerson = person;
    } else {
      oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

      personAge = person.yearOfDeath - person.yearOfBirth;
      console.log(oldestPersonAge);
      console.log(personAge);

      if (oldestPersonAge < personAge) {
        oldestPerson = person;
      }
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
