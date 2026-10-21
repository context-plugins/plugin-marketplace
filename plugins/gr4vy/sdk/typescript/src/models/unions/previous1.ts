import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  metricsExplorerTotalSummarySchema,
  type MetricsExplorerTotalSummary,
} from "../metrics-explorer-total-summary.js";

/**
 * The total value for the previous period. <br/>For `volume` and `transactions` metrics, the value
 * is the sum of all values in the `previous` series. <br/>For `auth_rate` metric, the value is the
 * count of authorized transactions over the count of processed transactions for the previous
 * period.
 */
export type Previous1 = MetricsExplorerTotalSummary;

export const previous1Schema: Schema<Previous1> = s.of<Previous1>(
  s.union([s.lazy(() => metricsExplorerTotalSummarySchema)]),
);
