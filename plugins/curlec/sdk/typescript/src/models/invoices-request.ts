import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerRazorpayInvoicesApiSchema,
  type CustomerRazorpayInvoicesApi,
} from "./customer-razorpay-invoices-api.js";
import {
  lineItemRazorpayInvoicesApiSchema,
  type LineItemRazorpayInvoicesApi,
} from "./line-item-razorpay-invoices-api.js";
import { type2Schema, type Type2 } from "./type2.js";

export type InvoicesRequest = {
  /** invoice: formal invoice; link: payment page. */
  type: Type2;
  description?: string;
  /** Existing customer ID (cust_*). Provide this OR customer object, not both. */
  customerId?: string;
  /** Inline customer details. Used when no customer_id is available. */
  customer?: CustomerRazorpayInvoicesApi;
  /**
   * Invoice line items. Each item must have name and amount (in paise), or an item_id to reference
   * a catalog item.
   */
  lineItems?: LineItemRazorpayInvoicesApi[];
  /** @default "INR" */
  currency?: string;
  /** Your internal reference number. */
  receipt?: string;
  comment?: string;
  /** Payment terms shown on the invoice. */
  terms?: string;
  /** Allow customer to pay a partial amount initially. */
  partialPayment?: boolean;
  /** Minimum first payment amount in paise. Required when partial_payment=true. */
  firstPaymentMinAmount?: number;
  /** Unix timestamp after which the invoice expires. Must be at least 15 minutes in the future. */
  expireBy?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoicesRequestProperties: s.Shape<InvoicesRequest> = {
  type: type2Schema,
  description: s.optional(s.string()),
  customerId: s.optional(s.string()),
  customer: s.optional(s.lazy(() => customerRazorpayInvoicesApiSchema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemRazorpayInvoicesApiSchema))),
  currency: s.defaulted(s.string(), "INR"),
  receipt: s.optional(s.string()),
  comment: s.optional(s.string()),
  terms: s.optional(s.string()),
  partialPayment: s.optional(s.boolean()),
  firstPaymentMinAmount: s.optional(s.int()),
  expireBy: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    customerId: "customer_id",
    lineItems: "line_items",
    partialPayment: "partial_payment",
    firstPaymentMinAmount: "first_payment_min_amount",
    expireBy: "expire_by",
  },
};

export const invoicesRequestInternalSchema: Schema<InvoicesRequest> = s.object<InvoicesRequest>(
  invoicesRequestProperties,
  { additionalProperties: s.json() },
);

export const invoicesRequestSchema: Schema<InvoicesRequest> = s.lazySchema(() =>
  s.object<InvoicesRequest>(
    {
      ...invoicesRequestProperties,
      lineItems: s.optional(s.array(s.lazy(() => lineItemRazorpayInvoicesApiSchema)).check(s.maxLength(50))),
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
