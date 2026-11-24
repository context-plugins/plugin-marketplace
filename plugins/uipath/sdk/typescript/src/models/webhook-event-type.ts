import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An available event type that can be subscribed to via webhooks */
export type WebhookEventType = {
  /** Human-readable display name of the event type */
  name?: string;
  /** Machine-readable event type identifier (e.g., job.faulted, queueItem.transactionCompleted) */
  eventType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookEventTypeSchema: Schema<WebhookEventType> = s.object<WebhookEventType>(
  {
    name: s.optional(s.string()),
    eventType: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      eventType: "EventType",
    },
  },
  { additionalProperties: s.json() },
);
