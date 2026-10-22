import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction to sort the payment methods in. */
export const OrderBy = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy] | (string & {});

export const orderBySchema: EnumSchema<OrderBy> = s.enumOf<OrderBy>(OrderBy);
