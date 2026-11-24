import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order by which to sort the generation request information. */
export const Order10 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order10 = (typeof Order10)[keyof typeof Order10] | (string & {});

export const order10Schema: EnumSchema<Order10> = s.enumOf<Order10>(Order10);
