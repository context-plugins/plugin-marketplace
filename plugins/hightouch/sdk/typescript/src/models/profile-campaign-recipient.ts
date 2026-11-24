import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A recipient identified by their Personalization API Cached profile ID. Template variables are
 * checked at send time, after the cached profile is merged with `properties`. A required variable
 * (one without a Liquid default) missing from both drops the send, which the send status endpoint
 * reports as `dropped`. A variable present with a null or empty value renders blank.
 */
export type ProfileCampaignRecipient = {
  /**
   * Primary key of the recipient as configured on the Personalization API sync. The delivery
   * address is resolved from the cache at send time.
   */
  id?: string;
  /**
   * Per-recipient personalization overrides. Merged with the top-level `properties` and the cached
   * profile; these values take precedence when a key appears in multiple sources.
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

export const profileCampaignRecipientSchema: Schema<ProfileCampaignRecipient> =
  s.object<ProfileCampaignRecipient>(
    {
      id: s.optional(s.string()),
      properties: s.optional(s.record(s.string(), s.unknown())),
      locale: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
