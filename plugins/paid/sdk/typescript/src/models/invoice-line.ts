import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  invoiceLinePaymentStatusSchema,
  type InvoiceLinePaymentStatus,
} from "./invoice-line-payment-status.js";

export type InvoiceLine = {
  id: string;
  orderId: string | null;
  orderLineId: string | null;
  orderLineAttributeId: string | null;
  startDate: Date;
  endDate: Date;
  paymentStatus: InvoiceLinePaymentStatus;
  quantity: number;
  totalPriceBeforeTax: number;
  tax: number;
  taxRate: number;
  totalPriceAfterTax: number;
  currency: string;
  description: string;
  balanceAmount: number;
  creditedAmount: number;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceLineSchema: Schema<InvoiceLine> = s.object<InvoiceLine>(
  {
    id: s.string(),
    orderId: s.nullable(s.string()),
    orderLineId: s.nullable(s.string()),
    orderLineAttributeId: s.nullable(s.string()),
    startDate: s.dateTime(),
    endDate: s.dateTime(),
    paymentStatus: invoiceLinePaymentStatusSchema,
    quantity: s.int(),
    totalPriceBeforeTax: s.float64(),
    tax: s.float64(),
    taxRate: s.float64(),
    totalPriceAfterTax: s.float64(),
    currency: s.string(),
    description: s.string(),
    balanceAmount: s.float64(),
    creditedAmount: s.float64(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
