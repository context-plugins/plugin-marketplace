import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type WebhookResponse = {
  data: Webhook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookResponseProperties: s.Shape<WebhookResponse> = {
  data: webhookInternalSchema,
};

export const webhookResponseInternalSchema: Schema<WebhookResponse> = s.object<WebhookResponse>(
  webhookResponseProperties,
  { additionalProperties: s.json() },
);

export const webhookResponseSchema: Schema<WebhookResponse> = s.lazySchema(() =>
  s.object<WebhookResponse>(
    {
      ...webhookResponseProperties,
      data: webhookSchema,
    },
    { additionalProperties: s.json() },
  ),
);
