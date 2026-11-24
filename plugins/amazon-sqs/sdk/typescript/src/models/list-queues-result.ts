import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListQueuesResult = {
  /**
   * A list of queue URLs, up to 1,000 entries, or the value of MaxResults that you sent in the
   * request.
   */
  queueUrls?: string[];
  /**
   * Pagination token to include in the next request. Token value is null if there are no additional
   * results to request, or if you did not set MaxResults in the request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listQueuesResultSchema: Schema<ListQueuesResult> = s.object<ListQueuesResult>(
  {
    queueUrls: s.optional(s.array(s.string())),
    nextToken: s.optional(s.string()),
    _keysMap: {
      queueUrls: "QueueUrls",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
