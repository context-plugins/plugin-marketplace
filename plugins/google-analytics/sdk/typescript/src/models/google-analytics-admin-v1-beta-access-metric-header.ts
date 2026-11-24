import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Describes a metric column in the report. Visible metrics requested in a report produce column
 * entries within rows and MetricHeaders. However, metrics used exclusively within filters or
 * expressions do not produce columns in a report; correspondingly, those metrics do not produce
 * headers.
 */
export type GoogleAnalyticsAdminV1BetaAccessMetricHeader = {
  /** The metric's name; for example 'accessCount'. */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessMetricHeaderSchema: Schema<GoogleAnalyticsAdminV1BetaAccessMetricHeader> =
  s.object<GoogleAnalyticsAdminV1BetaAccessMetricHeader>(
    {
      metricName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
