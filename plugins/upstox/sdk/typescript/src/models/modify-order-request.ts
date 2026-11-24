import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderType6Schema, type OrderType6 } from "./order-type6.js";
import { validity5Schema, type Validity5 } from "./validity5.js";

export type ModifyOrderRequest = {
  /** Quantity with which the order was placed */
  quantity?: number;
  /** Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) */
  validity: Validity5;
  /** Price at which the order was placed */
  price: number;
  /** The order ID for which the order must be modified */
  orderId: string;
  /**
   * Type of order. It can be one of the following MARKET refers to market order LIMILT refers to
   * Limit Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market
   */
  orderType: OrderType6;
  /** The quantity that should be disclosed in the market depth */
  disclosedQuantity?: number;
  /** If the order is a stop loss order then the trigger price to be set is mentioned here */
  triggerPrice: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modifyOrderRequestSchema: Schema<ModifyOrderRequest> = s.object<ModifyOrderRequest>(
  {
    quantity: s.optional(s.int()),
    validity: validity5Schema,
    price: s.float64(),
    orderId: s.string(),
    orderType: orderType6Schema,
    disclosedQuantity: s.optional(s.int()),
    triggerPrice: s.float64(),
    _keysMap: {
      orderId: "order_id",
      orderType: "order_type",
      disclosedQuantity: "disclosed_quantity",
      triggerPrice: "trigger_price",
    },
  },
  { additionalProperties: s.json() },
);
