import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableMetadataInternalSchema, tableMetadataSchema, type TableMetadata } from "./table-metadata.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import { v3PaginationResponseSchema, type V3PaginationResponse } from "./v3-pagination-response.js";

export type TableListResponse = {
  data?: TableMetadata[];
  pagination?: V3PaginationResponse;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableListResponseProperties: s.Shape<TableListResponse> = {
  data: s.optional(s.array(s.lazy(() => tableMetadataInternalSchema))),
  pagination: s.optional(s.lazy(() => v3PaginationResponseSchema)),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const tableListResponseInternalSchema: Schema<TableListResponse> = s.object<TableListResponse>(
  tableListResponseProperties,
  { additionalProperties: s.json() },
);

export const tableListResponseSchema: Schema<TableListResponse> = s.lazySchema(() =>
  s.object<TableListResponse>(
    {
      ...tableListResponseProperties,
      data: s.optional(s.array(s.lazy(() => tableMetadataSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
