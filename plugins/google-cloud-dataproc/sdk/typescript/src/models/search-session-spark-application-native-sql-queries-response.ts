import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nativeSqlExecutionUiDataSchema,
  type NativeSqlExecutionUiData,
} from "./native-sql-execution-ui-data.js";

/** List of all Native queries for a Spark Application. */
export type SearchSessionSparkApplicationNativeSqlQueriesResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationSqlQueriesRequest.
   */
  nextPageToken?: string;
  /** Output only. Native SQL Execution Data */
  sparkApplicationNativeSqlQueries?: NativeSqlExecutionUiData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationNativeSqlQueriesResponseSchema: Schema<SearchSessionSparkApplicationNativeSqlQueriesResponse> =
  s.object<SearchSessionSparkApplicationNativeSqlQueriesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationNativeSqlQueries: s.optional(s.array(s.lazy(() => nativeSqlExecutionUiDataSchema))),
    },
    { additionalProperties: s.json() },
  );
