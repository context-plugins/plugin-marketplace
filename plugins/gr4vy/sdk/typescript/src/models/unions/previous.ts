import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  metricsExplorerTotalSeriesSchema,
  type MetricsExplorerTotalSeries,
} from "../metrics-explorer-total-series.js";

/**
 * Metrics for the transactions created during the period immediately preceding the current period
 * aggregated by minute, hour, day or thirty days, depending on the length of the requested period.
 * The meaning of the values depends on the metric used to call the endpoint. "volume" and
 * "transactions" metrics are represented as integers, while "authorization rate" metric is
 * represented as decimal numbers. `null`s may be returned when there is no data for authorization
 * rate to indicate that the metric is not applicable for the given time period.
 */
export type Previous = MetricsExplorerTotalSeries;

export const previousSchema: Schema<Previous> = s.of<Previous>(
  s.union([s.lazy(() => metricsExplorerTotalSeriesSchema)]),
);
