import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to sort the results in ascending or descending order. */
export const Order2 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order2 = (typeof Order2)[keyof typeof Order2] | (string & {});

export const order2Schema: EnumSchema<Order2> = s.enumOf<Order2>(Order2);
