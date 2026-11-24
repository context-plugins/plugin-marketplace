import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotificationsWebhooksRequest = {
  /** name to describe the webhook. */
  name?: string;
  /** detailed description of the webhook. */
  description?: string;
  /** url to send webhooks to. */
  url: string;
  /** one or more events that the webhook would send messages for. */
  subscribedEvents?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationsWebhooksRequestSchema: Schema<NotificationsWebhooksRequest> =
  s.object<NotificationsWebhooksRequest>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      url: s.string(),
      subscribedEvents: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
