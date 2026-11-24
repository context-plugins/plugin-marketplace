import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type UpdateWebhookOutput = {
  webhook?: Webhook;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateWebhookOutputSchema: Schema<UpdateWebhookOutput> = s.object<UpdateWebhookOutput>(
  {
    webhook: s.optional(s.lazy(() => webhookSchema)),
  },
  { additionalProperties: s.json() },
);
