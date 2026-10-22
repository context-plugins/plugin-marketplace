import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExplorerTotalSummary2Schema,
  type MetricsExplorerTotalSummary2,
} from "./metrics-explorer-total-summary2.js";
import { deltaSchema, type Delta } from "./unions/delta.js";
import { previous1Schema, type Previous1 } from "./unions/previous1.js";

/** A summary of the totals data. */
export type MetricsExplorerTotalSummarySet2 = {
  /**
   * The total value for the current period. <br/>For `volume` and `transactions` metrics, the value
   * is the sum of all values in the `current` series. <br/>For `auth_rate` metric, the value is the
   * count of authorized transactions over the count of processed transactions for the current
   * period.
   */
  current: MetricsExplorerTotalSummary2;
  /**
   * The total value for the previous period. <br/>For `volume` and `transactions` metrics, the
   * value is the sum of all values in the `previous` series. <br/>For `auth_rate` metric, the value
   * is the count of authorized transactions over the count of processed transactions for the
   * previous period.
   */
  previous: Previous1;
  /**
   * The difference between the current and previous values. Positive values indicate an increase,
   * while negative values indicate a decrease. <br/>For `volume` and `transactions` metrics, the
   * value is the percentage change between the current and previous values, however, for
   * `authorization rate` metric, the value is the absolute difference between the current and
   * previous values.
   */
  delta?: Delta;
};

export const metricsExplorerTotalSummarySet2Schema: Schema<MetricsExplorerTotalSummarySet2> =
  s.object<MetricsExplorerTotalSummarySet2>({
    current: metricsExplorerTotalSummary2Schema,
    previous: previous1Schema,
    delta: s.optional(s.lazy(() => deltaSchema)),
  });
