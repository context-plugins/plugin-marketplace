import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether the expected and actual outputs match or not, or if there is an error in
 * execution.
 */
export const EndToEndResult3 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type EndToEndResult3 = (typeof EndToEndResult3)[keyof typeof EndToEndResult3] | (string & {});

export const endToEndResult3Schema: EnumSchema<EndToEndResult3> = s.enumOf<EndToEndResult3>(EndToEndResult3);
