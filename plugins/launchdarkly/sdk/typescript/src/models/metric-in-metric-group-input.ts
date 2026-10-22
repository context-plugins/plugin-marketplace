import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetricInMetricGroupInput = {
  /** The metric key */
  key: string;
  /**
   * Name of the metric when used within the associated metric group. Can be different from the
   * original name of the metric
   */
  nameInGroup: string;
};

export const metricInMetricGroupInputSchema: Schema<MetricInMetricGroupInput> =
  s.object<MetricInMetricGroupInput>({
    key: s.string(),
    nameInGroup: s.string(),
  });
