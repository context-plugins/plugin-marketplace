import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderType = {
  Market: "MARKET",
  Limit: "LIMIT",
  Sl: "SL",
  SlM: "SL-M",
} as const;
export type OrderType = (typeof OrderType)[keyof typeof OrderType] | (string & {});

export const orderTypeSchema: EnumSchema<OrderType> = s.enumOf<OrderType>(OrderType);
