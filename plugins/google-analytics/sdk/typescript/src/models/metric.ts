import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The quantitative measurements of a report. For example, the metric `eventCount` is the total
 * number of events. Requests are allowed up to 10 metrics.
 */
export type Metric = {
  /**
   * Indicates if a metric is invisible in the report response. If a metric is invisible, the metric
   * will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a
   * metric `expression`.
   */
  invisible?: boolean;
  /**
   * The name of the metric. See the [API
   * Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics)
   * for the list of metric names supported by core reporting methods such as `runReport` and
   * `batchRunReports`. See [Realtime
   * Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics)
   * for the list of metric names supported by the `runRealtimeReport` method. See [Funnel
   * Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics)
   * for the list of metric names supported by the `runFunnelReport` method. If `expression` is
   * specified, `name` can be any string that you would like within the allowed character set. For
   * example if `expression` is `screenPageViews/sessions`, you could call that metric's name =
   * `viewsPerSession`. Metric names that you choose must match the regular expression
   * `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric
   * `expression`.
   */
  name?: string;
  /**
   * A mathematical expression for derived metrics. For example, the metric Event count per user is
   * `eventCount/totalUsers`.
   */
  expression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricSchema: Schema<Metric> = s.object<Metric>(
  {
    invisible: s.optional(s.boolean()),
    name: s.optional(s.string()),
    expression: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
