import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformContentScheduleWebhookEventSchema,
  type PlatformContentScheduleWebhookEvent,
} from "../platform-content-schedule-webhook-event.js";
import {
  platformDocumentChangeWebhookEventSchema,
  type PlatformDocumentChangeWebhookEvent,
} from "../platform-document-change-webhook-event.js";

/**
 * Every delivered webhook is one of these two variants. A trigger with a cron schedule carries no
 * document and so cannot be delivered over a webhook.
 */
export type PlatformTriggerWebhookEvent =
  | (PlatformDocumentChangeWebhookEvent & { eventType: "DOCUMENT_CHANGE" })
  | (PlatformContentScheduleWebhookEvent & { eventType: "CONTENT_SCHEDULE" });

export const platformTriggerWebhookEventSchema: Schema<PlatformTriggerWebhookEvent> =
  s.discriminatedUnion<PlatformTriggerWebhookEvent>("event_type", {
    DOCUMENT_CHANGE: platformDocumentChangeWebhookEventSchema,
    CONTENT_SCHEDULE: platformContentScheduleWebhookEventSchema,
  });
