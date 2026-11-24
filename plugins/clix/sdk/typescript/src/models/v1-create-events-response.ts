import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v1EventSchema, type V1Event } from "./v1-event.js";

export type V1CreateEventsResponse = {
  events?: V1Event[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateEventsResponseSchema: Schema<V1CreateEventsResponse> = s.object<V1CreateEventsResponse>(
  {
    events: s.optional(s.array(s.lazy(() => v1EventSchema))),
  },
  { additionalProperties: s.json() },
);
