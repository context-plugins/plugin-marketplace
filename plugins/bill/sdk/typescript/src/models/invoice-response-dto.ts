import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifications1BillV3CreditMemosApiSchema,
  type Classifications1BillV3CreditMemosApi,
} from "./classifications1-bill-v3-credit-memos-api.js";
import { convenienceFee1Schema, type ConvenienceFee1 } from "./convenience-fee1.js";
import { invoicePaymentSchema, type InvoicePayment } from "./invoice-payment.js";
import { invoiceRecordStatusSchema, type InvoiceRecordStatus } from "./invoice-record-status.js";
import { invoiceResponseLineItemSchema, type InvoiceResponseLineItem } from "./invoice-response-line-item.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";

/** Invoices response. */
export type InvoiceResponseDto = {
  /** BILL-generated ID of the invoice. The value begins with `00e`. */
  id?: string;
  /** Set as `true` if the invoice is archived */
  archived?: boolean;
  recordStatus?: InvoiceRecordStatus;
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
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** Name of the customer the invoice is issued to. */
  customerName?: string;
  /** Invoice total amount */
  totalAmount?: number;
  /**
   * Invoice due amount. The value is calculated by subtracting any applied credits
   * (`creditAmount`), scheduled payment (`scheduledAmount`), and cleared payment from
   * `totalAmount`.
   */
  dueAmount?: number;
  /**
   * Invoice scheduled amount. The value is set as the customer payment amount that is pending
   * clearance.
   */
  scheduledAmount?: number;
  /**
   * Credit amount applied to the invoice.
   *
   * When a credit amount is applied to an invoice, the invoice `status` is set as `PARTIAL_PAYMENT`
   * or `PAID_IN_FULL` depending on the invoice `totalAmount`.
   */
  creditAmount?: number;
  status?: InvoiceStatus;
  /** Invoice exchange rate */
  exchangeRate?: number;
  /** BILL-generated ID of the user that created the invoice. The value begins with `006`. */
  createdBy?: string;
  /** Invoice created time */
  createdTime?: Date;
  /** Invoice updated time */
  updatedTime?: Date;
  /** Invoice line item information */
  invoiceLineItems?: InvoiceResponseLineItem[];
  /**
   * BILL-generated ID of the chart of accounts for the invoice payment. The value begins with
   * `0ca`.
   */
  payToChartOfAccountId?: string;
  /** Invoice payments information */
  payments?: InvoicePayment[];
  classifications?: Classifications1BillV3CreditMemosApi;
  /**
   * BILL-generated ID of the `SALES_TAX` item. The value begins with `0ii`. The tax rate is applied
   * to all the invoice line items set as taxable.
   */
  salesTaxItemId?: string;
  /** Invoice sales tax amount. The value is set based on `salesTaxItemId`. */
  salesTaxTotal?: number;
  /** Invoice sales tax percentage. The value is set based on `salesTaxItemId`. */
  salesTaxPercentage?: number;
  /** Set as `true` if the card payment option is enabled for the invoice */
  enableCardPayment?: boolean;
  convenienceFee?: ConvenienceFee1;
  /**
   * BILL-generated ID of the invoice PDF. The value begins with `att`.
   *
   * The invoice PDF is sent as an email attachment when you send an invoice to a customer. The
   * invoice PDF also appears when the customer clicks the invoice payment link to complete the
   * invoice payment.
   */
  invoicePdfId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceResponseDtoSchema: Schema<InvoiceResponseDto> = s.object<InvoiceResponseDto>(
  {
    id: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    recordStatus: s.optional(s.lazy(() => invoiceRecordStatusSchema)),
    invoiceNumber: s.optional(s.string()),
    invoiceDate: s.optional(s.dateOnly()),
    dueDate: s.optional(s.dateOnly()),
    paymentTermId: s.optional(s.string()),
    customerId: s.optional(s.string()),
    customerName: s.optional(s.string()),
    totalAmount: s.optional(s.float64()),
    dueAmount: s.optional(s.float64()),
    scheduledAmount: s.optional(s.float64()),
    creditAmount: s.optional(s.float64()),
    status: s.optional(s.lazy(() => invoiceStatusSchema)),
    exchangeRate: s.optional(s.float64()),
    createdBy: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceResponseLineItemSchema))),
    payToChartOfAccountId: s.optional(s.string()),
    payments: s.optional(s.array(s.lazy(() => invoicePaymentSchema))),
    classifications: s.optional(s.lazy(() => classifications1BillV3CreditMemosApiSchema)),
    salesTaxItemId: s.optional(s.string()),
    salesTaxTotal: s.optional(s.float64()),
    salesTaxPercentage: s.optional(s.float64()),
    enableCardPayment: s.optional(s.boolean()),
    convenienceFee: s.optional(s.lazy(() => convenienceFee1Schema)),
    invoicePdfId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
