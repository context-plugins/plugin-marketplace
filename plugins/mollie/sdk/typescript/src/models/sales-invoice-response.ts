import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountDueSchema, type AmountDue } from "./amount-due.js";
import {
  discountedSubtotalAmountSchema,
  type DiscountedSubtotalAmount,
} from "./discounted-subtotal-amount.js";
import { links26Schema, type Links26 } from "./links26.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  salesInvoiceDiscountResponse1Schema,
  type SalesInvoiceDiscountResponse1,
} from "./sales-invoice-discount-response1.js";
import {
  salesInvoiceEInvoiceStatusSchema,
  type SalesInvoiceEInvoiceStatus,
} from "./sales-invoice-einvoice-status.js";
import {
  salesInvoiceEmailDetails1Schema,
  type SalesInvoiceEmailDetails1,
} from "./sales-invoice-email-details1.js";
import {
  salesInvoiceLineItemResponseSchema,
  type SalesInvoiceLineItemResponse,
} from "./sales-invoice-line-item-response.js";
import {
  salesInvoicePaymentDetailsResponseSchema,
  type SalesInvoicePaymentDetailsResponse,
} from "./sales-invoice-payment-details-response.js";
import {
  salesInvoicePaymentTermResponseSchema,
  type SalesInvoicePaymentTermResponse,
} from "./sales-invoice-payment-term-response.js";
import {
  salesInvoiceRecipientResponseSchema,
  type SalesInvoiceRecipientResponse,
} from "./sales-invoice-recipient-response.js";
import {
  salesInvoiceStatusResponseSchema,
  type SalesInvoiceStatusResponse,
} from "./sales-invoice-status-response.js";
import {
  salesInvoiceVatModeResponseSchema,
  type SalesInvoiceVatModeResponse,
} from "./sales-invoice-vat-mode-response.js";
import {
  salesInvoiceVatSchemeResponseSchema,
  type SalesInvoiceVatSchemeResponse,
} from "./sales-invoice-vat-scheme-response.js";
import { subtotalAmountSchema, type SubtotalAmount } from "./subtotal-amount.js";
import { totalAmountSchema, type TotalAmount } from "./total-amount.js";
import { totalVatAmountSchema, type TotalVatAmount } from "./total-vat-amount.js";

export type SalesInvoiceResponse = {
  /**
   * Indicates the response contains a sales invoice object. Will always contain the string
   * `sales-invoice` for this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this invoice. Example: `invoice_4Y0eZitmBnQ6IDoMqZQKh`.
   */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /** When issued, an invoice number will be set for the sales invoice. */
  invoiceNumber?: string | null;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` must not be
   * sent in the creation request. For organization-level credentials such as OAuth access tokens
   * however, the `profileId` parameter is required.
   */
  profileId?: string | null;
  /** The current status of the invoice. */
  status?: SalesInvoiceStatusResponse;
  /** The e-invoice submission status for the invoice, if it was configured to be an e-invoice. */
  eInvoiceStatus?: SalesInvoiceEInvoiceStatus;
  /**
   * The VAT scheme to create the invoice for. You must be enrolled with One Stop Shop enabled to
   * use it.
   */
  vatScheme?: SalesInvoiceVatSchemeResponse;
  /**
   * The VAT mode to use for VAT calculation. `exclusive` mode means we will apply the relevant VAT
   * on top of the price. `inclusive` means the prices you are providing to us already contain the
   * VAT you want to apply.
   */
  vatMode?: SalesInvoiceVatModeResponse;
  /** A free-form memo you can set on the invoice, and will be shown on the invoice PDF. */
  memo?: string | null;
  /**
   * Provide any data you like as a JSON object. We will save the data alongside the entity.
   * Whenever you fetch the entity with our API, we will also include the metadata. You can use up
   * to approximately 1kB.
   */
  metadata?: Record<string, unknown> | null;
  /** The payment term to be set on the invoice. */
  paymentTerm?: SalesInvoicePaymentTermResponse | null;
  /**
   * Used when setting an invoice to status of `paid`, and will store a payment that fully pays the
   * invoice with the provided details. Required for `paid` status.
   */
  paymentDetails?: SalesInvoicePaymentDetailsResponse[];
  /**
   * Used when setting an invoice to status of either `issued` or `paid`. Will be used to issue the
   * invoice to the recipient with the provided `subject` and `body`. Required for `issued` status.
   */
  emailDetails?: SalesInvoiceEmailDetails1 | null;
  /**
   * The identifier referring to the [customer](get-customer) you want to attempt an automated
   * payment for. If provided, `mandateId` becomes required as well. Only allowed for invoices with
   * status `paid`.
   */
  customerId?: string;
  /**
   * The identifier referring to the [mandate](get-mandate) you want to use for the automated
   * payment. If provided, `customerId` becomes required as well. Only allowed for invoices with
   * status `paid`.
   */
  mandateId?: string;
  /**
   * An identifier tied to the recipient data. This should be a unique value based on data your
   * system contains, so that both you and us know who we're referring to. It is a value you provide
   * to us so that recipient management is not required to send a first invoice to a recipient.
   */
  recipientIdentifier?: string;
  recipient?: SalesInvoiceRecipientResponse | null;
  /**
   * Provide the line items for the invoice. Each line contains details such as a description of the
   * item ordered and its price.
   *
   * All lines must have the same currency as the invoice.
   */
  lines?: SalesInvoiceLineItemResponse[] | null;
  /**
   * The discount to be applied to the entire invoice, applied on top of any line item discounts.
   */
  discount?: SalesInvoiceDiscountResponse1 | null;
  /**
   * This indicates whether the invoice is an e-invoice. The default value is `false` and can't be
   * changed after the invoice has been issued. When `emailDetails` is provided, an additional email
   * is sent to the recipient.
   *
   * E-invoicing is only available for merchants based in Belgium, Germany, and the Netherlands, and
   * only when the recipient is also located in one of these countries.
   *
   * When set to true, the invoice will be delivered via the Peppol network. In this case, the
   * organizationNumber or vatNumber provided must match the identifier the recipient is actually
   * registered with on Peppol, otherwise delivery will fail. Note: for recipients in Germany, the
   * vatNumber is the required identifier for Peppol registration.
   */
  isEInvoice?: boolean;
  amountDue?: AmountDue;
  subtotalAmount?: SubtotalAmount;
  totalAmount?: TotalAmount;
  totalVatAmount?: TotalVatAmount;
  discountedSubtotalAmount?: DiscountedSubtotalAmount;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * If issued, the date when the sales invoice was issued, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  issuedAt?: string | null;
  /**
   * If paid, the date when the sales invoice was paid, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  paidAt?: string | null;
  /**
   * If issued, the date when the sales invoice payment is due, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dueAt?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links26;
};

export const salesInvoiceResponseSchema: Schema<SalesInvoiceResponse> = s.object<SalesInvoiceResponse>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  testmode: s.optionalNullable(s.boolean()),
  invoiceNumber: s.optionalNullable(s.string()),
  profileId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => salesInvoiceStatusResponseSchema)),
  eInvoiceStatus: s.optional(s.lazy(() => salesInvoiceEInvoiceStatusSchema)),
  vatScheme: s.optional(s.lazy(() => salesInvoiceVatSchemeResponseSchema)),
  vatMode: s.optional(s.lazy(() => salesInvoiceVatModeResponseSchema)),
  memo: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  paymentTerm: s.optionalNullable(s.lazy(() => salesInvoicePaymentTermResponseSchema)),
  paymentDetails: s.optional(s.array(s.lazy(() => salesInvoicePaymentDetailsResponseSchema))),
  emailDetails: s.optionalNullable(s.lazy(() => salesInvoiceEmailDetails1Schema)),
  customerId: s.optional(s.string()),
  mandateId: s.optional(s.string()),
  recipientIdentifier: s.optional(s.string()),
  recipient: s.optionalNullable(s.lazy(() => salesInvoiceRecipientResponseSchema)),
  lines: s.optionalNullable(s.array(s.lazy(() => salesInvoiceLineItemResponseSchema))),
  discount: s.optionalNullable(s.lazy(() => salesInvoiceDiscountResponse1Schema)),
  isEInvoice: s.optional(s.boolean()),
  amountDue: s.optional(s.lazy(() => amountDueSchema)),
  subtotalAmount: s.optional(s.lazy(() => subtotalAmountSchema)),
  totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
  totalVatAmount: s.optional(s.lazy(() => totalVatAmountSchema)),
  discountedSubtotalAmount: s.optional(s.lazy(() => discountedSubtotalAmountSchema)),
  createdAt: s.optional(s.string()),
  issuedAt: s.optionalNullable(s.string()),
  paidAt: s.optionalNullable(s.string()),
  dueAt: s.optionalNullable(s.string()),
  links: s.optional(s.lazy(() => links26Schema)),
  _keysMap: {
    links: "_links",
  },
});
