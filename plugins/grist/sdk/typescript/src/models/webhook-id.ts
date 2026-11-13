import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookId = {
  /** Webhook identifier */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookIdSchema: Schema<WebhookId> = s.object<WebhookId>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
