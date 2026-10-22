import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetricInput = {
  /** The metric key */
  key: string;
  /** Whether this is a metric group (true) or a metric (false). Defaults to false */
  isGroup?: boolean;
  /**
   * Deprecated, use <code>primarySingleMetricKey</code> and <code>primaryFunnelKey</code>. Whether
   * this is a primary metric (true) or a secondary metric (false)
   *
   * @deprecated
   */
  primary?: boolean;
};

export const metricInputSchema: Schema<MetricInput> = s.object<MetricInput>({
  key: s.string(),
  isGroup: s.optional(s.boolean()),
  primary: s.optional(s.boolean()),
});
