module.exports = {
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
