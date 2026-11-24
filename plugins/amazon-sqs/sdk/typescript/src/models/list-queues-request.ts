import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListQueuesRequest = {
  /**
   * A string to use for filtering the list results. Only those queues whose name begins with the
   * specified string are returned. Queue URLs and names are case-sensitive.
   */
  queueNamePrefix?: string;
  /** Pagination token to request the next set of results. */
  nextToken?: string;
  /**
   * Maximum number of results to include in the response. Value range is 1 to 1000. You must set
   * MaxResults to receive a value for NextToken in the response.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listQueuesRequestSchema: Schema<ListQueuesRequest> = s.object<ListQueuesRequest>(
  {
    queueNamePrefix: s.optional(s.string()),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    _keysMap: {
      queueNamePrefix: "QueueNamePrefix",
      nextToken: "NextToken",
      maxResults: "MaxResults",
    },
  },
  { additionalProperties: s.json() },
);
