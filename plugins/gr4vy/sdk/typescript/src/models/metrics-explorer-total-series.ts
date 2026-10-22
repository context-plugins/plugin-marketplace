import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type MetricsExplorerTotalSeries = {
  /**
   * The date and time of the first data point, represented with an ISO 8601 interval value
   * indicating whether it is aggregated by one minute (PT1M), one hour (PT1H), one day (P1D) or
   * thirty day (P30D) periods. The aggregation period is derived from the length of the requested
   * `datetime_range`.
   */
  firstInterval: string;
  /**
   * The values associated with the metric for the period. "volume" and "transactions" metrics are
   * represented as integers, while "authorization rate" metric is represented as decimal numbers.
   */
  values: Value[];
};

export const metricsExplorerTotalSeriesSchema: Schema<MetricsExplorerTotalSeries> =
  s.object<MetricsExplorerTotalSeries>({
    firstInterval: s.string(),
    values: s.array(s.lazy(() => valueSchema)),
    _keysMap: {
      firstInterval: "first_interval",
    },
  });
