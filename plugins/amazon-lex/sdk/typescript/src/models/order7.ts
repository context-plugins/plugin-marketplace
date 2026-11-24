import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. You can choose ascending or descending. */
export const Order7 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order7 = (typeof Order7)[keyof typeof Order7] | (string & {});

export const order7Schema: EnumSchema<Order7> = s.enumOf<Order7>(Order7);
