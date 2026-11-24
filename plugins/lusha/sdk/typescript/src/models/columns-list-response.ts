import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnSummarySchema, type ColumnSummary } from "./column-summary.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

/** Response for List Columns — `data` is a bare array of ColumnDto. */
export type ColumnsListResponse = {
  data?: ColumnSummary[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnsListResponseSchema: Schema<ColumnsListResponse> = s.object<ColumnsListResponse>(
  {
    data: s.optional(s.array(s.lazy(() => columnSummarySchema))),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
