import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Controls the rule for dimension value ordering. */
export const OrderType = {
  OrderTypeUnspecified: "ORDER_TYPE_UNSPECIFIED",
  Alphanumeric: "ALPHANUMERIC",
  CaseInsensitiveAlphanumeric: "CASE_INSENSITIVE_ALPHANUMERIC",
  Numeric: "NUMERIC",
} as const;
export type OrderType = (typeof OrderType)[keyof typeof OrderType] | (string & {});

export const orderTypeSchema: EnumSchema<OrderType> = s.enumOf<OrderType>(OrderType);
