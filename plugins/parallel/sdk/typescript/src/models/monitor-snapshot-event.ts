import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { EventType1, eventType1Schema } from "./event-type1.js";
import { changedOutputSchema, type ChangedOutput } from "./unions/changed-output.js";
import { eventDateSchema, type EventDate } from "./unions/event-date.js";
import { previousOutputSchema, type PreviousOutput } from "./unions/previous-output.js";

/**
 * Snapshot diff event emitted when a monitored task run's output changes.
 *
 * `changed_output` contains only the fields that changed since the previous execution, along with
 * their `basis` (reasoning + citations). `previous_output` holds the complete output from the prior
 * run for comparison.
 */
export type MonitorSnapshotEvent = {
  /**
   * Stable identifier for this event. Safe to use for client-side deduplication across pagination
   * and retries.
   */
  eventId: string;
  /** ID of the event group that owns this event. */
  eventGroupId: string;
  /** Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY). */
  eventDate: EventDate;
  /** Discriminant for the snapshot event variant. @default EventType1.Snapshot */
  eventType?: EventType1;
  /**
   * Partial output containing only the fields that changed since the previous execution, each with
   * its `basis` (reasoning and citations).
   */
  changedOutput: ChangedOutput;
  /** The full output from the prior run, including all fields and basis. */
  previousOutput: PreviousOutput;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSnapshotEventSchema: Schema<MonitorSnapshotEvent> = s.object<MonitorSnapshotEvent>(
  {
    eventId: s.string(),
    eventGroupId: s.string(),
    eventDate: eventDateSchema,
    eventType: s.defaulted(eventType1Schema, EventType1.Snapshot),
    changedOutput: changedOutputSchema,
    previousOutput: previousOutputSchema,
    _keysMap: {
      eventId: "event_id",
      eventGroupId: "event_group_id",
      eventDate: "event_date",
      eventType: "event_type",
      changedOutput: "changed_output",
      previousOutput: "previous_output",
    },
  },
  { additionalProperties: s.json() },
);
