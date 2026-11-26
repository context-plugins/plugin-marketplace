import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purchaseOrderInternalSchema, purchaseOrderSchema, type PurchaseOrder } from "./purchase-order.js";

export type CompaniesApiPurchaseOrdersResponse = {
  value?: PurchaseOrder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiPurchaseOrdersResponseProperties: s.Shape<CompaniesApiPurchaseOrdersResponse> = {
  value: s.optional(s.array(s.lazy(() => purchaseOrderInternalSchema))),
};

export const companiesApiPurchaseOrdersResponseInternalSchema: Schema<CompaniesApiPurchaseOrdersResponse> =
  s.object<CompaniesApiPurchaseOrdersResponse>(companiesApiPurchaseOrdersResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiPurchaseOrdersResponseSchema: Schema<CompaniesApiPurchaseOrdersResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiPurchaseOrdersResponse>(
      {
        ...companiesApiPurchaseOrdersResponseProperties,
        value: s.optional(s.array(s.lazy(() => purchaseOrderSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
