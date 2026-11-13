import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookProperties = {
  size?: number;
  attempts?: number;
  errorMessage?: string | null;
  httpStatus?: number;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookPropertiesSchema: Schema<WebhookProperties> = s.object<WebhookProperties>(
  {
    size: s.optional(s.float64()),
    attempts: s.optional(s.float64()),
    errorMessage: s.optionalNullable(s.string()),
    httpStatus: s.optional(s.float64()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
