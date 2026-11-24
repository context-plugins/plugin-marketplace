import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderItemInternalSchema, orderItemSchema, type OrderItem } from "./order-item.js";

export type RefundRequest = {
  /**
   * Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   *
   * @default "0.00"
   */
  amount?: string;
  /** Idempotency key. Used to avoid similar refund requests. */
  referenceId: string;
  /** Reason for the refund. */
  reason?: string;
  /** Array of objects representing the order items being refunded. */
  items?: OrderItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundRequestProperties: s.Shape<RefundRequest> = {
  amount: s.defaulted(s.string(), "0.00"),
  referenceId: s.string(),
  reason: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => orderItemInternalSchema))),
  _keysMap: {
    referenceId: "reference_id",
  },
};

export const refundRequestInternalSchema: Schema<RefundRequest> = s.object<RefundRequest>(
  refundRequestProperties,
  { additionalProperties: s.json() },
);

export const refundRequestSchema: Schema<RefundRequest> = s.lazySchema(() =>
  s.object<RefundRequest>(
    {
      ...refundRequestProperties,
      items: s.optional(s.array(s.lazy(() => orderItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
