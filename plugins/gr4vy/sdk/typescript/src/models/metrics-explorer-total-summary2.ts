import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

/**
 * The total value for the current period. <br/>For `volume` and `transactions` metrics, the value
 * is the sum of all values in the `current` series. <br/>For `auth_rate` metric, the value is the
 * count of authorized transactions over the count of processed transactions for the current period.
 */
export type MetricsExplorerTotalSummary2 = {
  value?: Value;
};

export const metricsExplorerTotalSummary2Schema: Schema<MetricsExplorerTotalSummary2> =
  s.object<MetricsExplorerTotalSummary2>({
    value: s.optional(s.lazy(() => valueSchema)),
  });
