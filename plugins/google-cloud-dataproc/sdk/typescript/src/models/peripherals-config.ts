import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sparkHistoryServerConfig1Schema,
  type SparkHistoryServerConfig1,
} from "./spark-history-server-config1.js";

/** Auxiliary services configuration for a workload. */
export type PeripheralsConfig = {
  /**
   * Optional. Resource name of an existing Dataproc Metastore service.Example:
   * projects/[project_id]/locations/[region]/services/[service_id]
   */
  metastoreService?: string;
  /** Optional. The Spark History Server configuration for the workload. */
  sparkHistoryServerConfig?: SparkHistoryServerConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peripheralsConfigSchema: Schema<PeripheralsConfig> = s.object<PeripheralsConfig>(
  {
    metastoreService: s.optional(s.string()),
    sparkHistoryServerConfig: s.optional(s.lazy(() => sparkHistoryServerConfig1Schema)),
  },
  { additionalProperties: s.json() },
);
