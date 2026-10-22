import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Most recent Dataset metrics snapshot. */
export type LakeDatasetMetrics1 = {
  /** Total current logical size of the Dataset, in bytes. */
  currentSizeBytes: number;
  /**
   * Timestamp (in Unix time) when the metrics snapshot was generated, as a YYYY-MM-DD calendar
   * date.
   */
  metricsDate: string;
};

export const lakeDatasetMetrics1Schema: Schema<LakeDatasetMetrics1> = s.object<LakeDatasetMetrics1>({
  currentSizeBytes: s.float64(),
  metricsDate: s.string(),
});
