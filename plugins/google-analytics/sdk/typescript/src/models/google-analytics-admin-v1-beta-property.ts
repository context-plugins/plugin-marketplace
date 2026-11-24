import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { industryCategorySchema, type IndustryCategory } from "./industry-category.js";
import { propertyTypeSchema, type PropertyType } from "./property-type.js";
import { serviceLevelSchema, type ServiceLevel } from "./service-level.js";

/** A resource message representing a Google Analytics property. */
export type GoogleAnalyticsAdminV1BetaProperty = {
  /**
   * Immutable. The property type for this Property resource. When creating a property, if the type
   * is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied.
   */
  propertyType?: PropertyType;
  /**
   * Immutable. The resource name of the parent account Format: accounts/{account_id} Example:
   * "accounts/123"
   */
  account?: string;
  /**
   * Output only. If set, the time at which this trashed property will be permanently deleted. If
   * not set, then this property is not currently in the trash can and is not slated to be deleted.
   */
  expireTime?: string;
  /** Output only. The Google Analytics service level that applies to this property. */
  serviceLevel?: ServiceLevel;
  /**
   * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be
   * used to change the parent. Format: accounts/{account}, properties/{property} Example:
   * "accounts/100", "properties/101"
   */
  parent?: string;
  /** Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK */
  industryCategory?: IndustryCategory;
  /**
   * Required. Human-readable display name for this property. The max allowed display name length is
   * 100 UTF-16 code units.
   */
  displayName?: string;
  /**
   * The currency type used in reports involving monetary values. Format:
   * https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
   */
  currencyCode?: string;
  /**
   * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the
   * data originates. If the time zone honors DST, Analytics will automatically adjust for the
   * changes. NOTE: Changing the time zone only affects data going forward, and is not applied
   * retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
   */
  timeZone?: string;
  /** Output only. Time when the entity was originally created. */
  createTime?: string;
  /** Output only. Time when entity payload fields were last updated. */
  updateTime?: string;
  /**
   * Identifier. Resource name of this property. Format: properties/{property_id} Example:
   * "properties/1000"
   */
  name?: string;
  /**
   * Output only. If set, the time at which this property was trashed. If not set, then this
   * property is not currently in the trash can.
   */
  deleteTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaPropertySchema: Schema<GoogleAnalyticsAdminV1BetaProperty> =
  s.object<GoogleAnalyticsAdminV1BetaProperty>(
    {
      propertyType: s.optional(s.lazy(() => propertyTypeSchema)),
      account: s.optional(s.string()),
      expireTime: s.optional(s.string()),
      serviceLevel: s.optional(s.lazy(() => serviceLevelSchema)),
      parent: s.optional(s.string()),
      industryCategory: s.optional(s.lazy(() => industryCategorySchema)),
      displayName: s.optional(s.string()),
      currencyCode: s.optional(s.string()),
      timeZone: s.optional(s.string()),
      createTime: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      name: s.optional(s.string()),
      deleteTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
