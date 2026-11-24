import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDynamics365BusinessCentralApiV20PurchaseInvoicesApiSchema,
  type StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApi,
} from "./status-dynamics365-business-central-api-v20-purchase-invoices-api.js";

export type PurchaseInvoice = {
  id?: string;
  number?: string;
  invoiceDate?: string;
  postingDate?: string;
  dueDate?: string;
  vendorId?: string;
  vendorNumber?: string;
  vendorName?: string;
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

const purchaseInvoiceProperties: s.Shape<PurchaseInvoice> = {
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
  postingDate: s.optional(s.dateOnly()),
  dueDate: s.optional(s.dateOnly()),
  vendorId: s.optional(s.string()),
  vendorNumber: s.optional(s.string()),
  vendorName: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  totalAmountExcludingTax: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  totalAmountIncludingTax: s.optional(s.float64()),
  status: s.optional(s.lazy(() => statusDynamics365BusinessCentralApiV20PurchaseInvoicesApiSchema)),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const purchaseInvoiceInternalSchema: Schema<PurchaseInvoice> = s.object<PurchaseInvoice>(
  purchaseInvoiceProperties,
  { additionalProperties: s.json() },
);

export const purchaseInvoiceSchema: Schema<PurchaseInvoice> = s.lazySchema(() =>
  s.object<PurchaseInvoice>(
    {
      ...purchaseInvoiceProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      vendorNumber: s.optional(s.string().check(s.maxLength(20))),
      vendorName: s.optional(s.string().check(s.maxLength(100))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
