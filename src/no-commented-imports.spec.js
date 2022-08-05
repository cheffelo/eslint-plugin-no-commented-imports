const { RuleTester } = require("eslint");

const noCommentedImports = require("./no-commented-imports");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
  env: { es6: true },
});

describe("no-commented-imports", () => {
  ruleTester.run("no-commented-imports", noCommentedImports, {
    valid: [
      {
        code: `import { exec } from "child_process";`,
      },
    ],
    invalid: [
      {
        code: `
          // import { exec } from "child_process";
        `,
        errors: 1,
      },
      {
        code: `
          // import { exec } from "child_process";
          // import utils from "utils";

          const abc = 123;
        `,
        errors: 2,
      },
      {
        code: `/* import { exec } from "child_process"; */`,
        errors: 1,
      },
    ],
  });
});
