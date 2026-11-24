import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrdersRequest = {
  /** Payment amount in paise. Example: 50000 for ₹500. Must be >= 100. */
  amount: number;
  /** ISO 4217 currency code. Example: INR. @default "INR" */
  currency?: string;
  /** Your internal receipt number. Max 40 characters. */
  receipt?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Allow partial payments. @default false */
  partialPayment?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ordersRequestProperties: s.Shape<OrdersRequest> = {
  amount: s.int(),
  currency: s.defaulted(s.string(), "INR"),
  receipt: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  partialPayment: s.defaulted(s.boolean(), false),
  _keysMap: {
    partialPayment: "partial_payment",
  },
};

export const ordersRequestInternalSchema: Schema<OrdersRequest> = s.object<OrdersRequest>(
  ordersRequestProperties,
  { additionalProperties: s.json() },
);

export const ordersRequestSchema: Schema<OrdersRequest> = s.lazySchema(() =>
  s.object<OrdersRequest>(
    {
      ...ordersRequestProperties,
      amount: s.int().check(s.gte(100)),
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
