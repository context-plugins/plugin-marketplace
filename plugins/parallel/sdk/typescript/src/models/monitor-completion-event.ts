import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { EventType2, eventType2Schema } from "./event-type2.js";

/**
 * Emitted when a monitor execution ran but detected no material changes.
 *
 * Only returned when `include_completions=true` is passed to the list events endpoint. Useful for
 * auditing execution history alongside content events.
 */
export type MonitorCompletionEvent = {
  /** Discriminant for the completion event variant. @default EventType2.Completion */
  eventType?: EventType2;
  /** Timestamp of when the monitor execution completed, as an RFC 3339 string. */
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorCompletionEventSchema: Schema<MonitorCompletionEvent> = s.object<MonitorCompletionEvent>(
  {
    eventType: s.defaulted(eventType2Schema, EventType2.Completion),
    timestamp: s.dateTime(),
    _keysMap: {
      eventType: "event_type",
    },
  },
  { additionalProperties: s.json() },
);
