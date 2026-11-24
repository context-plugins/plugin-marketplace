import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type WebhookListResponse = {
  data: Webhook[];
  /** True when the organization has generated a webhook signing secret at least once. */
  signingSecretConfigured: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookListResponseSchema: Schema<WebhookListResponse> = s.object<WebhookListResponse>(
  {
    data: s.array(s.lazy(() => webhookSchema)),
    signingSecretConfigured: s.boolean(),
  },
  { additionalProperties: s.json() },
);
