import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of order. It can be one of the following MARKET refers to market order LIMILT refers to
 * Limit Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market
 */
export const OrderType6 = {
  Market: "MARKET",
  Limit: "LIMIT",
  Sl: "SL",
  SlM: "SL-M",
} as const;
export type OrderType6 = (typeof OrderType6)[keyof typeof OrderType6] | (string & {});

export const orderType6Schema: EnumSchema<OrderType6> = s.enumOf<OrderType6>(OrderType6);
