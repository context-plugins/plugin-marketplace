import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The Hive Metastore configuration for this workload. */
export type MetastoreConfig1 = {
  /**
   * Required. Resource name of an existing Metastore service.Example:
   * projects/[project_id]/locations/[dataproc_region]/services/[service-name]
   */
  dataprocMetastoreService?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metastoreConfig1Schema: Schema<MetastoreConfig1> = s.object<MetastoreConfig1>(
  {
    dataprocMetastoreService: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
