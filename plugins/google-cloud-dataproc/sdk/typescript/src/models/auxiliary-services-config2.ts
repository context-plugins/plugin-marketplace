import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metastoreConfig1Schema, type MetastoreConfig1 } from "./metastore-config1.js";
import {
  sparkHistoryServerConfig1Schema,
  type SparkHistoryServerConfig1,
} from "./spark-history-server-config1.js";

/** Optional. Configuration of auxiliary services used by this cluster. */
export type AuxiliaryServicesConfig2 = {
  /** Optional. The Spark History Server configuration for the workload. */
  sparkHistoryServerConfig?: SparkHistoryServerConfig1;
  /** Optional. The Hive Metastore configuration for this workload. */
  metastoreConfig?: MetastoreConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auxiliaryServicesConfig2Schema: Schema<AuxiliaryServicesConfig2> =
  s.object<AuxiliaryServicesConfig2>(
    {
      sparkHistoryServerConfig: s.optional(s.lazy(() => sparkHistoryServerConfig1Schema)),
      metastoreConfig: s.optional(s.lazy(() => metastoreConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
