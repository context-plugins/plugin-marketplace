import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookRequiredProperties = {
  size: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookRequiredPropertiesSchema: Schema<WebhookRequiredProperties> =
  s.object<WebhookRequiredProperties>(
    {
      size: s.float64(),
    },
    { additionalProperties: s.json() },
  );
