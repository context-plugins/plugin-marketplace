import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. You can say ascending or descending. */
export const Order13 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order13 = (typeof Order13)[keyof typeof Order13] | (string & {});

export const order13Schema: EnumSchema<Order13> = s.enumOf<Order13>(Order13);
