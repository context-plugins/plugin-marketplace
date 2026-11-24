import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to
 * Limit Order<br>SL refers to Stop Loss Limit<br>SL-M refers to Stop loss market
 */
export const OrderType1 = {
  Market: "MARKET",
  Limit: "LIMIT",
  Sl: "SL",
  SlM: "SL-M",
} as const;
export type OrderType1 = (typeof OrderType1)[keyof typeof OrderType1] | (string & {});

export const orderType1Schema: EnumSchema<OrderType1> = s.enumOf<OrderType1>(OrderType1);
