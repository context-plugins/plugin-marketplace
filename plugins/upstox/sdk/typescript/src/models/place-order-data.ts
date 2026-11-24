import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaceOrderData = {
  /** An order ID for the order request placed */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeOrderDataSchema: Schema<PlaceOrderData> = s.object<PlaceOrderData>(
  {
    orderId: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
