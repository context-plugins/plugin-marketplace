import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The end-to-end success or failure of the test result evaluation item. */
export const EndToEndResult1 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type EndToEndResult1 = (typeof EndToEndResult1)[keyof typeof EndToEndResult1] | (string & {});

export const endToEndResult1Schema: EnumSchema<EndToEndResult1> = s.enumOf<EndToEndResult1>(EndToEndResult1);
