import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerGroupSummarySchema, type CustomerGroupSummary } from "./customer-group-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type CustomerGroupListResponse = {
  data: CustomerGroupSummary[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerGroupListResponseSchema: Schema<CustomerGroupListResponse> =
  s.object<CustomerGroupListResponse>(
    {
      data: s.array(s.lazy(() => customerGroupSummarySchema)),
      pagination: paginationSchema,
    },
    { additionalProperties: s.json() },
  );
