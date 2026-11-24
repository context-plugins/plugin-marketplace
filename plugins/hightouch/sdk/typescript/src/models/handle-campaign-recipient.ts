import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A recipient identified by their delivery address (email or phone number). Personalization data is
 * provided inline in the request.
 */
export type HandleCampaignRecipient = {
  /**
   * Delivery address for this recipient. Must be a valid email address for email campaigns, or an
   * E.164-formatted phone number for SMS and WhatsApp campaigns.
   */
  handle?: string;
  /**
   * Per-recipient personalization properties. Keys must match the variable names shown in the
   * message editor. These are merged with the top-level `properties` and take precedence when a key
   * appears in both.
   */
  properties?: Record<string, unknown>;
  /**
   * The recipient's locale as a BCP 47 language tag, such as `es-ES`, matched against the locales
   * the message is localized into (case-insensitive). When omitted, the recipient gets the
   * message's source language. A locale the message is not localized into follows the workspace's
   * localization fallback setting. At most 7 characters.
   */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const handleCampaignRecipientSchema: Schema<HandleCampaignRecipient> =
  s.object<HandleCampaignRecipient>(
    {
      handle: s.optional(s.string()),
      properties: s.optional(s.record(s.string(), s.unknown())),
      locale: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
