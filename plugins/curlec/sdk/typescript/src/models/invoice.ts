import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayInvoicesApiSchema,
  type EntityRazorpayInvoicesApi,
} from "./entity-razorpay-invoices-api.js";
import { invoiceLineItemSchema, type InvoiceLineItem } from "./invoice-line-item.js";
import {
  statusRazorpayInvoicesApiSchema,
  type StatusRazorpayInvoicesApi,
} from "./status-razorpay-invoices-api.js";
import { typeSchema, type Type } from "./type.js";

/**
 * An invoice or payment page sent to a customer for payment. Cannot be used to create GST invoices
 * (those must be created via the Dashboard).
 */
export type Invoice = {
  /** Invoice ID. Prefix: inv_ */
  id?: string;
  entity?: EntityRazorpayInvoicesApi;
  /** invoice: a formal invoice document. link: a payment page / payment link. */
  type?: Type;
  /** Invoice lifecycle status. draft→issued→paid/partially_paid/cancelled/expired. */
  status?: StatusRazorpayInvoicesApi;
  /** Auto-generated invoice number (e.g. INV-001). */
  invoiceNumber?: string;
  /** Customer ID (cust_*). */
  customerId?: string;
  /** Inline customer details snapshot at time of invoice creation. */
  customer?: Record<string, unknown>;
  /** Associated order ID (order_*). */
  orderId?: string;
  /** Up to 50 line items. */
  lineItems?: InvoiceLineItem[];
  /** Payment ID (pay_*) of the successful payment, if paid. */
  paymentId?: string;
  /** @default "INR" */
  currency?: string;
  /** Sum of all line item amounts before tax (paise). */
  grossAmount?: number;
  /** Total tax amount (paise). */
  taxAmount?: number;
  /** Taxable base amount (paise). */
  taxableAmount?: number;
  /** Total invoice amount including tax (paise). */
  amount?: number;
  /** Amount received so far (paise). Relevant for partial_payment invoices. */
  amountPaid?: number;
  /** Remaining amount due (paise). */
  amountDue?: number;
  /** Hosted payment page URL to send to the customer. */
  shortUrl?: string;
  /** If true, customer can pay any amount ≥ first_payment_min_amount. */
  partialPayment?: boolean;
  /** Minimum amount for the first partial payment (paise). Required when partial_payment=true. */
  firstPaymentMinAmount?: number;
  /** Your internal reference number. */
  receipt?: string;
  description?: string;
  /** Internal comment (not shown on invoice). */
  comment?: string;
  /** Payment terms shown on the invoice. */
  terms?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Unix timestamp after which the invoice expires and cannot be paid. */
  expireBy?: number;
  issuedAt?: number;
  paidAt?: number;
  cancelledAt?: number;
  expiredAt?: number;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceProperties: s.Shape<Invoice> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayInvoicesApiSchema)),
  type: s.optional(s.lazy(() => typeSchema)),
  status: s.optional(s.lazy(() => statusRazorpayInvoicesApiSchema)),
  invoiceNumber: s.optional(s.string()),
  customerId: s.optional(s.string()),
  customer: s.optional(s.record(s.string(), s.unknown())),
  orderId: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => invoiceLineItemSchema))),
  paymentId: s.optional(s.string()),
  currency: s.defaulted(s.string(), "INR"),
  grossAmount: s.optional(s.int()),
  taxAmount: s.optional(s.int()),
  taxableAmount: s.optional(s.int()),
  amount: s.optional(s.int()),
  amountPaid: s.optional(s.int()),
  amountDue: s.optional(s.int()),
  shortUrl: s.optional(s.string()),
  partialPayment: s.optional(s.boolean()),
  firstPaymentMinAmount: s.optional(s.int()),
  receipt: s.optional(s.string()),
  description: s.optional(s.string()),
  comment: s.optional(s.string()),
  terms: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  expireBy: s.optional(s.int()),
  issuedAt: s.optional(s.int()),
  paidAt: s.optional(s.int()),
  cancelledAt: s.optional(s.int()),
  expiredAt: s.optional(s.int()),
  createdAt: s.optional(s.int()),
  _keysMap: {
    invoiceNumber: "invoice_number",
    customerId: "customer_id",
    orderId: "order_id",
    lineItems: "line_items",
    paymentId: "payment_id",
    grossAmount: "gross_amount",
    taxAmount: "tax_amount",
    taxableAmount: "taxable_amount",
    amountPaid: "amount_paid",
    amountDue: "amount_due",
    shortUrl: "short_url",
    partialPayment: "partial_payment",
    firstPaymentMinAmount: "first_payment_min_amount",
    expireBy: "expire_by",
    issuedAt: "issued_at",
    paidAt: "paid_at",
    cancelledAt: "cancelled_at",
    expiredAt: "expired_at",
    createdAt: "created_at",
  },
};

export const invoiceInternalSchema: Schema<Invoice> = s.object<Invoice>(invoiceProperties, {
  additionalProperties: s.json(),
});

export const invoiceSchema: Schema<Invoice> = s.lazySchema(() =>
  s.object<Invoice>(
    {
      ...invoiceProperties,
      lineItems: s.optional(s.array(s.lazy(() => invoiceLineItemSchema)).check(s.maxLength(50))),
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
