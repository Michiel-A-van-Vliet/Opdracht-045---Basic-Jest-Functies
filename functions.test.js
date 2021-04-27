const functions = require("./functions.js");

test("Should be null", () => {
  // Begin met expect()
  // Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn.
  // Daarna volgt je .toBeSomethingSomething functie,
  // zoek de geschikte functie in de documentatie.
  // In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk
  // Null returned. Dus "toBeNull()" makes the most sense.
  expect(functions.isNull()).toBeNull();
}); //  passed

// //fail
// test("Should be null", () => {
//   expect(functions.isNull()).toBe(7);
// }); // failed

test("checkValue Should be falsy when argument is undefined", () => {
  expect(functions.checkValue()).toBeUndefined();
}); // passed

// //fail
// test("checkValue Should be falsy when argument is undefined", () => {
//   expect(functions.checkValue(7)).toBeUndefined();
// }); // failed

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toHaveProperty("firstName", "Brad");
  expect(functions.createUser()).toHaveProperty("lastName", "Traversy");
}); // passed

// //fail
// test("User should be Brad Traversy object", () => {
//   expect(functions.createUser()).toHaveProperty("firstName", "Klaas");
//   expect(functions.createUser()).toHaveProperty("lastName", "Vaak");
// }); // failed

// // Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// // nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeGreaterThanOrEqual(1600);
}); //passed

// //fail
// test("Should be under or equal to 1600", () => {
//   const load1 = 800;
//   const load2 = 800;
//   expect(load1 + load2).toBeGreaterThan(1600);
// }); // failed

// Regex
test("There is no I in team", () => {
  expect("team").not.toContain("i");
}); // passed

// //fail
// test("There is no I in team", () => {
//   expect("team").not.toContain("a");
// }); // failed

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
}); // passed

// //fail
// test("Admin should be in usernames", () => {
//   usernames = ["john", "karen", "admin"];
//   expect(usernames).toContain("Admin");
// }); // failed
