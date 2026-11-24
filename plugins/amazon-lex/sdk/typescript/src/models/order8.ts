import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order of the sort category for the version replicated bots. */
export const Order8 = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order8 = (typeof Order8)[keyof typeof Order8] | (string & {});

export const order8Schema: EnumSchema<Order8> = s.enumOf<Order8>(Order8);
