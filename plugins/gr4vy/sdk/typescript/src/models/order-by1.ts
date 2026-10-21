import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction to sort the gift cards in. */
export const OrderBy1 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type OrderBy1 = (typeof OrderBy1)[keyof typeof OrderBy1] | (string & {});

export const orderBy1Schema: EnumSchema<OrderBy1> = s.enumOf<OrderBy1>(OrderBy1);
