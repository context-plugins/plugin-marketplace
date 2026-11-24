import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListDeadLetterSourceQueuesResult = {
  /**
   * A list of source queue URLs that have the RedrivePolicy queue attribute configured with a
   * dead-letter queue.
   */
  queueUrls: string[];
  /**
   * Pagination token to include in the next request. Token value is null if there are no additional
   * results to request, or if you did not set MaxResults in the request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDeadLetterSourceQueuesResultSchema: Schema<ListDeadLetterSourceQueuesResult> =
  s.object<ListDeadLetterSourceQueuesResult>(
    {
      queueUrls: s.array(s.string()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
