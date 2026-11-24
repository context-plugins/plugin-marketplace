import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventResponseSchema, type EventResponse } from "./event-response.js";

/** The full record for all events that have occurred since the sync token was created. */
export type EventsResponse = {
  data?: EventResponse[];
  /** A sync token to be used with the next call to the /events endpoint. */
  sync?: string;
  /** Indicates whether there are more events to pull. */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsResponseSchema: Schema<EventsResponse> = s.object<EventsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => eventResponseSchema))),
    sync: s.optional(s.string()),
    hasMore: s.optional(s.boolean()),
    _keysMap: {
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
