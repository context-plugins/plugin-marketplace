import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExplorerTotalSeries2Schema,
  type MetricsExplorerTotalSeries2,
} from "./metrics-explorer-total-series2.js";
import { previousSchema, type Previous } from "./unions/previous.js";

export type MetricsExplorerTotalSeriesSet = {
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

export const metricsExplorerTotalSeriesSetSchema: Schema<MetricsExplorerTotalSeriesSet> =
  s.object<MetricsExplorerTotalSeriesSet>({
    current: metricsExplorerTotalSeries2Schema,
    previous: previousSchema,
  });
