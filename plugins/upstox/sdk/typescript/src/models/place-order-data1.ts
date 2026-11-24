import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for place order request */
export type PlaceOrderData1 = {
  /** An order ID for the order request placed */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeOrderData1Schema: Schema<PlaceOrderData1> = s.object<PlaceOrderData1>(
  {
    orderId: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
