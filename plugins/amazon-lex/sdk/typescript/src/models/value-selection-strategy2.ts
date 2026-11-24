import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The
 * field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by
 * the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a
 * resolution list for the slot, return the first value in the resolution list as the slot type
 * value. If there is no resolution list, null is returned. If you don't specify the
 * valueSelectionStrategy, the default is ORIGINAL_VALUE.
 */
export const ValueSelectionStrategy2 = {
  OriginalValue: "ORIGINAL_VALUE",
  TopResolution: "TOP_RESOLUTION",
} as const;
export type ValueSelectionStrategy2 =
  | (typeof ValueSelectionStrategy2)[keyof typeof ValueSelectionStrategy2]
  | (string & {});

export const valueSelectionStrategy2Schema: EnumSchema<ValueSelectionStrategy2> =
  s.enumOf<ValueSelectionStrategy2>(ValueSelectionStrategy2);
