import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiDataRowSchema, type ApiDataRow } from "./api-data-row.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";
import { responseAggregationTypeSchema, type ResponseAggregationType } from "./response-aggregation-type.js";

/**
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data
 * grouped by that key either by page or property, as specified by the aggregation type parameter.
 */
export type SearchAnalyticsQueryResponse = {
  /** How the results were aggregated. */
  responseAggregationType?: ResponseAggregationType;
  /**
   * An object that may be returned with your query results, providing context about the state of
   * the data. See details in Metadata object documentation.
   */
  metadata?: Metadata1;
  /** A list of rows grouped by the key values in the order given in the query. */
  rows?: ApiDataRow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchAnalyticsQueryResponseSchema: Schema<SearchAnalyticsQueryResponse> =
  s.object<SearchAnalyticsQueryResponse>(
    {
      responseAggregationType: s.optional(s.lazy(() => responseAggregationTypeSchema)),
      metadata: s.optional(s.lazy(() => metadata1Schema)),
      rows: s.optional(s.array(s.lazy(() => apiDataRowSchema))),
    },
    { additionalProperties: s.json() },
  );
