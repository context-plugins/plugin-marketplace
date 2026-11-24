import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  lineTypeDynamics365BusinessCentralApiV20SalesOrdersApiSchema,
  type LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi,
} from "./line-type-dynamics365-business-central-api-v20-sales-orders-api.js";

export type SalesOrderLine = {
  odataEtag?: string;
  id?: string;
  documentId?: string;
  sequence?: number;
  itemId?: string;
  accountId?: string;
  lineType?: LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi;
  lineObjectNumber?: string;
  description?: string;
  description2?: string;
  unitOfMeasureId?: string;
  unitOfMeasureCode?: string;
  quantity?: number;
  unitPrice?: number;
  discountAmount?: number;
  discountPercent?: number;
  discountAppliedBeforeTax?: boolean;
  amountExcludingTax?: number;
  taxCode?: string;
  taxPercent?: number;
  totalTaxAmount?: number;
  amountIncludingTax?: number;
  netAmount?: number;
  netTaxAmount?: number;
  netAmountIncludingTax?: number;
  shipmentDate?: string;
  shippedQuantity?: number;
  invoicedQuantity?: number;
  invoiceQuantity?: number;
  shipQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const salesOrderLineProperties: s.Shape<SalesOrderLine> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  documentId: s.optional(s.string()),
  sequence: s.optional(s.int()),
  itemId: s.optional(s.string()),
  accountId: s.optional(s.string()),
  lineType: s.optional(s.lazy(() => lineTypeDynamics365BusinessCentralApiV20SalesOrdersApiSchema)),
  lineObjectNumber: s.optional(s.string()),
  description: s.optional(s.string()),
  description2: s.optional(s.string()),
  unitOfMeasureId: s.optional(s.string()),
  unitOfMeasureCode: s.optional(s.string()),
  quantity: s.optional(s.float64()),
  unitPrice: s.optional(s.float64()),
  discountAmount: s.optional(s.float64()),
  discountPercent: s.optional(s.float64()),
  discountAppliedBeforeTax: s.optional(s.boolean()),
  amountExcludingTax: s.optional(s.float64()),
  taxCode: s.optional(s.string()),
  taxPercent: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  amountIncludingTax: s.optional(s.float64()),
  netAmount: s.optional(s.float64()),
  netTaxAmount: s.optional(s.float64()),
  netAmountIncludingTax: s.optional(s.float64()),
  shipmentDate: s.optional(s.dateOnly()),
  shippedQuantity: s.optional(s.float64()),
  invoicedQuantity: s.optional(s.float64()),
  invoiceQuantity: s.optional(s.float64()),
  shipQuantity: s.optional(s.float64()),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const salesOrderLineInternalSchema: Schema<SalesOrderLine> = s.object<SalesOrderLine>(
  salesOrderLineProperties,
  { additionalProperties: s.json() },
);

export const salesOrderLineSchema: Schema<SalesOrderLine> = s.lazySchema(() =>
  s.object<SalesOrderLine>(
    {
      ...salesOrderLineProperties,
      lineObjectNumber: s.optional(s.string().check(s.maxLength(20))),
      description: s.optional(s.string().check(s.maxLength(100))),
      description2: s.optional(s.string().check(s.maxLength(50))),
      unitOfMeasureCode: s.optional(s.string().check(s.maxLength(10))),
      taxCode: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
