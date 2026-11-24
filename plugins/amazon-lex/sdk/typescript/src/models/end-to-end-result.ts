import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The success or failure of the streaming of the conversation. */
export const EndToEndResult = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type EndToEndResult = (typeof EndToEndResult)[keyof typeof EndToEndResult] | (string & {});

export const endToEndResultSchema: EnumSchema<EndToEndResult> = s.enumOf<EndToEndResult>(EndToEndResult);
