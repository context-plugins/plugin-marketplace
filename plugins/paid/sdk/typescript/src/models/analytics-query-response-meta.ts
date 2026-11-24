import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsQueryResponseMeta = {
  rowCount: number;
  elapsedMs: number;
  /**
   * True when the result hit the row cap and was truncated. Narrow the query (shorter date range,
   * LIMIT, coarser grouping) to see the rest.
   */
  truncated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsQueryResponseMetaSchema: Schema<AnalyticsQueryResponseMeta> =
  s.object<AnalyticsQueryResponseMeta>(
    {
      rowCount: s.int(),
      elapsedMs: s.float64(),
      truncated: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
