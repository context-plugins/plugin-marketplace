import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventRequest = {
  eventType: string;
  event: string;
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const eventRequestProperties: s.Shape<EventRequest> = {
  eventType: s.string(),
  event: s.string(),
  data: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    eventType: "event_type",
  },
};

export const eventRequestInternalSchema: Schema<EventRequest> = s.object<EventRequest>(
  eventRequestProperties,
  { additionalProperties: s.json() },
);

export const eventRequestSchema: Schema<EventRequest> = s.lazySchema(() =>
  s.object<EventRequest>(
    {
      ...eventRequestProperties,
      eventType: s.string().check(s.minLength(1)),
      event: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
