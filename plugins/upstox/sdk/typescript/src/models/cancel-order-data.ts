import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelOrderData = {
  /** Reference order ID */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrderDataSchema: Schema<CancelOrderData> = s.object<CancelOrderData>(
  {
    orderId: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
