import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to sort the bot locales in ascending or descending order. */
export const Order6 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order6 = (typeof Order6)[keyof typeof Order6] | (string & {});

export const order6Schema: EnumSchema<Order6> = s.enumOf<Order6>(Order6);
