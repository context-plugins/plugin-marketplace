import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookStats = {
  /** Type of the response object. */
  type?: string;
  /** unique identifier in the form of uuid for the application. */
  applicationId?: string;
  /** unique identifier in the form of uuid for the webhook. */
  webhookId?: string;
  /** Number of successfully delivered messages. */
  success?: number;
  /** Number of messages pending delivery. */
  pending?: number;
  /** Number of messages currently being sent. */
  sending?: number;
  /** Number of failed message deliveries. */
  fail?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookStatsSchema: Schema<WebhookStats> = s.object<WebhookStats>(
  {
    type: s.optional(s.string()),
    applicationId: s.optional(s.string()),
    webhookId: s.optional(s.string()),
    success: s.optional(s.int()),
    pending: s.optional(s.int()),
    sending: s.optional(s.int()),
    fail: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
