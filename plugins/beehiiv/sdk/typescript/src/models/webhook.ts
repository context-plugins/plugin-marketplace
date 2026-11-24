import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventTypeSchema, type WebhookEventType } from "./webhook-event-type.js";

export type Webhook = {
  /** The prefixed ID for the webhook. */
  id: string;
  /** The webhook URL to send events to. */
  url: string;
  /** The date the webhook was created. Measured in seconds since the Unix epoch. */
  created: number;
  /** The date the webhook was last updated. Measured in seconds since the Unix epoch. */
  updated: number;
  /** The types of events the webhook will receive. */
  eventTypes: WebhookEventType[];
  /** The user-defined description for the webhook. */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.string(),
  url: s.string(),
  created: s.int(),
  updated: s.int(),
  eventTypes: s.array(s.lazy(() => webhookEventTypeSchema)),
  description: s.string(),
  _keysMap: {
    eventTypes: "event_types",
  },
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
