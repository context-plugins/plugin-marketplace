import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookDelete = {
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookDeleteSchema: Schema<WebhookDelete> = s.object<WebhookDelete>(
  {
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
