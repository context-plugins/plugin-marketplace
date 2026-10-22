import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LakeDatasetMetrics = {
  /** Total current logical size of the Dataset, in bytes. */
  currentSizeBytes: number;
  /**
   * Timestamp (in Unix time) when the metrics snapshot was generated, as a YYYY-MM-DD calendar
   * date.
   */
  metricsDate: string;
};

export const lakeDatasetMetricsSchema: Schema<LakeDatasetMetrics> = s.object<LakeDatasetMetrics>({
  currentSizeBytes: s.float64(),
  metricsDate: s.string(),
});
