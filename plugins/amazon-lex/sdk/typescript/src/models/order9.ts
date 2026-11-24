import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. You can specify ascending or descending order. */
export const Order9 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order9 = (typeof Order9)[keyof typeof Order9] | (string & {});

export const order9Schema: EnumSchema<Order9> = s.enumOf<Order9>(Order9);
