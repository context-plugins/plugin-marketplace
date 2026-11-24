import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessDimensionValueSchema,
  type GoogleAnalyticsAdminV1BetaAccessDimensionValue,
} from "./google-analytics-admin-v1-beta-access-dimension-value.js";
import {
  googleAnalyticsAdminV1BetaAccessMetricValueSchema,
  type GoogleAnalyticsAdminV1BetaAccessMetricValue,
} from "./google-analytics-admin-v1-beta-access-metric-value.js";

/** Access report data for each row. */
export type GoogleAnalyticsAdminV1BetaAccessRow = {
  /** List of metric values. These values are in the same order as specified in the request. */
  metricValues?: GoogleAnalyticsAdminV1BetaAccessMetricValue[];
  /** List of dimension values. These values are in the same order as specified in the request. */
  dimensionValues?: GoogleAnalyticsAdminV1BetaAccessDimensionValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessRowSchema: Schema<GoogleAnalyticsAdminV1BetaAccessRow> =
  s.object<GoogleAnalyticsAdminV1BetaAccessRow>(
    {
      metricValues: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessMetricValueSchema))),
      dimensionValues: s.optional(
        s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessDimensionValueSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
