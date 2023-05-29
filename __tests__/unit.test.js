// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('Phone number test 1 true', () => {
    expect(functions.isPhoneNumber("123-123-1233")).toBe(true);
});
test('Phone number test 2 true', () => {
    expect(functions.isPhoneNumber("051-234-1123")).toBe(true);
});
test('Phone number test 3 false', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test('Phone number test 4 false', () => {
    expect(functions.isPhoneNumber("")).toBe(false);
});

test('isEmail test 1 true', () => {
    expect(functions.isEmail("abc@google.com")).toBe(true);
});
test('isEmail test 2 true', () => {
    expect(functions.isEmail("12345@yahoo.com")).toBe(true);
});
test('isEmail test 3 false', () => {
    expect(functions.isEmail("123")).toBe(false);
});
test('isEmail test 4 false', () => {
    expect(functions.isEmail("")).toBe(false);
});

test('isStrongPassword test 1 true', () => {
    expect(functions.isStrongPassword("A168999")).toBe(true);
});
test('isStrongPassword test 2 true', () => {
    expect(functions.isStrongPassword("ABC123")).toBe(true);
});
test('isStrongPassword test 3 false', () => {
    expect(functions.isStrongPassword("A12")).toBe(false);
});
test('isStrongPasswordr test 4 false', () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
});

test('isDate test 1 true', () => {
    expect(functions.isDate("1/2/2002")).toBe(true);
});
test('isDate test 2 true', () => {
    expect(functions.isDate("11/21/2003")).toBe(true);
});
test('isDate test 3 false', () => {
    expect(functions.isDate("1/3/2")).toBe(false);
});
test('isDate test 4 false', () => {
    expect(functions.isDate("/1/2002")).toBe(false);
});

test('isHexColor test 1 true', () => {
    expect(functions.isHexColor("234")).toBe(true);
});
test('isHexColor test 2 true', () => {
    expect(functions.isHexColor("123")).toBe(true);
});
test('isHexColor test 3 false', () => {
    expect(functions.isHexColor("12323423")).toBe(false);
});
test('isHexColor test 4 false', () => {
    expect(functions.isHexColor("")).toBe(false);
});
// TODO - Part 2