import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type PublicationsWebhooksRequest = {
  /** The webhook URL to send events to. */
  url: string;
  /** The types of events the webhook will receive. */
  eventTypes: WebhookEventType[];
  /** A description of the webhook. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicationsWebhooksRequestProperties: s.Shape<PublicationsWebhooksRequest> = {
  url: s.string(),
  eventTypes: s.array(s.lazy(() => webhookEventTypeSchema)),
  description: s.optional(s.string()),
  _keysMap: {
    eventTypes: "event_types",
  },
};

export const publicationsWebhooksRequestInternalSchema: Schema<PublicationsWebhooksRequest> =
  s.object<PublicationsWebhooksRequest>(publicationsWebhooksRequestProperties, {
    additionalProperties: s.json(),
  });

export const publicationsWebhooksRequestSchema: Schema<PublicationsWebhooksRequest> = s.lazySchema(() =>
  s.object<PublicationsWebhooksRequest>(
    {
      ...publicationsWebhooksRequestProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
