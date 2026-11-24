import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the
 * email of the user that accessed reporting data. Dimension values in report responses are strings.
 */
export type GoogleAnalyticsAdminV1BetaAccessDimension = {
  /**
   * The API name of the dimension. See [Data Access
   * Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema)
   * for the list of dimensions supported in this API. Dimensions are referenced by name in
   * `dimensionFilter` and `orderBys`.
   */
  dimensionName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessDimensionSchema: Schema<GoogleAnalyticsAdminV1BetaAccessDimension> =
  s.object<GoogleAnalyticsAdminV1BetaAccessDimension>(
    {
      dimensionName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
