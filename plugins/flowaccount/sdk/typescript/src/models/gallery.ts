import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { journalEntryInternalSchema, journalEntrySchema, type JournalEntry } from "./journal-entry.js";
import { mediaInternalSchema, mediaSchema, type Media } from "./media.js";
import { productListInternalSchema, productListSchema, type ProductList } from "./product-list.js";
import {
  receivableInvoiceInternalSchema,
  receivableInvoiceSchema,
  type ReceivableInvoice,
} from "./receivable-invoice.js";
import {
  supplierInvoiceInternalSchema,
  supplierInvoiceSchema,
  type SupplierInvoice,
} from "./supplier-invoice.js";

export type Gallery = {
  id?: number;
  name?: string | null;
  description?: string | null;
  productList?: ProductList[] | null;
  media?: Media[] | null;
  journalEntry?: JournalEntry[] | null;
  receivableInvoice?: ReceivableInvoice[] | null;
  supplierInvoice?: SupplierInvoice[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const galleryProperties: s.Shape<Gallery> = {
  id: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  productList: s.optionalNullable(s.array(s.lazy(() => productListInternalSchema))),
  media: s.optionalNullable(s.array(s.lazy(() => mediaInternalSchema))),
  journalEntry: s.optionalNullable(s.array(s.lazy(() => journalEntryInternalSchema))),
  receivableInvoice: s.optionalNullable(s.array(s.lazy(() => receivableInvoiceInternalSchema))),
  supplierInvoice: s.optionalNullable(s.array(s.lazy(() => supplierInvoiceInternalSchema))),
};

export const galleryInternalSchema: Schema<Gallery> = s.object<Gallery>(galleryProperties, {
  additionalProperties: s.json(),
});

export const gallerySchema: Schema<Gallery> = s.lazySchema(() =>
  s.object<Gallery>(
    {
      ...galleryProperties,
      description: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
      productList: s.optionalNullable(s.array(s.lazy(() => productListSchema))),
      media: s.optionalNullable(s.array(s.lazy(() => mediaSchema))),
      journalEntry: s.optionalNullable(s.array(s.lazy(() => journalEntrySchema))),
      receivableInvoice: s.optionalNullable(s.array(s.lazy(() => receivableInvoiceSchema))),
      supplierInvoice: s.optionalNullable(s.array(s.lazy(() => supplierInvoiceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
