import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response after creating a new webhook, including the MAC secret. */
export type WebhookCreateResponse = {
  /** The unique identifier of the newly created webhook. */
  id: string;
  /**
   * The Base64-encoded MAC secret used to verify the authenticity of webhook notification payloads.
   */
  macSecretBase64: string;
  /** The time when the webhook will expire if not refreshed. */
  expirationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookCreateResponseSchema: Schema<WebhookCreateResponse> = s.object<WebhookCreateResponse>(
  {
    id: s.string(),
    macSecretBase64: s.string(),
    expirationTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
