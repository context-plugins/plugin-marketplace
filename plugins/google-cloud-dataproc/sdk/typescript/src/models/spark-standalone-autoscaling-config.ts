import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Basic autoscaling configurations for Spark Standalone. */
export type SparkStandaloneAutoscalingConfig = {
  /**
   * Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling
   * occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
   * recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the
   * autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
   */
  scaleDownMinWorkerFraction?: number;
  /**
   * Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor
   * of 1.0 will result in scaling up so that there are no more required workers for the Spark Job
   * (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of
   * scaling up (less aggressive scaling).Bounds: 0.0, 1.0.
   */
  scaleUpFactor?: number;
  /**
   * Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration
   * to wait for spark worker to complete spark decommissioning tasks before forcefully removing
   * workers. Only applicable to downscaling operations.Bounds: 0s, 1d.
   */
  gracefulDecommissionTimeout?: string;
  /**
   * Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down
   * factor of 1.0 will result in scaling down so that there are no more executors for the Spark
   * Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller
   * magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0.
   */
  scaleDownFactor?: number;
  /**
   * Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.
   * For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at
   * least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will
   * scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0.
   */
  scaleUpMinWorkerFraction?: number;
  /** Optional. Remove only idle workers when scaling down cluster */
  removeOnlyIdleWorkers?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkStandaloneAutoscalingConfigSchema: Schema<SparkStandaloneAutoscalingConfig> =
  s.object<SparkStandaloneAutoscalingConfig>(
    {
      scaleDownMinWorkerFraction: s.optional(s.float64()),
      scaleUpFactor: s.optional(s.float64()),
      gracefulDecommissionTimeout: s.optional(s.string()),
      scaleDownFactor: s.optional(s.float64()),
      scaleUpMinWorkerFraction: s.optional(s.float64()),
      removeOnlyIdleWorkers: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
