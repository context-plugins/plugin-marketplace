import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookRequiredFields = {
  unsubscribeKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookRequiredFieldsSchema: Schema<WebhookRequiredFields> = s.object<WebhookRequiredFields>(
  {
    unsubscribeKey: s.string(),
  },
  { additionalProperties: s.json() },
);
