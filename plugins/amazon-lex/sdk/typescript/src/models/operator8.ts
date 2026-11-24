import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListIntents operation should return only
 * aliases that equal the specified value. Specify CO when the ListIntents operation should return
 * aliases that contain the specified value.
 */
export const Operator8 = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type Operator8 = (typeof Operator8)[keyof typeof Operator8] | (string & {});

export const operator8Schema: EnumSchema<Operator8> = s.enumOf<Operator8>(Operator8);
