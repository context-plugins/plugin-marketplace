import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether test set is audio or text. */
export const TestExecutionModality = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type TestExecutionModality =
  | (typeof TestExecutionModality)[keyof typeof TestExecutionModality]
  | (string & {});

export const testExecutionModalitySchema: EnumSchema<TestExecutionModality> =
  s.enumOf<TestExecutionModality>(TestExecutionModality);
