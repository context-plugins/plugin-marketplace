import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The test result */
export const Result = {
  Success: "success",
  Failure: "failure",
  Skipped: "skipped",
} as const;
export type Result = (typeof Result)[keyof typeof Result] | (string & {});

export const resultSchema: EnumSchema<Result> = s.enumOf<Result>(Result);
