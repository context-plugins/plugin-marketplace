import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The direction in which to order list results, either ascending or descending. */
export const OrderByDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type OrderByDirection = (typeof OrderByDirection)[keyof typeof OrderByDirection] | (string & {});

export const orderByDirectionSchema: EnumSchema<OrderByDirection> =
  s.enumOf<OrderByDirection>(OrderByDirection);
