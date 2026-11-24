import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderItemResponseInternalSchema,
  orderItemResponseSchema,
  type OrderItemResponse,
} from "./order-item-response.js";

export type RefundResponse = {
  /** Unique refund ID, assigned by Tabby. */
  id?: string;
  /**
   * Date and time the refund was created, in UTC, and displayed in ISO 8601 datetime format,
   * assigned by Tabby.
   */
  createdAt?: Date;
  /**
   * Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   *
   * @default "0.00"
   */
  amount?: string;
  /** Reason for the refund. */
  reason?: string | null;
  /** Array of objects representing the order items being refunded. */
  items?: OrderItemResponse[] | null;
  /** Idempotency key. Used to avoid similar refund requests. */
  referenceId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundResponseProperties: s.Shape<RefundResponse> = {
  id: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  amount: s.defaulted(s.string(), "0.00"),
  reason: s.optionalNullable(s.string()),
  items: s.optionalNullable(s.array(s.lazy(() => orderItemResponseInternalSchema))),
  referenceId: s.nullable(s.string()),
  _keysMap: {
    createdAt: "created_at",
    referenceId: "reference_id",
  },
};

export const refundResponseInternalSchema: Schema<RefundResponse> = s.object<RefundResponse>(
  refundResponseProperties,
  { additionalProperties: s.json() },
);

export const refundResponseSchema: Schema<RefundResponse> = s.lazySchema(() =>
  s.object<RefundResponse>(
    {
      ...refundResponseProperties,
      items: s.optionalNullable(s.array(s.lazy(() => orderItemResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
