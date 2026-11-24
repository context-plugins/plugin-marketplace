import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import {
  invoiceStatusPaidOrdersApiSchema,
  type InvoiceStatusPaidOrdersApi,
} from "./invoice-status-paid-orders-api.js";

/** An invoice for an order */
export type InvoicePaidOrdersApi = {
  id?: string;
  /** Human-readable invoice number */
  displayId?: string;
  organizationId?: string;
  customerId?: string;
  orderId?: string;
  status?: InvoiceStatusPaidOrdersApi;
  currency?: string;
  /** Total before tax (in smallest currency unit) */
  subtotal?: number;
  /** Tax amount (in smallest currency unit) */
  tax?: number;
  /** Total amount including tax (in smallest currency unit) */
  total?: number;
  /** Amount already paid (in smallest currency unit) */
  amountPaid?: number;
  /** Amount still due (in smallest currency unit) */
  amountDue?: number;
  dueDate?: Date;
  paidAt?: Date | null;
  voidedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  customer?: Customer;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePaidOrdersApiSchema: Schema<InvoicePaidOrdersApi> = s.object<InvoicePaidOrdersApi>(
  {
    id: s.optional(s.string()),
    displayId: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    customerId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    status: s.optional(s.lazy(() => invoiceStatusPaidOrdersApiSchema)),
    currency: s.optional(s.string()),
    subtotal: s.optional(s.float64()),
    tax: s.optional(s.float64()),
    total: s.optional(s.float64()),
    amountPaid: s.optional(s.float64()),
    amountDue: s.optional(s.float64()),
    dueDate: s.optional(s.dateTime()),
    paidAt: s.optionalNullable(s.dateTime()),
    voidedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    customer: s.optional(s.lazy(() => customerSchema)),
  },
  { additionalProperties: s.json() },
);
