import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type CreateWebhookOutput = {
  webhook?: Webhook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWebhookOutputSchema: Schema<CreateWebhookOutput> = s.object<CreateWebhookOutput>(
  {
    webhook: s.optional(s.lazy(() => webhookSchema)),
  },
  { additionalProperties: s.json() },
);
