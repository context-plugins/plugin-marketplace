import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoicePaymentStatusSchema, type InvoicePaymentStatus } from "./invoice-payment-status.js";
import { invoiceSourceSchema, type InvoiceSource } from "./invoice-source.js";
import { invoiceStatusSchema, type InvoiceStatus } from "./invoice-status.js";
import { invoiceTaxStatusSchema, type InvoiceTaxStatus } from "./invoice-tax-status.js";

export type Invoice = {
  id: string;
  displayNumber?: string | null;
  orderId?: string | null;
  customerId: string;
  status: InvoiceStatus;
  paymentStatus: InvoicePaymentStatus;
  source: InvoiceSource;
  startDate: Date;
  endDate?: Date | null;
  issueDate: Date;
  postedDate?: Date | null;
  dueDate?: Date | null;
  currency: string;
  taxAmount: number;
  taxRate: number;
  taxStatus: InvoiceTaxStatus;
  invoiceTotalExcludingTax: number;
  invoiceTotal: number;
  amountDue: number;
  amountPaid: number;
  amountRemaining: number;
  creditNotesTotal: number;
  metadata?: Record<string, unknown> | null;
  createdAt: Date;
  updatedAt: Date;
  paymentLink?: string | null;
  disputeLink?: string | null;
  publicUrlToken?: string | null;
  taxExempt: boolean;
  billingContactId?: string | null;
  /** Purchase order reference stamped on this invoice. */
  purchaseOrderReference?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceSchema: Schema<Invoice> = s.object<Invoice>(
  {
    id: s.string(),
    displayNumber: s.optionalNullable(s.string()),
    orderId: s.optionalNullable(s.string()),
    customerId: s.string(),
    status: invoiceStatusSchema,
    paymentStatus: invoicePaymentStatusSchema,
    source: invoiceSourceSchema,
    startDate: s.dateTime(),
    endDate: s.optionalNullable(s.dateTime()),
    issueDate: s.dateTime(),
    postedDate: s.optionalNullable(s.dateTime()),
    dueDate: s.optionalNullable(s.dateTime()),
    currency: s.string(),
    taxAmount: s.float64(),
    taxRate: s.float64(),
    taxStatus: invoiceTaxStatusSchema,
    invoiceTotalExcludingTax: s.float64(),
    invoiceTotal: s.float64(),
    amountDue: s.float64(),
    amountPaid: s.float64(),
    amountRemaining: s.float64(),
    creditNotesTotal: s.float64(),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    paymentLink: s.optionalNullable(s.string()),
    disputeLink: s.optionalNullable(s.string()),
    publicUrlToken: s.optionalNullable(s.string()),
    taxExempt: s.boolean(),
    billingContactId: s.optionalNullable(s.string()),
    purchaseOrderReference: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
