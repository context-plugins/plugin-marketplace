import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specifies a Metastore configuration. */
export type MetastoreConfig = {
  /**
   * Required. Resource name of an existing Metastore service.Example:
   * projects/[project_id]/locations/[dataproc_region]/services/[service-name]
   */
  dataprocMetastoreService?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metastoreConfigSchema: Schema<MetastoreConfig> = s.object<MetastoreConfig>(
  {
    dataprocMetastoreService: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
