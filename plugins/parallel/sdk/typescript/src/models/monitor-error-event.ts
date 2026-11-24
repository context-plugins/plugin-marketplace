import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { EventType3, eventType3Schema } from "./event-type3.js";

/**
 * Emitted when a monitor execution failed (e.g. payment or quota error).
 *
 * Always included in the events list regardless of `include_completions`.
 */
export type MonitorErrorEvent = {
  /** Discriminant for the error event variant. @default EventType3.Error */
  eventType?: EventType3;
  /** Human-readable description of the failure. */
  errorMessage: string;
  /** Timestamp of when the monitor execution failed, as an RFC 3339 string. */
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorErrorEventSchema: Schema<MonitorErrorEvent> = s.object<MonitorErrorEvent>(
  {
    eventType: s.defaulted(eventType3Schema, EventType3.Error),
    errorMessage: s.string(),
    timestamp: s.dateTime(),
    _keysMap: {
      eventType: "event_type",
      errorMessage: "error_message",
    },
  },
  { additionalProperties: s.json() },
);
