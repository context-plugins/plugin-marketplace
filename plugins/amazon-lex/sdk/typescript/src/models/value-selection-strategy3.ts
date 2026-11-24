import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more
 * information, see PutSlotType.
 */
export const ValueSelectionStrategy3 = {
  OriginalValue: "ORIGINAL_VALUE",
  TopResolution: "TOP_RESOLUTION",
} as const;
export type ValueSelectionStrategy3 =
  | (typeof ValueSelectionStrategy3)[keyof typeof ValueSelectionStrategy3]
  | (string & {});

export const valueSelectionStrategy3Schema: EnumSchema<ValueSelectionStrategy3> =
  s.enumOf<ValueSelectionStrategy3>(ValueSelectionStrategy3);
