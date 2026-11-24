import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsColumnSchema, type AnalyticsColumn } from "./analytics-column.js";
import {
  analyticsQueryResponseMetaSchema,
  type AnalyticsQueryResponseMeta,
} from "./analytics-query-response-meta.js";

export type AnalyticsQueryResponse = {
  columns: AnalyticsColumn[];
  /**
   * Result rows; values are ordered to match `columns`. 64-bit integers (UInt64/Int64 — counts,
   * sums, amounts in cents, ids) are returned as JSON strings to preserve precision; parse them
   * client-side as needed.
   */
  rows: Record<string, unknown>[][];
  meta: AnalyticsQueryResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsQueryResponseSchema: Schema<AnalyticsQueryResponse> = s.object<AnalyticsQueryResponse>(
  {
    columns: s.array(s.lazy(() => analyticsColumnSchema)),
    rows: s.array(s.array(s.record(s.string(), s.unknown()))),
    meta: analyticsQueryResponseMetaSchema,
  },
  { additionalProperties: s.json() },
);
