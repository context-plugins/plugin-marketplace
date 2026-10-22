import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformDocumentChangeWebhookEvent = {
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
  /** Email body content when the event is for an email document. */
  content?: string;
  /** Present and true when source content exceeded the delivery size limit. */
  contentTruncated?: boolean;
};

export const platformDocumentChangeWebhookEventSchema: Schema<PlatformDocumentChangeWebhookEvent> =
  s.object<PlatformDocumentChangeWebhookEvent>({
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
    content: s.optional(s.string()),
    contentTruncated: s.optional(s.boolean()),
    _keysMap: {
      triggerId: "trigger_id",
      eventType: "event_type",
      docType: "doc_type",
      docId: "doc_id",
      viewUrl: "view_url",
      eventTime: "event_time",
      contentTruncated: "content_truncated",
    },
  });
