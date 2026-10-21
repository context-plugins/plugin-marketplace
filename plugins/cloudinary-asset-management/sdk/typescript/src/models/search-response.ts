import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationsSchema, type Aggregations } from "./aggregations.js";
import { resourceSchema, type Resource } from "./resource.js";

/** The response object returned by search operations. */
export type SearchResponse = {
  /** The total number of resources matching the search criteria. */
  totalCount?: number;
  /** The time taken to execute the search query in milliseconds. */
  time?: number;
  /** The list of resources matching the search criteria. Can be empty if no results found. */
  resources?: Resource[];
  /** A cursor for pagination. Only included when there are more results available. */
  nextCursor?: string | null;
  /**
   * Aggregation results when the aggregate parameter is used in the request. Only included when
   * aggregations are requested.
   */
  aggregations?: Aggregations;
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>({
  totalCount: s.optional(s.int()),
  time: s.optional(s.int()),
  resources: s.optional(s.array(s.lazy(() => resourceSchema))),
  nextCursor: s.optionalNullable(s.string()),
  aggregations: s.optional(s.lazy(() => aggregationsSchema)),
  _keysMap: {
    totalCount: "total_count",
    nextCursor: "next_cursor",
  },
});
