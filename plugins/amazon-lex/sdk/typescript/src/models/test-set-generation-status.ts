import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status for the test set generation. */
export const TestSetGenerationStatus = {
  Generating: "Generating",
  Ready: "Ready",
  Failed: "Failed",
  Pending: "Pending",
} as const;
export type TestSetGenerationStatus =
  | (typeof TestSetGenerationStatus)[keyof typeof TestSetGenerationStatus]
  | (string & {});

export const testSetGenerationStatusSchema: EnumSchema<TestSetGenerationStatus> =
  s.enumOf<TestSetGenerationStatus>(TestSetGenerationStatus);
