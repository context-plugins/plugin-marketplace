import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details from the most recent acceleration scan. */
export type DatasetMetadataRunInfo1 = {
  /**
   * Timestamp (in Unix time) for the earliest event that was observed during the scan (seconds).
   */
  earliestScannedTime?: number;
  /** Timestamp (in Unix time) when the acceleration run finished (milliseconds). */
  finishedAt?: number;
  /** Timestamp (in Unix time) for the latest event that was observed during the scan (seconds). */
  latestScannedTime?: number;
  /** Number of objects on the acceleration manifest after the scan completed. */
  objectCount?: number;
};

export const datasetMetadataRunInfo1Schema: Schema<DatasetMetadataRunInfo1> =
  s.object<DatasetMetadataRunInfo1>({
    earliestScannedTime: s.optional(s.int()),
    finishedAt: s.optional(s.int()),
    latestScannedTime: s.optional(s.int()),
    objectCount: s.optional(s.int()),
  });
