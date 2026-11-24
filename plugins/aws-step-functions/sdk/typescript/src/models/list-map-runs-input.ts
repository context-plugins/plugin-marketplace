import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListMapRunsInput = {
  /** The Amazon Resource Name (ARN) of the execution for which the Map Runs must be listed. */
  executionArn: string;
  /**
   * The maximum number of results that are returned per call. You can use nextToken to obtain
   * further pages of results. The default is 100 and the maximum allowed page size is 1000. A value
   * of 0 uses the default. This is only an upper limit. The actual number of results returned per
   * call might be fewer than the specified maximum.
   */
  maxResults?: number;
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique
   * pagination token for each page. Make the call again using the returned token to retrieve the
   * next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * Using an expired pagination token will return an HTTP 400 InvalidToken error.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMapRunsInputSchema: Schema<ListMapRunsInput> = s.object<ListMapRunsInput>(
  {
    executionArn: s.string(),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
