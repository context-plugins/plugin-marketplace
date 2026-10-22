import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExplorerTotalSeriesSet2Schema,
  type MetricsExplorerTotalSeriesSet2,
} from "./metrics-explorer-total-series-set2.js";
import {
  metricsExplorerTotalSummarySet2Schema,
  type MetricsExplorerTotalSummarySet2,
} from "./metrics-explorer-total-summary-set2.js";
import { Type40, type40Schema } from "./type40.js";

export type MetricsExplorerTotalResponse = {
  /** Always `metrics-explorer.total`. @default Type40.MetricsExplorerTotal */
  type?: Type40;
  /**
   * Contains two series of data points used to build the line chart. Each series contains
   * aggregations of data created over the duration of the specified period (e.g. `P7D/hour_start`).
   * The `previous` series contains aggregations from the period immediately preceding the `current`
   * series.
   */
  series: MetricsExplorerTotalSeriesSet2;
  /** A summary of the totals data. */
  summary: MetricsExplorerTotalSummarySet2;
};

export const metricsExplorerTotalResponseSchema: Schema<MetricsExplorerTotalResponse> =
  s.object<MetricsExplorerTotalResponse>({
    type: s.defaulted(type40Schema, Type40.MetricsExplorerTotal),
    series: metricsExplorerTotalSeriesSet2Schema,
    summary: metricsExplorerTotalSummarySet2Schema,
  });
