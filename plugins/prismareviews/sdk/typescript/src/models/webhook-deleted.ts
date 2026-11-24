import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookDeleted = {
  /** Webhook endpoint ID. */
  id: string;
  /** @default "True" */
  deleted?: "True";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookDeletedSchema: Schema<WebhookDeleted> = s.object<WebhookDeleted>(
  {
    id: s.string(),
    deleted: s.defaulted(s.literal("True"), "True"),
  },
  { additionalProperties: s.json() },
);
