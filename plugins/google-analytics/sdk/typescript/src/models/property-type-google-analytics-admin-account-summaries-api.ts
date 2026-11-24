import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The property's property type. */
export const PropertyTypeGoogleAnalyticsAdminAccountSummariesApi = {
  PropertyTypeUnspecified: "PROPERTY_TYPE_UNSPECIFIED",
  PropertyTypeOrdinary: "PROPERTY_TYPE_ORDINARY",
  PropertyTypeSubproperty: "PROPERTY_TYPE_SUBPROPERTY",
  PropertyTypeRollup: "PROPERTY_TYPE_ROLLUP",
} as const;
export type PropertyTypeGoogleAnalyticsAdminAccountSummariesApi =
  | (typeof PropertyTypeGoogleAnalyticsAdminAccountSummariesApi)[keyof typeof PropertyTypeGoogleAnalyticsAdminAccountSummariesApi]
  | (string & {});

export const propertyTypeGoogleAnalyticsAdminAccountSummariesApiSchema: EnumSchema<PropertyTypeGoogleAnalyticsAdminAccountSummariesApi> =
  s.enumOf<PropertyTypeGoogleAnalyticsAdminAccountSummariesApi>(
    PropertyTypeGoogleAnalyticsAdminAccountSummariesApi,
  );
