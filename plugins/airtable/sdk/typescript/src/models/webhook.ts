import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSpecificationSchema, type WebhookSpecification } from "./webhook-specification.js";

/** A webhook subscription on an Airtable base. */
export type Webhook = {
  /** The unique identifier of the webhook. */
  id: string;
  /** The type of the webhook (e.g., client). */
  type: string;
  /** Whether the webhook is currently active. */
  isHookEnabled?: boolean;
  /** The URL that receives webhook notifications. */
  notificationUrl?: string;
  /** The cursor position for the next unread payload. */
  cursorForNextPayload?: number;
  /** Whether notifications are currently being sent. */
  areNotificationsEnabled?: boolean;
  /** The time when the webhook was created. */
  createdTime?: Date;
  /** The time when the webhook will expire if not refreshed. */
  expirationTime?: Date;
  /** The specification defining what changes the webhook monitors. */
  specification?: WebhookSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.string(),
  type: s.string(),
  isHookEnabled: s.optional(s.boolean()),
  notificationUrl: s.optional(s.string()),
  cursorForNextPayload: s.optional(s.int()),
  areNotificationsEnabled: s.optional(s.boolean()),
  createdTime: s.optional(s.dateTime()),
  expirationTime: s.optional(s.dateTime()),
  specification: s.optional(s.lazy(() => webhookSpecificationSchema)),
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      notificationUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
