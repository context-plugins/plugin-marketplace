import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An audience dimension is a user attribute. Specific user attributed are requested and then later
 * returned in the `QueryAudienceExportResponse`.
 */
export type V1BetaAudienceDimension = {
  /**
   * Optional. The API name of the dimension. See the [API
   * Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions)
   * for the list of dimension names.
   */
  dimensionName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BetaAudienceDimensionSchema: Schema<V1BetaAudienceDimension> =
  s.object<V1BetaAudienceDimension>(
    {
      dimensionName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
