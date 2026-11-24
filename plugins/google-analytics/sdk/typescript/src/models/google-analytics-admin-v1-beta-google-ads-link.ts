import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A link between a Google Analytics property and a Google Ads account. */
export type GoogleAnalyticsAdminV1BetaGoogleAdsLink = {
  /**
   * Identifier. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note:
   * googleAdsLinkId is not the Google Ads customer ID.
   */
  name?: string;
  /**
   * Output only. Email address of the user that created the link. An empty string will be returned
   * if the email address can't be retrieved.
   */
  creatorEmailAddress?: string;
  /** Immutable. Google Ads customer ID. */
  customerId?: string;
  /**
   * Enable personalized advertising features with this integration. Automatically publish my Google
   * Analytics audience lists and Google Analytics remarketing events/parameters to the linked
   * Google Ads account. If this field is not set on create/update, it will be defaulted to true.
   */
  adsPersonalizationEnabled?: boolean;
  /** Output only. Time when this link was originally created. */
  createTime?: string;
  /** Output only. Time when this link was last updated. */
  updateTime?: string;
  /** Output only. If true, this link is for a Google Ads manager account. */
  canManageClients?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaGoogleAdsLinkSchema: Schema<GoogleAnalyticsAdminV1BetaGoogleAdsLink> =
  s.object<GoogleAnalyticsAdminV1BetaGoogleAdsLink>(
    {
      name: s.optional(s.string()),
      creatorEmailAddress: s.optional(s.string()),
      customerId: s.optional(s.string()),
      adsPersonalizationEnabled: s.optional(s.boolean()),
      createTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      canManageClients: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
