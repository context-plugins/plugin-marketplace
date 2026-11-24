import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sparkHistoryServerConfig1Schema,
  type SparkHistoryServerConfig1,
} from "./spark-history-server-config1.js";

/** Optional. Peripherals configuration that workload has access to. */
export type PeripheralsConfig2 = {
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

export const peripheralsConfig2Schema: Schema<PeripheralsConfig2> = s.object<PeripheralsConfig2>(
  {
    metastoreService: s.optional(s.string()),
    sparkHistoryServerConfig: s.optional(s.lazy(() => sparkHistoryServerConfig1Schema)),
  },
  { additionalProperties: s.json() },
);
