import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callbackMethod1Schema, type CallbackMethod1 } from "./callback-method1.js";
import {
  customer1RazorpayPaymentLinksApiSchema,
  type Customer1RazorpayPaymentLinksApi,
} from "./customer1-razorpay-payment-links-api.js";
import { notify1Schema, type Notify1 } from "./notify1.js";
import { optionsInternalSchema, optionsSchema, type Options } from "./options.js";

export type PaymentLinksRequest = {
  /** Amount in smallest currency unit (paise for INR). Example: 50000 for ₹500. */
  amount: number;
  /** ISO 4217 currency code. UPI links support INR only. @default "INR" */
  currency?: string;
  /** Set true to create a UPI-only Payment Link. Not available in test mode. @default false */
  upiLink?: boolean;
  /** Enable partial payments. Not supported for UPI links. */
  acceptPartial?: boolean;
  /** Minimum first partial payment amount in paise. */
  firstMinPartialAmount?: number;
  /**
   * Unix timestamp for link expiry. Max 6 months from creation. Must be at least 15 minutes in the
   * future.
   */
  expireBy?: number;
  /** Your unique tracking reference. Max 40 characters. Must be unique. */
  referenceId?: string;
  /** Brief description shown on the payment page. Max 2048 characters. */
  description?: string;
  /** Customer contact details. Not auto-populated on checkout — customer must enter manually. */
  customer?: Customer1RazorpayPaymentLinksApi;
  /** Notification handlers. Set true for Razorpay to send, false to handle yourself. */
  notify?: Notify1;
  /** Send automatic payment reminders. */
  reminderEnable?: boolean;
  /** Redirect URL after payment completion. */
  callbackUrl?: string;
  /** Required when callback_url is set. */
  callbackMethod?: CallbackMethod1;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Checkout and payment page customization. */
  options?: Options;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentLinksRequestProperties: s.Shape<PaymentLinksRequest> = {
  amount: s.int(),
  currency: s.defaulted(s.string(), "INR"),
  upiLink: s.defaulted(s.boolean(), false),
  acceptPartial: s.optional(s.boolean()),
  firstMinPartialAmount: s.optional(s.int()),
  expireBy: s.optional(s.int()),
  referenceId: s.optional(s.string()),
  description: s.optional(s.string()),
  customer: s.optional(s.lazy(() => customer1RazorpayPaymentLinksApiSchema)),
  notify: s.optional(s.lazy(() => notify1Schema)),
  reminderEnable: s.optional(s.boolean()),
  callbackUrl: s.optional(s.string()),
  callbackMethod: s.optional(s.lazy(() => callbackMethod1Schema)),
  notes: s.optional(s.record(s.string(), s.string())),
  options: s.optional(s.lazy(() => optionsInternalSchema)),
  _keysMap: {
    upiLink: "upi_link",
    acceptPartial: "accept_partial",
    firstMinPartialAmount: "first_min_partial_amount",
    expireBy: "expire_by",
    referenceId: "reference_id",
    reminderEnable: "reminder_enable",
    callbackUrl: "callback_url",
    callbackMethod: "callback_method",
  },
};

export const paymentLinksRequestInternalSchema: Schema<PaymentLinksRequest> = s.object<PaymentLinksRequest>(
  paymentLinksRequestProperties,
  { additionalProperties: s.json() },
);

export const paymentLinksRequestSchema: Schema<PaymentLinksRequest> = s.lazySchema(() =>
  s.object<PaymentLinksRequest>(
    {
      ...paymentLinksRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
      options: s.optional(s.lazy(() => optionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
