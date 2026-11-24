import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to sort the aggregated utterances in ascending or descending order. */
export const Order = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
