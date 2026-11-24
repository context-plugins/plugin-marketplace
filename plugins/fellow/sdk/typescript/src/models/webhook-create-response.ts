import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookWithSecretSchema, type WebhookWithSecret } from "./webhook-with-secret.js";

/** Response for webhook creation, includes the secret (only returned once). */
export type WebhookCreateResponse = {
  /** Webhook response that includes the secret, only returned on creation. */
  webhook: WebhookWithSecret;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookCreateResponseSchema: Schema<WebhookCreateResponse> = s.object<WebhookCreateResponse>(
  {
    webhook: webhookWithSecretSchema,
  },
  { additionalProperties: s.json() },
);
