import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The Spark History Server configuration for the workload. */
export type SparkHistoryServerConfig1 = {
  /**
   * Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for
   * the workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]
   */
  dataprocCluster?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkHistoryServerConfig1Schema: Schema<SparkHistoryServerConfig1> =
  s.object<SparkHistoryServerConfig1>(
    {
      dataprocCluster: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
