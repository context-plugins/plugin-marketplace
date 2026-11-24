import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationDidlogicComPurchasesApiSchema,
  type PaginationDidlogicComPurchasesApi,
} from "./pagination-didlogic-com-purchases-api.js";
import {
  purchaseDidlogicComPurchasesApiSchema,
  type PurchaseDidlogicComPurchasesApi,
} from "./purchase-didlogic-com-purchases-api.js";

export type ApiV1PurchasesResponse = {
  /** List of purchased DID numbers */
  purchases: PurchaseDidlogicComPurchasesApi[];
  pagination: PaginationDidlogicComPurchasesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PurchasesResponseSchema: Schema<ApiV1PurchasesResponse> = s.object<ApiV1PurchasesResponse>(
  {
    purchases: s.array(s.lazy(() => purchaseDidlogicComPurchasesApiSchema)),
    pagination: paginationDidlogicComPurchasesApiSchema,
  },
  { additionalProperties: s.json() },
);
