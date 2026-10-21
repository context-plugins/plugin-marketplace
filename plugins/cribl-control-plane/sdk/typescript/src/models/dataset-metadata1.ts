import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datasetMetadataRunInfo1Schema, type DatasetMetadataRunInfo1 } from "./dataset-metadata-run-info1.js";
import { scanModeSchema, type ScanMode } from "./scan-mode.js";

/** Key-value metadata for the Dataset search configuration. */
export type DatasetMetadata1 = {
  /** Rolling time window that defines how far back acceleration scans. */
  earliest: string;
  /**
   * If <code>true</code>, the system automatically backfills and refreshes Dataset metadata.
   * Otherwise, <code>false</code>.
   */
  enableAcceleration: boolean;
  /**
   * Fields for which acceleration gathers statistics. Required when scan mode is
   * <code>detailed</code>.
   */
  fieldList: string[];
  /** Details from the most recent acceleration scan. */
  latestRunInfo?: DatasetMetadataRunInfo1;
  /**
   * Acceleration scan mode. <code>quick</code> collects object-level metadata;
   * <code>detailed</code> also collects field-level statistics.
   */
  scanMode: ScanMode;
};

export const datasetMetadata1Schema: Schema<DatasetMetadata1> = s.object<DatasetMetadata1>({
  earliest: s.string(),
  enableAcceleration: s.boolean(),
  fieldList: s.array(s.string()),
  latestRunInfo: s.optional(s.lazy(() => datasetMetadataRunInfo1Schema)),
  scanMode: scanModeSchema,
});
