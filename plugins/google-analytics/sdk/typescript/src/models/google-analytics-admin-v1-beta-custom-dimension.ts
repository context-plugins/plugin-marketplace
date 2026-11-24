import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scope1Schema, type Scope1 } from "./scope1.js";

/** A definition for a CustomDimension. */
export type GoogleAnalyticsAdminV1BetaCustomDimension = {
  /**
   * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization.
   * This is currently only supported by user-scoped custom dimensions.
   */
  disallowAdsPersonalization?: boolean;
  /**
   * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped
   * dimension, then this is the user property name. If this is an event-scoped dimension, then this
   * is the event parameter name. If this is an item-scoped dimension, then this is the parameter
   * name found in the eCommerce items array. May only contain alphanumeric and underscore
   * characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40
   * characters for event-scoped dimensions.
   */
  parameterName?: string;
  /** Required. Immutable. The scope of this dimension. */
  scope?: Scope1;
  /**
   * Identifier. Resource name for this CustomDimension resource. Format:
   * properties/{property}/customDimensions/{customDimension}
   */
  name?: string;
  /** Optional. Description for this custom dimension. Max length of 150 characters. */
  description?: string;
  /**
   * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82
   * characters, alphanumeric plus space and underscore starting with a letter. Legacy
   * system-generated display names may contain square brackets, but updates to this field will
   * never permit square brackets.
   */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaCustomDimensionSchema: Schema<GoogleAnalyticsAdminV1BetaCustomDimension> =
  s.object<GoogleAnalyticsAdminV1BetaCustomDimension>(
    {
      disallowAdsPersonalization: s.optional(s.boolean()),
      parameterName: s.optional(s.string()),
      scope: s.optional(s.lazy(() => scope1Schema)),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
