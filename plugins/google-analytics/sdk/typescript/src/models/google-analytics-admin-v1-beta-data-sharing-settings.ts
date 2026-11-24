import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A resource message representing data sharing settings of a Google Analytics account. */
export type GoogleAnalyticsAdminV1BetaDataSharingSettings = {
  /**
   * Allows Google technical support representatives access to your Google Analytics data and
   * account when necessary to provide service and find solutions to technical issues. This field
   * maps to the "Technical support" field in the Google Analytics Admin UI.
   */
  sharingWithGoogleSupportEnabled?: boolean;
  /**
   * Allows Google access to your Google Analytics account data, including account usage and
   * configuration data, product spending, and users associated with your Google Analytics account,
   * so that Google can help you make the most of Google products, providing you with insights,
   * offers, recommendations, and optimization tips across Google Analytics and other Google
   * products for business. This field maps to the "Recommendations for your business" field in the
   * Google Analytics Admin UI.
   */
  sharingWithGoogleAssignedSalesEnabled?: boolean;
  /**
   * Deprecated. This field is no longer used and always returns false.
   *
   * @deprecated
   */
  sharingWithGoogleAnySalesEnabled?: boolean;
  /**
   * Enable features like predictions, modeled data, and benchmarking that can provide you with
   * richer business insights when you contribute aggregated measurement data. The data you share
   * (including information about the property from which it is shared) is aggregated and
   * de-identified before being used to generate business insights. This field maps to the "Modeling
   * contributions & business insights" field in the Google Analytics Admin UI.
   */
  sharingWithOthersEnabled?: boolean;
  /**
   * Identifier. Resource name. Format: accounts/{account}/dataSharingSettings Example:
   * "accounts/1000/dataSharingSettings"
   */
  name?: string;
  /**
   * Allows Google to use the data to improve other Google products or services. This fields maps to
   * the "Google products & services" field in the Google Analytics Admin UI.
   */
  sharingWithGoogleProductsEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataSharingSettingsSchema: Schema<GoogleAnalyticsAdminV1BetaDataSharingSettings> =
  s.object<GoogleAnalyticsAdminV1BetaDataSharingSettings>(
    {
      sharingWithGoogleSupportEnabled: s.optional(s.boolean()),
      sharingWithGoogleAssignedSalesEnabled: s.optional(s.boolean()),
      sharingWithGoogleAnySalesEnabled: s.optional(s.boolean()),
      sharingWithOthersEnabled: s.optional(s.boolean()),
      name: s.optional(s.string()),
      sharingWithGoogleProductsEnabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
