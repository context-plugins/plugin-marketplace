import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the data used for the test execution is written or spoken. */
export const TestExecutionModality1 = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type TestExecutionModality1 =
  | (typeof TestExecutionModality1)[keyof typeof TestExecutionModality1]
  | (string & {});

export const testExecutionModality1Schema: EnumSchema<TestExecutionModality1> =
  s.enumOf<TestExecutionModality1>(TestExecutionModality1);
