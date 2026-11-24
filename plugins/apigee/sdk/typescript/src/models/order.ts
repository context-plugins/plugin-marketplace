import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Ordering for this aggregation in the result. For time series this is ignored since the ordering
 * of points depends only on the timestamp, not the values.
 */
export const Order = {
  OrderUnspecified: "ORDER_UNSPECIFIED",
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
