import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  purchaseOrderLineInternalSchema,
  purchaseOrderLineSchema,
  type PurchaseOrderLine,
} from "./purchase-order-line.js";

export type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse = {
  value?: PurchaseOrderLine[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseProperties: s.Shape<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse> =
  {
    value: s.optional(s.array(s.lazy(() => purchaseOrderLineInternalSchema))),
  };

export const companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseInternalSchema: Schema<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse> =
  s.object<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse>(
    companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseProperties,
    { additionalProperties: s.json() },
  );

export const companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseSchema: Schema<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse>(
      {
        ...companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseProperties,
        value: s.optional(s.array(s.lazy(() => purchaseOrderLineSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
