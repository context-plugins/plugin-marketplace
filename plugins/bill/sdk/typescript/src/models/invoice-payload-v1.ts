import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** invoice transformed payload. */
export type InvoicePayloadV1 = {
  id?: string;
  customerId?: string;
  invoiceNumber?: string;
  archived?: boolean;
  totalAmount?: number;
  dueAmount?: number;
  scheduledAmount?: number;
  creditAmount?: number;
  invoiceDate?: string;
  dueDate?: string;
  createdBy?: string;
  createdTime?: Date;
  updatedTime?: Date;
  payToChartOfAccountId?: string;
  salesTaxPercentage?: number;
  salesTaxTotal?: number;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePayloadV1Schema: Schema<InvoicePayloadV1> = s.object<InvoicePayloadV1>(
  {
    id: s.optional(s.string()),
    customerId: s.optional(s.string()),
    invoiceNumber: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    totalAmount: s.optional(s.float64()),
    dueAmount: s.optional(s.float64()),
    scheduledAmount: s.optional(s.float64()),
    creditAmount: s.optional(s.float64()),
    invoiceDate: s.optional(s.dateOnly()),
    dueDate: s.optional(s.dateOnly()),
    createdBy: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    payToChartOfAccountId: s.optional(s.string()),
    salesTaxPercentage: s.optional(s.float64()),
    salesTaxTotal: s.optional(s.float64()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
