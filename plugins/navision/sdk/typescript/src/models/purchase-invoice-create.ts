import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PurchaseInvoiceCreate = {
  invoiceDate?: string;
  vendorId?: string;
  vendorNumber?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purchaseInvoiceCreateProperties: s.Shape<PurchaseInvoiceCreate> = {
  invoiceDate: s.optional(s.dateOnly()),
  vendorId: s.optional(s.string()),
  vendorNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
};

export const purchaseInvoiceCreateInternalSchema: Schema<PurchaseInvoiceCreate> =
  s.object<PurchaseInvoiceCreate>(purchaseInvoiceCreateProperties, { additionalProperties: s.json() });

export const purchaseInvoiceCreateSchema: Schema<PurchaseInvoiceCreate> = s.lazySchema(() =>
  s.object<PurchaseInvoiceCreate>(
    {
      ...purchaseInvoiceCreateProperties,
      vendorNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
