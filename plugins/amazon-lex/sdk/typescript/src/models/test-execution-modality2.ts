import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether audio or text is used. */
export const TestExecutionModality2 = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type TestExecutionModality2 =
  | (typeof TestExecutionModality2)[keyof typeof TestExecutionModality2]
  | (string & {});

export const testExecutionModality2Schema: EnumSchema<TestExecutionModality2> =
  s.enumOf<TestExecutionModality2>(TestExecutionModality2);
