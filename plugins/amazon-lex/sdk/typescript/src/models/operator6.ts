import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListBots operation should return only
 * aliases that equal the specified value. Specify CO when the ListBots operation should return
 * aliases that contain the specified value.
 */
export const Operator6 = {
  Co: "CO",
  Eq: "EQ",
  Ne: "NE",
} as const;
export type Operator6 = (typeof Operator6)[keyof typeof Operator6] | (string & {});

export const operator6Schema: EnumSchema<Operator6> = s.enumOf<Operator6>(Operator6);
