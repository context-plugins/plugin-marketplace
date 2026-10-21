import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformContentScheduleWebhookEvent = {
  /** Webhook payload schema version. */
  version: string;
  /** ID of the Platform trigger that produced the event. */
  triggerId: string;
  /** Kind of trigger event. */
  eventType: string;
  /** Datasource the event originated from. */
  datasource: string;
  /** Why the event fired. */
  reason: string;
  /** Datasource-specific object type. */
  docType: string;
  /** Identifier of the document the event is about. */
  docId: string;
  /** Link to the document in its source system. */
  viewUrl: string;
  /** Title of the document, or the subject for email. */
  title: string;
  /**
   * Relevant event time. Document changes use the source-observed time when available and otherwise
   * the document ingestion time; content schedules use the scheduled time. Omitted when no
   * timestamp is available.
   */
  eventTime?: Date;
  /** Offset in seconds from the scheduled time at which the trigger fired. */
  timeOffsetSeconds: number;
};

export const platformContentScheduleWebhookEventSchema: Schema<PlatformContentScheduleWebhookEvent> =
  s.object<PlatformContentScheduleWebhookEvent>({
    version: s.string(),
    triggerId: s.string(),
    eventType: s.string(),
    datasource: s.string(),
    reason: s.string(),
    docType: s.string(),
    docId: s.string(),
    viewUrl: s.string(),
    title: s.string(),
    eventTime: s.optional(s.dateTime()),
    timeOffsetSeconds: s.int(),
    _keysMap: {
      triggerId: "trigger_id",
      eventType: "event_type",
      docType: "doc_type",
      docId: "doc_id",
      viewUrl: "view_url",
      eventTime: "event_time",
      timeOffsetSeconds: "time_offset_seconds",
    },
  });
