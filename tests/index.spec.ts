import * as functions from "../lib/index";
describe("When checking if CP1252 compatible when a valid cp1252 string", () => {
  const input =
    "!#$%&'()*+,-./0123456789:,<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_àbcdefghijklmnopqrstuvwxyz{|}~ €‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ  ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
  it("Then returns true", done => {
    const res = functions.textIsCP1252Compatible(input);
    expect(res).toBe(true);
    done();
  });
});

describe("When checking if CP1252 compatible when an invalid cp1252 string, containing russian letters", () => {
  const input = "Образец text на русском языке";
  it("Then returns false", done => {
    const res = functions.textIsCP1252Compatible(input);
    expect(res).toBe(false);
    done();
  });
});

describe("When checking if CP1252 compatible when an invalid cp1252 string, containing russian URL-encoded letters", () => {
  const input = "%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%B5%D1%86";
  it("Then returns false", done => {
    const res = functions.textIsCP1252Compatible(input);
    expect(res).toBe(false);
    done();
  });
});

describe("When checking if CP1252 compatible when an invalid cp1252 string, containing chinese letters", () => {
  const input = "假借字ظ";
  it("Then returns false", done => {
    const res = functions.textIsCP1252Compatible(input);
    expect(res).toBe(false);
    done();
  });
});

describe("When checking if CP1252 compatible when an invalid cp1252 string, containing arabic letters", () => {
  const input = "ظ";
  it("Then returns false", done => {
    const res = functions.textIsCP1252Compatible(input);
    expect(res).toBe(false);
    done();
  });
});

describe("When checking if string has character not in CP1252 with valid string", () => {
  const input =
    "!#$%&'()*+,-./0123456789:,<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_àbcdefghijklmnopqrstuvwxyz{|}~ €‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ  ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ";
  it("Then returns false", done => {
    const res = functions.hasCharacterNotInCP1252(input);
    expect(res).toBe(false);
    done();
  });
});

describe("When checking if string has character not in CP1252 with invalid string, containing russian letters", () => {
  const input = "Образец text на русском языке";
  it("Then returns true", done => {
    const res = functions.hasCharacterNotInCP1252(input);
    expect(res).toBe(true);
    done();
  });
});

describe("When checking if string has character not in CP1252 with invalid string, containing URL-encoded russian letters", () => {
  const input = "%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%B5%D1%86";
  it("Then returns true", done => {
    const res = functions.hasCharacterNotInCP1252(input);
    expect(res).toBe(true);
    done();
  });
});

describe("When checking if string has character not in CP1252 with invalid string, containing chinese letters", () => {
  const input = "假借字";
  it("Then returns true", done => {
    const res = functions.hasCharacterNotInCP1252(input);
    expect(res).toBe(true);
    done();
  });
});

describe("When checking if string has character not in CP1252 with invalid string, containing arabic letters", () => {
  const input = "ظ";
  it("Then returns false", done => {
    const res = functions.hasCharacterNotInCP1252(input);
    expect(res).toBe(true);
    done();
  });
});
