import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListSlotTypes operation should return
 * only aliases that equal the specified value. Specify CO when the ListSlotTypes operation should
 * return aliases that contain the specified value.
 */
export const Operator9 = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type Operator9 = (typeof Operator9)[keyof typeof Operator9] | (string & {});

export const operator9Schema: EnumSchema<Operator9> = s.enumOf<Operator9>(Operator9);
