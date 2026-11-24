import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifications1BillV3CreditMemosApiSchema,
  type Classifications1BillV3CreditMemosApi,
} from "./classifications1-bill-v3-credit-memos-api.js";
import {
  convenienceFeeInternalSchema,
  convenienceFeeSchema,
  type ConvenienceFee,
} from "./convenience-fee.js";
import { customerInternalSchema, customerSchema, type Customer } from "./customer.js";
import {
  invoiceUpdateLineItemInternalSchema,
  invoiceUpdateLineItemSchema,
  type InvoiceUpdateLineItem,
} from "./invoice-update-line-item.js";
import { processingOptionsSchema, type ProcessingOptions } from "./processing-options.js";

/** Update an invoice */
export type InvoiceUpdateRequestDto = {
  /**
   * User-generated invoice number. This value can be your chosen number scheme.
   *
   * If you do not set this field, `invoiceNumber` is auto-generated.
   */
  invoiceNumber?: string;
  /**
   * Invoice creation date. This value is in the `yyyy-MM-dd` format.
   *
   * If you do not set this field, `invoiceDate` is set as the date when the invoice is created.
   */
  invoiceDate?: string;
  /**
   * Invoice due date. The value is in the `yyyy-MM-dd` format.
   *
   * If you do not set this field, `dueDate` is set as the date when the invoice is created.
   */
  dueDate?: string;
  paymentTermId?: string;
  customer?: Customer;
  /** Invoice line item information */
  invoiceLineItems?: InvoiceUpdateLineItem[];
  processingOptions?: ProcessingOptions;
  /**
   * BILL-generated ID of the chart of accounts for the invoice payment. The value begins with
   * `0ca`.
   */
  payToChartOfAccountId?: string;
  classifications?: Classifications1BillV3CreditMemosApi;
  /**
   * Credit amount applied to the invoice.
   *
   * BILL applies the credit amount from the total of all the credit memos available for the
   * customer.
   */
  creditAmount?: number;
  /** Set as `true` if the card payment option is enabled for the invoice */
  enableCardPayment?: boolean;
  convenienceFee?: ConvenienceFee;
  /**
   * BILL-generated ID of the `SALES_TAX` item. The value begins with `0ii`. The tax rate is applied
   * to all the invoice line items set as taxable.
   *
   * You can set up a `SALES_TAX` percentage item with `POST /v3/classifications/items`.
   */
  salesTaxItemId?: string;
  /**
   * BILL-generated ID of the invoice PDF. The value begins with `att`.
   *
   * The invoice PDF is sent as an email attachment when you send an invoice to a customer. The
   * invoice PDF also appears when the customer clicks the invoice payment link to complete the
   * invoice payment.
   *
   * **Note**: You can get the list of invoice attachments with `GET
   * /v3/attachments/invoices/{invoiceId}`. All the attachments in the list (including the invoice
   * PDF) are sent as email attachments when you send the invoice to the customer.
   */
  invoicePdfId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceUpdateRequestDtoProperties: s.Shape<InvoiceUpdateRequestDto> = {
  invoiceNumber: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
  dueDate: s.optional(s.dateOnly()),
  paymentTermId: s.optional(s.string()),
  customer: s.optional(s.lazy(() => customerInternalSchema)),
  invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceUpdateLineItemInternalSchema))),
  processingOptions: s.optional(s.lazy(() => processingOptionsSchema)),
  payToChartOfAccountId: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications1BillV3CreditMemosApiSchema)),
  creditAmount: s.optional(s.float64()),
  enableCardPayment: s.optional(s.boolean()),
  convenienceFee: s.optional(s.lazy(() => convenienceFeeInternalSchema)),
  salesTaxItemId: s.optional(s.string()),
  invoicePdfId: s.optional(s.string()),
};

export const invoiceUpdateRequestDtoInternalSchema: Schema<InvoiceUpdateRequestDto> =
  s.object<InvoiceUpdateRequestDto>(invoiceUpdateRequestDtoProperties, { additionalProperties: s.json() });

export const invoiceUpdateRequestDtoSchema: Schema<InvoiceUpdateRequestDto> = s.lazySchema(() =>
  s.object<InvoiceUpdateRequestDto>(
    {
      ...invoiceUpdateRequestDtoProperties,
      invoiceNumber: s.optional(s.string().check(s.maxLength(100))),
      customer: s.optional(s.lazy(() => customerSchema)),
      invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceUpdateLineItemSchema))),
      creditAmount: s.optional(s.float64().check(s.gte(0))),
      convenienceFee: s.optional(s.lazy(() => convenienceFeeSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
