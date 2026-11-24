import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListMessageMoveTasksRequest = {
  /** The ARN of the queue whose message movement tasks are to be listed. */
  sourceArn: string;
  /**
   * The maximum number of results to include in the response. The default is 1, which provides the
   * most recent message movement task. The upper limit is 10.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMessageMoveTasksRequestSchema: Schema<ListMessageMoveTasksRequest> =
  s.object<ListMessageMoveTasksRequest>(
    {
      sourceArn: s.string(),
      maxResults: s.optional(s.int()),
      _keysMap: {
        sourceArn: "SourceArn",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
