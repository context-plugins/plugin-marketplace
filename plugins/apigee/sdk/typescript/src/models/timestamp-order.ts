import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Order the sequences in increasing or decreasing order of timestamps. Default is descending order
 * of timestamps (latest first).
 */
export const TimestampOrder = {
  OrderUnspecified: "ORDER_UNSPECIFIED",
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type TimestampOrder = (typeof TimestampOrder)[keyof typeof TimestampOrder] | (string & {});

export const timestampOrderSchema: EnumSchema<TimestampOrder> = s.enumOf<TimestampOrder>(TimestampOrder);
