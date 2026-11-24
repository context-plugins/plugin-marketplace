import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2EventsResponse = {
  eventIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2EventsResponseSchema: Schema<ApiV2EventsResponse> = s.object<ApiV2EventsResponse>(
  {
    eventIds: s.optional(s.array(s.string())),
    _keysMap: {
      eventIds: "event_ids",
    },
  },
  { additionalProperties: s.json() },
);
