import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MonitorMemoryEvent = {
  /** ID of the monitor event. */
  eventId: string;
  /** ID of the execution that produced this event. */
  eventGroupId: string;
  /** When the event was detected, as an RFC 3339 timestamp. */
  detectedAt: Date;
  /** Excerpt of the monitor event. May be truncated. */
  excerpt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorMemoryEventSchema: Schema<MonitorMemoryEvent> = s.object<MonitorMemoryEvent>(
  {
    eventId: s.string(),
    eventGroupId: s.string(),
    detectedAt: s.dateTime(),
    excerpt: s.string(),
    _keysMap: {
      eventId: "event_id",
      eventGroupId: "event_group_id",
      detectedAt: "detected_at",
    },
  },
  { additionalProperties: s.json() },
);
