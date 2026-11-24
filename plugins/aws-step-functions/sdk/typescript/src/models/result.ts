import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result value will be OK when no syntax errors are found, or FAIL if the workflow definition
 * does not pass verification.
 */
export const Result = {
  Ok: "OK",
  Fail: "FAIL",
} as const;
export type Result = (typeof Result)[keyof typeof Result] | (string & {});

export const resultSchema: EnumSchema<Result> = s.enumOf<Result>(Result);
