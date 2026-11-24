import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MultiOrderData = {
  /** A unique identifier for tracking individual orders within the batch */
  correlationId?: string;
  /** An order ID for the order request placed */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiOrderDataSchema: Schema<MultiOrderData> = s.object<MultiOrderData>(
  {
    correlationId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    _keysMap: {
      correlationId: "correlation_id",
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
