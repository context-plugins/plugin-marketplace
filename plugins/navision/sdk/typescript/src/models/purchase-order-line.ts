import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lineTypeSchema, type LineType } from "./line-type.js";

export type PurchaseOrderLine = {
  odataEtag?: string;
  id?: string;
  documentId?: string;
  sequence?: number;
  itemId?: string;
  accountId?: string;
  lineType?: LineType;
  lineObjectNumber?: string;
  description?: string;
  description2?: string;
  unitOfMeasureId?: string;
  unitOfMeasureCode?: string;
  quantity?: number;
  directUnitCost?: number;
  discountAmount?: number;
  discountPercent?: number;
  discountAppliedBeforeTax?: boolean;
  amountExcludingTax?: number;
  taxCode?: string;
  taxPercent?: number;
  totalTaxAmount?: number;
  amountIncludingTax?: number;
  expectedReceiptDate?: string;
  receivedQuantity?: number;
  invoicedQuantity?: number;
  invoiceQuantity?: number;
  receiveQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purchaseOrderLineProperties: s.Shape<PurchaseOrderLine> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  documentId: s.optional(s.string()),
  sequence: s.optional(s.int()),
  itemId: s.optional(s.string()),
  accountId: s.optional(s.string()),
  lineType: s.optional(s.lazy(() => lineTypeSchema)),
  lineObjectNumber: s.optional(s.string()),
  description: s.optional(s.string()),
  description2: s.optional(s.string()),
  unitOfMeasureId: s.optional(s.string()),
  unitOfMeasureCode: s.optional(s.string()),
  quantity: s.optional(s.float64()),
  directUnitCost: s.optional(s.float64()),
  discountAmount: s.optional(s.float64()),
  discountPercent: s.optional(s.float64()),
  discountAppliedBeforeTax: s.optional(s.boolean()),
  amountExcludingTax: s.optional(s.float64()),
  taxCode: s.optional(s.string()),
  taxPercent: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  amountIncludingTax: s.optional(s.float64()),
  expectedReceiptDate: s.optional(s.dateOnly()),
  receivedQuantity: s.optional(s.float64()),
  invoicedQuantity: s.optional(s.float64()),
  invoiceQuantity: s.optional(s.float64()),
  receiveQuantity: s.optional(s.float64()),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const purchaseOrderLineInternalSchema: Schema<PurchaseOrderLine> = s.object<PurchaseOrderLine>(
  purchaseOrderLineProperties,
  { additionalProperties: s.json() },
);

export const purchaseOrderLineSchema: Schema<PurchaseOrderLine> = s.lazySchema(() =>
  s.object<PurchaseOrderLine>(
    {
      ...purchaseOrderLineProperties,
      lineObjectNumber: s.optional(s.string().check(s.maxLength(20))),
      description: s.optional(s.string().check(s.maxLength(100))),
      description2: s.optional(s.string().check(s.maxLength(50))),
      unitOfMeasureCode: s.optional(s.string().check(s.maxLength(10))),
      taxCode: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
