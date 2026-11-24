import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queueSchema, type Queue } from "./queue.js";

/** Response message for ListQueues. */
export type ListQueuesResponse = {
  /**
   * A token to retrieve next page of results. To return the next page of results, call ListQueues
   * with this value as the page_token. If the next_page_token is empty, there are no more results.
   * The page token is valid for only 2 hours.
   */
  nextPageToken?: string;
  /** The list of queues. */
  queues?: Queue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listQueuesResponseSchema: Schema<ListQueuesResponse> = s.object<ListQueuesResponse>(
  {
    nextPageToken: s.optional(s.string()),
    queues: s.optional(s.array(s.lazy(() => queueSchema))),
  },
  { additionalProperties: s.json() },
);
