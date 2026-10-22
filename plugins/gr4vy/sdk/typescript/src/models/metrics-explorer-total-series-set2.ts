import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExplorerTotalSeries2Schema,
  type MetricsExplorerTotalSeries2,
} from "./metrics-explorer-total-series2.js";
import { previousSchema, type Previous } from "./unions/previous.js";

/**
 * Contains two series of data points used to build the line chart. Each series contains
 * aggregations of data created over the duration of the specified period (e.g. `P7D/hour_start`).
 * The `previous` series contains aggregations from the period immediately preceding the `current`
 * series.
 */
export type MetricsExplorerTotalSeriesSet2 = {
  /**
   * Metrics for the transactions created during the current period aggregated by minute, hour, day
   * or thirty days, depending on the length of the requested period. The meaning of the values
   * depends on the metric used to call the endpoint. "volume" and "transactions" metrics are
   * represented as integers, while "authorization rate" metric is represented as decimal numbers.
   * `null`s may be returned when there is no data for authorization rate to indicate that the
   * metric is not applicable for the given time period.
   */
  current: MetricsExplorerTotalSeries2;
  /**
   * Metrics for the transactions created during the period immediately preceding the current period
   * aggregated by minute, hour, day or thirty days, depending on the length of the requested
   * period. The meaning of the values depends on the metric used to call the endpoint. "volume" and
   * "transactions" metrics are represented as integers, while "authorization rate" metric is
   * represented as decimal numbers. `null`s may be returned when there is no data for authorization
   * rate to indicate that the metric is not applicable for the given time period.
   */
  previous: Previous;
};

export const metricsExplorerTotalSeriesSet2Schema: Schema<MetricsExplorerTotalSeriesSet2> =
  s.object<MetricsExplorerTotalSeriesSet2>({
    current: metricsExplorerTotalSeries2Schema,
    previous: previousSchema,
  });
