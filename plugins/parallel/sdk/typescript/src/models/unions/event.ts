import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monitorCompletionEventSchema, type MonitorCompletionEvent } from "../monitor-completion-event.js";
import { monitorErrorEventSchema, type MonitorErrorEvent } from "../monitor-error-event.js";
import {
  monitorEventStreamEventSchema,
  type MonitorEventStreamEvent,
} from "../monitor-event-stream-event.js";
import { monitorSnapshotEventSchema, type MonitorSnapshotEvent } from "../monitor-snapshot-event.js";

export type Event =
  | (MonitorCompletionEvent & { eventType: "completion" })
  | (MonitorErrorEvent & { eventType: "error" })
  | (MonitorEventStreamEvent & { eventType: "event_stream" })
  | (MonitorSnapshotEvent & { eventType: "snapshot" });

export const eventSchema: Schema<Event> = s.discriminatedUnion<Event>("event_type", {
  completion: monitorCompletionEventSchema,
  error: monitorErrorEventSchema,
  event_stream: monitorEventStreamEventSchema,
  snapshot: monitorSnapshotEventSchema,
});
