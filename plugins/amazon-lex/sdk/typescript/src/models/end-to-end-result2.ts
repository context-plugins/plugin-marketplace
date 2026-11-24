import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The selection of matched or mismatched end-to-end status to filter test set results data at the
 * conversation level.
 */
export const EndToEndResult2 = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type EndToEndResult2 = (typeof EndToEndResult2)[keyof typeof EndToEndResult2] | (string & {});

export const endToEndResult2Schema: EnumSchema<EndToEndResult2> = s.enumOf<EndToEndResult2>(EndToEndResult2);
