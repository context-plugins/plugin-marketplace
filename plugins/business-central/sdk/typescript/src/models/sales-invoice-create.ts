import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SalesInvoiceCreate = {
  externalDocumentNumber?: string;
  invoiceDate?: string;
  customerId?: string;
  customerNumber?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const salesInvoiceCreateProperties: s.Shape<SalesInvoiceCreate> = {
  externalDocumentNumber: s.optional(s.string()),
  invoiceDate: s.optional(s.dateOnly()),
  customerId: s.optional(s.string()),
  customerNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
};

export const salesInvoiceCreateInternalSchema: Schema<SalesInvoiceCreate> = s.object<SalesInvoiceCreate>(
  salesInvoiceCreateProperties,
  { additionalProperties: s.json() },
);

export const salesInvoiceCreateSchema: Schema<SalesInvoiceCreate> = s.lazySchema(() =>
  s.object<SalesInvoiceCreate>(
    {
      ...salesInvoiceCreateProperties,
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      customerNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
