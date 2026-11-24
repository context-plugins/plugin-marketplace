import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  propertyTypeGoogleAnalyticsAdminAccountSummariesApiSchema,
  type PropertyTypeGoogleAnalyticsAdminAccountSummariesApi,
} from "./property-type-google-analytics-admin-account-summaries-api.js";

/** A virtual resource representing metadata for a Google Analytics property. */
export type GoogleAnalyticsAdminV1BetaPropertySummary = {
  /**
   * Resource name of property referred to by this property summary Format: properties/{property_id}
   * Example: "properties/1000"
   */
  property?: string;
  /** Display name for the property referred to in this property summary. */
  displayName?: string;
  /** The property's property type. */
  propertyType?: PropertyTypeGoogleAnalyticsAdminAccountSummariesApi;
  /**
   * Resource name of this property's logical parent. Note: The Property-Moving UI can be used to
   * change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100",
   * "properties/200"
   */
  parent?: string;
  /** If true, then the user has a Google Analytics role that permits them to edit the property. */
  canEdit?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaPropertySummarySchema: Schema<GoogleAnalyticsAdminV1BetaPropertySummary> =
  s.object<GoogleAnalyticsAdminV1BetaPropertySummary>(
    {
      property: s.optional(s.string()),
      displayName: s.optional(s.string()),
      propertyType: s.optional(s.lazy(() => propertyTypeGoogleAnalyticsAdminAccountSummariesApiSchema)),
      parent: s.optional(s.string()),
      canEdit: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
