import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type ListEventsResponse = {
  /** A list of the requested events. */
  events: Event[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEventsResponseSchema: Schema<ListEventsResponse> = s.object<ListEventsResponse>(
  {
    events: s.array(s.lazy(() => eventSchema)),
    nextToken: s.optional(s.string()),
    _keysMap: {
      events: "Events",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
