import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { salesInvoiceDiscount3Schema, type SalesInvoiceDiscount3 } from "./sales-invoice-discount3.js";
import {
  salesInvoiceEmailDetails1Schema,
  type SalesInvoiceEmailDetails1,
} from "./sales-invoice-email-details1.js";
import { salesInvoiceLineItemSchema, type SalesInvoiceLineItem } from "./sales-invoice-line-item.js";
import {
  salesInvoicePaymentDetails1Schema,
  type SalesInvoicePaymentDetails1,
} from "./sales-invoice-payment-details1.js";
import { salesInvoicePaymentTermSchema, type SalesInvoicePaymentTerm } from "./sales-invoice-payment-term.js";
import { salesInvoiceRecipient1Schema, type SalesInvoiceRecipient1 } from "./sales-invoice-recipient1.js";
import {
  salesInvoiceStatusUpdate1Schema,
  type SalesInvoiceStatusUpdate1,
} from "./sales-invoice-status-update1.js";

export type UpdateValuesSalesInvoice = {
  /**
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null;
  /**
   * The status for the invoice to end up in.
   *
   * Dependent parameters: `paymentDetails` for `paid`, `emailDetails` for `issued` and `paid`.
   *
   * To cancel a `paid` invoice, first set the status to `payment-reversed`, then set it to
   * `cancelled`.
   */
  status?: SalesInvoiceStatusUpdate1;
  /** A free-form memo you can set on the invoice, and will be shown on the invoice PDF. */
  memo?: string | null;
  /** The payment term to be set on the invoice. */
  paymentTerm?: SalesInvoicePaymentTerm | null;
  /**
   * Used when setting an invoice to status of `paid`, and will store a payment that fully pays the
   * invoice with the provided details. Required for `paid` status.
   */
  paymentDetails?: SalesInvoicePaymentDetails1;
  /**
   * Used when setting an invoice to status of either `issued` or `paid`. Will be used to issue the
   * invoice to the recipient with the provided `subject` and `body`. Required for `issued` status.
   */
  emailDetails?: SalesInvoiceEmailDetails1 | null;
  /**
   * An identifier tied to the recipient data. This should be a unique value based on data your
   * system contains, so that both you and us know who we're referring to. It is a value you provide
   * to us so that recipient management is not required to send a first invoice to a recipient.
   */
  recipientIdentifier?: string;
  /**
   * The recipient object should contain all the information relevant to create an invoice for an
   * intended recipient. This data will be stored, updated, and re-used as appropriate, based on the
   * `recipientIdentifier`.
   */
  recipient?: SalesInvoiceRecipient1 | null;
  /**
   * Provide the line items for the invoice. Each line contains details such as a description of the
   * item ordered and its price.
   *
   * All lines must have the same currency as the invoice.
   */
  lines?: SalesInvoiceLineItem[] | null;
  /**
   * The discount to be applied to the entire invoice, possibly on top of the line item discounts.
   */
  discount?: SalesInvoiceDiscount3 | null;
  /**
   * This indicates whether the invoice is an e-invoice. The default value is `false` and can't be
   * changed after the invoice has been issued. When `emailDetails` is provided, an additional email
   * is sent to the recipient.
   *
   * E-invoicing is only available for merchants based in Belgium, Germany, and the Netherlands, and
   * only when the recipient is also located in one of these countries.
   *
   * When set to true, the invoice will be delivered via the Peppol network. In this case, the
   * `organizationNumber` or `vatNumber` provided must match the identifier the recipient is
   * actually registered with on Peppol, otherwise delivery will fail. Note: for recipients in
   * Germany, the `vatNumber` is the required identifier for Peppol registration.
   */
  isEInvoice?: boolean;
};

export const updateValuesSalesInvoiceSchema: Schema<UpdateValuesSalesInvoice> =
  s.object<UpdateValuesSalesInvoice>({
    testmode: s.optionalNullable(s.boolean()),
    status: s.optional(s.lazy(() => salesInvoiceStatusUpdate1Schema)),
    memo: s.optionalNullable(s.string()),
    paymentTerm: s.optionalNullable(s.lazy(() => salesInvoicePaymentTermSchema)),
    paymentDetails: s.optional(s.lazy(() => salesInvoicePaymentDetails1Schema)),
    emailDetails: s.optionalNullable(s.lazy(() => salesInvoiceEmailDetails1Schema)),
    recipientIdentifier: s.optional(s.string()),
    recipient: s.optionalNullable(s.lazy(() => salesInvoiceRecipient1Schema)),
    lines: s.optionalNullable(s.array(s.lazy(() => salesInvoiceLineItemSchema))),
    discount: s.optionalNullable(s.lazy(() => salesInvoiceDiscount3Schema)),
    isEInvoice: s.optional(s.boolean()),
  });
