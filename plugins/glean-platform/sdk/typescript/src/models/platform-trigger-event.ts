import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerEventReasonSchema,
  type PlatformTriggerEventReason,
} from "./platform-trigger-event-reason.js";

/** A content event a trigger can fire on. */
export type PlatformTriggerEvent = {
  /** The kind of event. @default "DOCUMENT_CHANGE" */
  eventType?: "DOCUMENT_CHANGE";
  /** Datasource the event originated from. */
  datasource: string;
  /** Why the event fired. */
  reason: PlatformTriggerEventReason;
  /** Datasource-specific object type. */
  docType: string;
  /** Identifier of the document the event is about. */
  docId: string;
  /** Link to the document in its source system. */
  viewUrl: string;
  /** Title of the document, or the subject for email. */
  title: string;
  /**
   * When the event happened at the source: the document's own change timestamp for a document
   * change, and the scheduled time for a content schedule. Omitted when the source did not supply
   * one.
   */
  eventTime: Date;
};

export const platformTriggerEventSchema: Schema<PlatformTriggerEvent> = s.object<PlatformTriggerEvent>({
  eventType: s.defaulted(s.literal("DOCUMENT_CHANGE"), "DOCUMENT_CHANGE"),
  datasource: s.string(),
  reason: platformTriggerEventReasonSchema,
  docType: s.string(),
  docId: s.string(),
  viewUrl: s.string(),
  title: s.string(),
  eventTime: s.dateTime(),
  _keysMap: {
    eventType: "event_type",
    docType: "doc_type",
    docId: "doc_id",
    viewUrl: "view_url",
    eventTime: "event_time",
  },
});
