import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether to sort the results in ascending or descending order of the summary statistic
 * (value in the response).
 */
export const Order3 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order3 = (typeof Order3)[keyof typeof Order3] | (string & {});

export const order3Schema: EnumSchema<Order3> = s.enumOf<Order3>(Order3);
