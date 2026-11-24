import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetExecutionHistoryInput = {
  /** The Amazon Resource Name (ARN) of the execution. */
  executionArn: string;
  /**
   * The maximum number of results that are returned per call. You can use nextToken to obtain
   * further pages of results. The default is 100 and the maximum allowed page size is 1000. A value
   * of 0 uses the default. This is only an upper limit. The actual number of results returned per
   * call might be fewer than the specified maximum.
   */
  maxResults?: number;
  /** Lists events in descending order of their timeStamp. */
  reverseOrder?: boolean;
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique
   * pagination token for each page. Make the call again using the returned token to retrieve the
   * next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   * Using an expired pagination token will return an HTTP 400 InvalidToken error.
   */
  nextToken?: string;
  /**
   * You can select whether execution data (input or output of a history event) is returned. The
   * default is true.
   */
  includeExecutionData?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExecutionHistoryInputSchema: Schema<GetExecutionHistoryInput> =
  s.object<GetExecutionHistoryInput>(
    {
      executionArn: s.string(),
      maxResults: s.optional(s.int()),
      reverseOrder: s.optional(s.boolean()),
      nextToken: s.optional(s.string()),
      includeExecutionData: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
