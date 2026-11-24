import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDynamics365BusinessCentralApiV20PurchaseInvoicesApiSchema,
  type StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi,
} from "./status-dynamics365-business-central-api-v20-purchase-invoices-api.js";

export type SalesInvoice = {
  id?: string;
  number?: string;
  externalDocumentNumber?: string;
  invoiceDate?: string;
  postingDate?: string;
  dueDate?: string;
  customerId?: string;
  customerNumber?: string;
  customerName?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  totalAmountExcludingTax?: number;
  totalTaxAmount?: number;
  totalAmountIncludingTax?: number;
  status?: StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const salesInvoiceProperties: s.Shape<SalesInvoice> = {
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  externalDocumentNumber: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
  postingDate: s.optional(s.dateOnly()),
  dueDate: s.optional(s.dateOnly()),
  customerId: s.optional(s.string()),
  customerNumber: s.optional(s.string()),
  customerName: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  totalAmountExcludingTax: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  totalAmountIncludingTax: s.optional(s.float64()),
  status: s.optional(s.lazy(() => statusDynamics365BusinessCentralApiV20PurchaseInvoicesApiSchema)),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const salesInvoiceInternalSchema: Schema<SalesInvoice> = s.object<SalesInvoice>(
  salesInvoiceProperties,
  { additionalProperties: s.json() },
);

export const salesInvoiceSchema: Schema<SalesInvoice> = s.lazySchema(() =>
  s.object<SalesInvoice>(
    {
      ...salesInvoiceProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      customerNumber: s.optional(s.string().check(s.maxLength(20))),
      customerName: s.optional(s.string().check(s.maxLength(100))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
