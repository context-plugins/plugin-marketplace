import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cacheConnection1Schema, type CacheConnection1 } from "./cache-connection1.js";
import {
  formatOptionsCriblLakeDatasetSchema,
  type FormatOptionsCriblLakeDataset,
} from "./format-options-cribl-lake-dataset.js";
import { lakeDatasetMetrics1Schema, type LakeDatasetMetrics1 } from "./lake-dataset-metrics1.js";
import {
  lakeDatasetSearchConfig1Schema,
  type LakeDatasetSearchConfig1,
} from "./lake-dataset-search-config1.js";
import {
  storageClassOptionsCriblLakeDatasetSchema,
  type StorageClassOptionsCriblLakeDataset,
} from "./storage-class-options-cribl-lake-dataset.js";

export type CriblLakeDatasetUpdate = {
  /**
   * Accelerated fields for the Dataset. Data is partitioned by these fields in storage to improve
   * query performance.
   */
  acceleratedFields?: string[];
  /**
   * If <code>true</code>, the Dataset is opted in to Lake Record Erasure. Off by default; only
   * settable when the <code>feature-lake-record-erasure</code> flag is enabled.
   */
  allowRecordErasure?: boolean;
  /**
   * Name of the legacy Cribl Lake bucket that backs the Dataset. Mutually exclusive with
   * <code>storageLocationId</code>.
   */
  bucketName?: string;
  /** Lakehouse cache connection settings for the Dataset. */
  cacheConnection?: CacheConnection1;
  /** Timestamp (in Unix time) when Dataset deletion was initiated, in milliseconds. */
  deletionStartedAt?: number;
  /** Brief description of the Dataset. */
  description?: string;
  /** Storage format used for data persisted in the Dataset. */
  format?: FormatOptionsCriblLakeDataset;
  /**
   * If <code>true</code>, the Dataset is used by Direct Access HTTP. Otherwise, <code>false</code>.
   */
  httpDaUsed?: boolean;
  /**
   * Unique identifier for the Dataset. Optional; the path parameter <code>id</code> is
   * authoritative.
   */
  id?: string;
  /** Most recent Dataset metrics snapshot. */
  metrics?: LakeDatasetMetrics1;
  /**
   * Storage path within the provider (for example an S3 prefix or Azure container). Independent of
   * <code>id</code> for catalog-backed Datasets so name reuse after delete cannot collide with
   * lingering object-storage data. When omitted, <code>id</code> is the storage path (legacy YAML
   * Datasets).
   */
  providerPath?: string;
  /** Dataset retention period, in days. */
  retentionPeriodInDays?: number;
  /** Search configuration for the Dataset. */
  searchConfig?: LakeDatasetSearchConfig1;
  /** Storage class used for objects written to the Dataset. */
  storageClass?: StorageClassOptionsCriblLakeDataset;
  /**
   * Unique identifier for the Storage Location that backs the Dataset. Mutually exclusive with
   * <code>bucketName</code>.
   */
  storageLocationId?: string;
  /** Name of the ClickHouse view for the Dataset on the Lakehouse. */
  viewName?: string;
};

export const criblLakeDatasetUpdateSchema: Schema<CriblLakeDatasetUpdate> = s.object<CriblLakeDatasetUpdate>({
  acceleratedFields: s.optional(s.array(s.string())),
  allowRecordErasure: s.optional(s.boolean()),
  bucketName: s.optional(s.string()),
  cacheConnection: s.optional(s.lazy(() => cacheConnection1Schema)),
  deletionStartedAt: s.optional(s.float64()),
  description: s.optional(s.string()),
  format: s.optional(s.lazy(() => formatOptionsCriblLakeDatasetSchema)),
  httpDaUsed: s.optional(s.boolean()),
  id: s.optional(s.string()),
  metrics: s.optional(s.lazy(() => lakeDatasetMetrics1Schema)),
  providerPath: s.optional(s.string()),
  retentionPeriodInDays: s.optional(s.int()),
  searchConfig: s.optional(s.lazy(() => lakeDatasetSearchConfig1Schema)),
  storageClass: s.optional(s.lazy(() => storageClassOptionsCriblLakeDatasetSchema)),
  storageLocationId: s.optional(s.string()),
  viewName: s.optional(s.string()),
  _keysMap: {
    httpDaUsed: "httpDAUsed",
  },
});
