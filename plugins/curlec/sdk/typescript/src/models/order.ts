import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRazorpayOrdersApiSchema, type EntityRazorpayOrdersApi } from "./entity-razorpay-orders-api.js";
import { statusRazorpayOrdersApiSchema, type StatusRazorpayOrdersApi } from "./status-razorpay-orders-api.js";

export type Order = {
  /** Unique order identifier. Prefix: order_ */
  id?: string;
  entity?: EntityRazorpayOrdersApi;
  /** Order amount in paise. Example: 50000 = ₹500. */
  amount?: number;
  /** Total amount paid against this order (paise). */
  amountPaid?: number;
  /** Remaining unpaid amount (paise). */
  amountDue?: number;
  /** ISO 4217 currency code. Example: INR. */
  currency?: string;
  /** Your internal receipt or order reference number. */
  receipt?: string;
  /** created: awaiting payment. attempted: payment attempted but not captured. paid: fully paid. */
  status?: StatusRazorpayOrdersApi;
  /** Number of payment attempts made. */
  attempts?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Unix timestamp of order creation. */
  createdAt?: number;
  offerId?: string;
  offers?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderProperties: s.Shape<Order> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayOrdersApiSchema)),
  amount: s.optional(s.int()),
  amountPaid: s.optional(s.int()),
  amountDue: s.optional(s.int()),
  currency: s.optional(s.string()),
  receipt: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRazorpayOrdersApiSchema)),
  attempts: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  offerId: s.optional(s.string()),
  offers: s.optional(s.array(s.string())),
  _keysMap: {
    amountPaid: "amount_paid",
    amountDue: "amount_due",
    createdAt: "created_at",
    offerId: "offer_id",
  },
};

export const orderInternalSchema: Schema<Order> = s.object<Order>(orderProperties, {
  additionalProperties: s.json(),
});

export const orderSchema: Schema<Order> = s.lazySchema(() =>
  s.object<Order>(
    {
      ...orderProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
