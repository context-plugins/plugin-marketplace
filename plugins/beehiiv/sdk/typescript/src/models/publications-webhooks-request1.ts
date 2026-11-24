import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type PublicationsWebhooksRequest1 = {
  /** The types of events the webhook will receive. */
  eventTypes?: WebhookEventType[];
  /** A description of the webhook. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsWebhooksRequest1Schema: Schema<PublicationsWebhooksRequest1> =
  s.object<PublicationsWebhooksRequest1>(
    {
      eventTypes: s.optional(s.array(s.lazy(() => webhookEventTypeSchema))),
      description: s.optional(s.string()),
      _keysMap: {
        eventTypes: "event_types",
      },
    },
    { additionalProperties: s.json() },
  );
