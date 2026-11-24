import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The result of the last execution of the plugin instance. */
export const Result = {
  ResultUnspecified: "RESULT_UNSPECIFIED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type Result = (typeof Result)[keyof typeof Result] | (string & {});

export const resultSchema: EnumSchema<Result> = s.enumOf<Result>(Result);
