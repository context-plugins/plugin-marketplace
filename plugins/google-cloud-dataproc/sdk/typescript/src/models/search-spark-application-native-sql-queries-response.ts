import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nativeSqlExecutionUiDataSchema,
  type NativeSqlExecutionUiData,
} from "./native-sql-execution-ui-data.js";

/** List of all Native SQL queries details for a Spark Application. */
export type SearchSparkApplicationNativeSqlQueriesResponse = {
  /** Output only. Native SQL Execution Data */
  sparkApplicationNativeSqlQueries?: NativeSqlExecutionUiData[];
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSparkApplicationNativeSqlQueriesRequest.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationNativeSqlQueriesResponseSchema: Schema<SearchSparkApplicationNativeSqlQueriesResponse> =
  s.object<SearchSparkApplicationNativeSqlQueriesResponse>(
    {
      sparkApplicationNativeSqlQueries: s.optional(s.array(s.lazy(() => nativeSqlExecutionUiDataSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
