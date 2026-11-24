import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListBotLocales operation should return
 * only aliases that equal the specified value. Specify CO when the ListBotLocales operation should
 * return aliases that contain the specified value.
 */
export const Operator7 = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type Operator7 = (typeof Operator7)[keyof typeof Operator7] | (string & {});

export const operator7Schema: EnumSchema<Operator7> = s.enumOf<Operator7>(Operator7);
