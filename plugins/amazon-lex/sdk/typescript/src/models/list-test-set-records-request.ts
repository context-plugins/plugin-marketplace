import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTestSetRecordsRequest = {
  /** The identifier of the test set to list its test set records. */
  testSetId: string;
  /**
   * The maximum number of test set records to return in each page. If there are fewer records than
   * the max page size, only the actual number of records are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListTestSetRecords operation contains more results than specified in
   * the maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestSetRecordsRequestSchema: Schema<ListTestSetRecordsRequest> =
  s.object<ListTestSetRecordsRequest>(
    {
      testSetId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
