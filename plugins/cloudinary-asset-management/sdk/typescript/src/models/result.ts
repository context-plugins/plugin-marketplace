import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Result of the deletion operation. */
export const Result = {
  Ok: "ok",
  NotFound: "not found",
} as const;
export type Result = (typeof Result)[keyof typeof Result] | (string & {});

export const resultSchema: EnumSchema<Result> = s.enumOf<Result>(Result);
