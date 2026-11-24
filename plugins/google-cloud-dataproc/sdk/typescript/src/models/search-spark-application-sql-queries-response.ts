import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlExecutionUiDataSchema, type SqlExecutionUiData } from "./sql-execution-ui-data.js";

/** List of all queries for a Spark Application. */
export type SearchSparkApplicationSqlQueriesResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSparkApplicationSqlQueriesRequest.
   */
  nextPageToken?: string;
  /** Output only. SQL Execution Data */
  sparkApplicationSqlQueries?: SqlExecutionUiData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationSqlQueriesResponseSchema: Schema<SearchSparkApplicationSqlQueriesResponse> =
  s.object<SearchSparkApplicationSqlQueriesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationSqlQueries: s.optional(s.array(s.lazy(() => sqlExecutionUiDataSchema))),
    },
    { additionalProperties: s.json() },
  );
