// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  const clientsWithLetterInName = [];

  for (const account of array) {
    const name = account.name.toLowerCase();
    const targetLetter = letter.toLowerCase();
    let hasLetter = false;

    for (const char of name) {
      if (char === targetLetter) {
        hasLetter = true;
        break;
      }
    }

    if (hasLetter) {
      clientsWithLetterInName.push(account.name);
    }
  }

  return clientsWithLetterInName;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
