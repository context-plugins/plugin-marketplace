import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blmtConfig2Schema, type BlmtConfig2 } from "./blmt-config2.js";
import { singleTargetDataset2Schema, type SingleTargetDataset2 } from "./single-target-dataset2.js";
import {
  sourceHierarchyDatasets1Schema,
  type SourceHierarchyDatasets1,
} from "./source-hierarchy-datasets1.js";

/** BigQuery destination configuration */
export type BigQueryDestinationConfig = {
  /** Single destination dataset. */
  singleTargetDataset?: SingleTargetDataset2;
  /**
   * The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing
   * this field will only affect new tables created in the future, but existing tables will not be
   * impacted. Lower values mean that queries will return fresher data, but may result in higher
   * cost.
   */
  dataFreshness?: string;
  /** The standard mode */
  merge?: Record<string, unknown>;
  /** Optional. Big Lake Managed Tables (BLMT) configuration. */
  blmtConfig?: BlmtConfig2;
  /** Append only mode */
  appendOnly?: Record<string, unknown>;
  /** Source hierarchy datasets. */
  sourceHierarchyDatasets?: SourceHierarchyDatasets1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bigQueryDestinationConfigSchema: Schema<BigQueryDestinationConfig> =
  s.object<BigQueryDestinationConfig>(
    {
      singleTargetDataset: s.optional(s.lazy(() => singleTargetDataset2Schema)),
      dataFreshness: s.optional(s.string()),
      merge: s.optional(s.record(s.string(), s.unknown())),
      blmtConfig: s.optional(s.lazy(() => blmtConfig2Schema)),
      appendOnly: s.optional(s.record(s.string(), s.unknown())),
      sourceHierarchyDatasets: s.optional(s.lazy(() => sourceHierarchyDatasets1Schema)),
    },
    { additionalProperties: s.json() },
  );
