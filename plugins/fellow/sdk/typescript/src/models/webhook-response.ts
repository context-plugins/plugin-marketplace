import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

/** Response containing a single webhook. */
export type WebhookResponse = {
  /** API model for webhook representation in the developer API. */
  webhook: Webhook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookResponseSchema: Schema<WebhookResponse> = s.object<WebhookResponse>(
  {
    webhook: webhookSchema,
  },
  { additionalProperties: s.json() },
);
