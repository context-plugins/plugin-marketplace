import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  EventTypeParallelAiMonitorApi,
  eventTypeParallelAiMonitorApiSchema,
} from "./event-type-parallel-ai-monitor-api.js";
import { eventDateSchema, type EventDate } from "./unions/event-date.js";
import {
  outputParallelAiMonitorApiSchema,
  type OutputParallelAiMonitorApi,
} from "./unions/output-parallel-ai-monitor-api.js";

/**
 * Append-only event from an event_stream monitor.
 *
 * Each event represents a distinct material change detected since the previous execution. Events
 * are net-new relative to the cursor; clients should treat them as an append-only log.
 */
export type MonitorEventStreamEvent = {
  /**
   * Stable identifier for this event. Safe to use for client-side deduplication across pagination
   * and retries.
   */
  eventId: string;
  /** ID of the event group that owns this event. */
  eventGroupId: string;
  /** Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY). */
  eventDate: EventDate;
  /**
   * Discriminant for the event_stream event variant.
   *
   * @default EventTypeParallelAiMonitorApi.EventStream
   */
  eventType?: EventTypeParallelAiMonitorApi;
  /** Text or JSON output describing the detected change. */
  output: OutputParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorEventStreamEventSchema: Schema<MonitorEventStreamEvent> =
  s.object<MonitorEventStreamEvent>(
    {
      eventId: s.string(),
      eventGroupId: s.string(),
      eventDate: eventDateSchema,
      eventType: s.defaulted(eventTypeParallelAiMonitorApiSchema, EventTypeParallelAiMonitorApi.EventStream),
      output: outputParallelAiMonitorApiSchema,
      _keysMap: {
        eventId: "event_id",
        eventGroupId: "event_group_id",
        eventDate: "event_date",
        eventType: "event_type",
      },
    },
    { additionalProperties: s.json() },
  );
