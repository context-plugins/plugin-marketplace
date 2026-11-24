import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callbackMethodSchema, type CallbackMethod } from "./callback-method.js";
import {
  customerRazorpayPaymentLinksApiSchema,
  type CustomerRazorpayPaymentLinksApi,
} from "./customer-razorpay-payment-links-api.js";
import {
  entityRazorpayPaymentLinksApiSchema,
  type EntityRazorpayPaymentLinksApi,
} from "./entity-razorpay-payment-links-api.js";
import { notifySchema, type Notify } from "./notify.js";
import {
  paymentRazorpayPaymentLinksApiSchema,
  type PaymentRazorpayPaymentLinksApi,
} from "./payment-razorpay-payment-links-api.js";
import {
  statusRazorpayPaymentLinksApiSchema,
  type StatusRazorpayPaymentLinksApi,
} from "./status-razorpay-payment-links-api.js";

export type PaymentLink = {
  /** Unique payment link identifier. Prefix: plink_ */
  id?: string;
  entity?: EntityRazorpayPaymentLinksApi;
  /**
   * Payment amount in smallest currency unit (paise for INR). Three-decimal currencies (KWD, BHD,
   * OMR): drop last decimal digit (e.g. 295.991 KWD → 295990). Zero-decimal currencies (JPY): pass
   * value as-is.
   */
  amount?: number;
  /** Total amount paid by customer. */
  amountPaid?: number;
  /** ISO 4217 currency code. UPI Payment Links only support INR. @default "INR" */
  currency?: string;
  /** Allow partial payments. Not supported for UPI links. */
  acceptPartial?: boolean;
  /** Minimum amount required for the first partial payment. */
  firstMinPartialAmount?: number;
  /** Brief description. Max 2048 characters. */
  description?: string;
  /** Your unique tracking reference. Max 40 characters. Must be unique per link. */
  referenceId?: string;
  /**
   * Unix timestamp when link expires. Default: 6 months from creation. Must be at least 15 minutes
   * in the future.
   */
  expireBy?: number;
  /** Unix timestamp when link actually expired. */
  expiredAt?: number;
  /** Unix timestamp when link was cancelled. */
  cancelledAt?: number;
  /**
   * created: awaiting payment. partially_paid: one or more partial payments received. expired: past
   * expiry with no full payment. cancelled: manually cancelled. paid: fully paid.
   */
  status?: StatusRazorpayPaymentLinksApi;
  /** true if this is a UPI Payment Link, false for standard. */
  upiLink?: boolean;
  /** Shareable short URL for the payment link. */
  shortUrl?: string;
  /** Redirect URL after payment completion. */
  callbackUrl?: string;
  callbackMethod?: CallbackMethod;
  /**
   * Customer contact details. These are not auto-populated on the checkout page — customer must
   * enter them manually.
   */
  customer?: CustomerRazorpayPaymentLinksApi;
  notify?: Notify;
  /** Send automatic payment reminders. */
  reminderEnable?: boolean;
  /** Captured payment records. Populated only after successful payment capture. */
  payments?: PaymentRazorpayPaymentLinksApi[];
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  orderId?: string;
  /** Identifier for the user role that created the link. */
  userId?: string;
  createdAt?: number;
  updatedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentLinkProperties: s.Shape<PaymentLink> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayPaymentLinksApiSchema)),
  amount: s.optional(s.int()),
  amountPaid: s.optional(s.int()),
  currency: s.defaulted(s.string(), "INR"),
  acceptPartial: s.optional(s.boolean()),
  firstMinPartialAmount: s.optional(s.int()),
  description: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  expireBy: s.optional(s.int()),
  expiredAt: s.optional(s.int()),
  cancelledAt: s.optional(s.int()),
  status: s.optional(s.lazy(() => statusRazorpayPaymentLinksApiSchema)),
  upiLink: s.optional(s.boolean()),
  shortUrl: s.optional(s.string()),
  callbackUrl: s.optional(s.string()),
  callbackMethod: s.optional(s.lazy(() => callbackMethodSchema)),
  customer: s.optional(s.lazy(() => customerRazorpayPaymentLinksApiSchema)),
  notify: s.optional(s.lazy(() => notifySchema)),
  reminderEnable: s.optional(s.boolean()),
  payments: s.optional(s.array(s.lazy(() => paymentRazorpayPaymentLinksApiSchema))),
  notes: s.optional(s.record(s.string(), s.string())),
  orderId: s.optional(s.string()),
  userId: s.optional(s.string()),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  _keysMap: {
    amountPaid: "amount_paid",
    acceptPartial: "accept_partial",
    firstMinPartialAmount: "first_min_partial_amount",
    referenceId: "reference_id",
    expireBy: "expire_by",
    expiredAt: "expired_at",
    cancelledAt: "cancelled_at",
    upiLink: "upi_link",
    shortUrl: "short_url",
    callbackUrl: "callback_url",
    callbackMethod: "callback_method",
    reminderEnable: "reminder_enable",
    orderId: "order_id",
    userId: "user_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const paymentLinkInternalSchema: Schema<PaymentLink> = s.object<PaymentLink>(paymentLinkProperties, {
  additionalProperties: s.json(),
});

export const paymentLinkSchema: Schema<PaymentLink> = s.lazySchema(() =>
  s.object<PaymentLink>(
    {
      ...paymentLinkProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
