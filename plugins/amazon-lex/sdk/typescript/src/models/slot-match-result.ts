import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the expected and actual slots match or not. */
export const SlotMatchResult = {
  Matched: "Matched",
  Mismatched: "Mismatched",
  ExecutionError: "ExecutionError",
} as const;
export type SlotMatchResult = (typeof SlotMatchResult)[keyof typeof SlotMatchResult] | (string & {});

export const slotMatchResultSchema: EnumSchema<SlotMatchResult> = s.enumOf<SlotMatchResult>(SlotMatchResult);
