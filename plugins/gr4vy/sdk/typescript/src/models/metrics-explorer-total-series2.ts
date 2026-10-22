import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

/**
 * Metrics for the transactions created during the current period aggregated by minute, hour, day or
 * thirty days, depending on the length of the requested period. The meaning of the values depends
 * on the metric used to call the endpoint. "volume" and "transactions" metrics are represented as
 * integers, while "authorization rate" metric is represented as decimal numbers. `null`s may be
 * returned when there is no data for authorization rate to indicate that the metric is not
 * applicable for the given time period.
 */
export type MetricsExplorerTotalSeries2 = {
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

export const metricsExplorerTotalSeries2Schema: Schema<MetricsExplorerTotalSeries2> =
  s.object<MetricsExplorerTotalSeries2>({
    firstInterval: s.string(),
    values: s.array(s.lazy(() => valueSchema)),
    _keysMap: {
      firstInterval: "first_interval",
    },
  });
