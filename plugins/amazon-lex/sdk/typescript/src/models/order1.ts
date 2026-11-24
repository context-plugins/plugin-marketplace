import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether to bin the analytics data in ascending or descending order. If this field is
 * left blank, the default order is by the key of the bin in descending order.
 */
export const Order1 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order1 = (typeof Order1)[keyof typeof Order1] | (string & {});

export const order1Schema: EnumSchema<Order1> = s.enumOf<Order1>(Order1);
