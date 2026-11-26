import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PurchaseOrderCreate = {
  orderDate?: string;
  vendorId?: string;
  vendorNumber?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  requestedReceiptDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purchaseOrderCreateProperties: s.Shape<PurchaseOrderCreate> = {
  orderDate: s.optional(s.dateOnly()),
  vendorId: s.optional(s.string()),
  vendorNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  requestedReceiptDate: s.optional(s.dateOnly()),
};

export const purchaseOrderCreateInternalSchema: Schema<PurchaseOrderCreate> = s.object<PurchaseOrderCreate>(
  purchaseOrderCreateProperties,
  { additionalProperties: s.json() },
);

export const purchaseOrderCreateSchema: Schema<PurchaseOrderCreate> = s.lazySchema(() =>
  s.object<PurchaseOrderCreate>(
    {
      ...purchaseOrderCreateProperties,
      vendorNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
