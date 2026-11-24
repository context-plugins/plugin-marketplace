import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListSlots operation should return only
 * aliases that equal the specified value. Specify CO when the ListSlots operation should return
 * aliases that contain the specified value.
 */
export const Operator10 = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type Operator10 = (typeof Operator10)[keyof typeof Operator10] | (string & {});

export const operator10Schema: EnumSchema<Operator10> = s.enumOf<Operator10>(Operator10);
