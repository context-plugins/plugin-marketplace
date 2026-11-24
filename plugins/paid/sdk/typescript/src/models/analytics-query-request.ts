import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsQueryRequest = {
  /**
   * A single ClickHouse SELECT (or WITH ... SELECT) statement against the analytics views. Results
   * are automatically scoped to your organization. See GET /schema for the available views and
   * columns.
   */
  query: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsQueryRequestSchema: Schema<AnalyticsQueryRequest> = s.object<AnalyticsQueryRequest>(
  {
    query: s.string(),
  },
  { additionalProperties: s.json() },
);
