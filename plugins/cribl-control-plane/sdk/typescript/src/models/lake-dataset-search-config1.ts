import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datasetMetadata1Schema, type DatasetMetadata1 } from "./dataset-metadata1.js";
import { objectStorageFilterSchema, type ObjectStorageFilter } from "./object-storage-filter.js";
import { searchExecutionConfigSchema, type SearchExecutionConfig } from "./search-execution-config.js";
import { searchVersion1Schema, type SearchVersion1 } from "./search-version1.js";

/** Search configuration for the Dataset. */
export type LakeDatasetSearchConfig1 = {
  /** Datatype identifiers assigned to the Dataset for search-time event classification. */
  datatypes?: string[];
  /** Brief description of the Dataset search configuration. */
  description?: string;
  /** Key-value metadata for the Dataset search configuration. */
  metadata?: DatasetMetadata1;
  /** Glob-to-Datatype mappings for the Lake bucket path. Used only for search execution v2. */
  pathFilters?: ObjectStorageFilter[];
  searchExecution?: SearchExecutionConfig;
  /**
   * Search execution version for the Cribl Lake Dataset. Search execution v1 uses Event Breakers
   * and Datatypes, and v2 uses path filters. If omitted, default is v1.
   */
  searchVersion?: SearchVersion1;
  /** Comma-separated tags for the Dataset search configuration. */
  tags?: string;
};

export const lakeDatasetSearchConfig1Schema: Schema<LakeDatasetSearchConfig1> =
  s.object<LakeDatasetSearchConfig1>({
    datatypes: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    metadata: s.optional(s.lazy(() => datasetMetadata1Schema)),
    pathFilters: s.optional(s.array(s.lazy(() => objectStorageFilterSchema))),
    searchExecution: s.optional(s.lazy(() => searchExecutionConfigSchema)),
    searchVersion: s.optional(s.lazy(() => searchVersion1Schema)),
    tags: s.optional(s.string()),
  });
