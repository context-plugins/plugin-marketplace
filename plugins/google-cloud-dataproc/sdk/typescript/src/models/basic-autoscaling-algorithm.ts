import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  basicYarnAutoscalingConfig2Schema,
  type BasicYarnAutoscalingConfig2,
} from "./basic-yarn-autoscaling-config2.js";
import {
  sparkStandaloneAutoscalingConfig2Schema,
  type SparkStandaloneAutoscalingConfig2,
} from "./spark-standalone-autoscaling-config2.js";

/** Basic algorithm for autoscaling. */
export type BasicAutoscalingAlgorithm = {
  /** Optional. YARN autoscaling configuration. */
  yarnConfig?: BasicYarnAutoscalingConfig2;
  /**
   * Optional. Duration between scaling events. A scaling period starts after the update operation
   * from the previous event has completed.Bounds: 2m, 1d. Default: 2m.
   */
  cooldownPeriod?: string;
  /** Optional. Spark Standalone autoscaling configuration */
  sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const basicAutoscalingAlgorithmSchema: Schema<BasicAutoscalingAlgorithm> =
  s.object<BasicAutoscalingAlgorithm>(
    {
      yarnConfig: s.optional(s.lazy(() => basicYarnAutoscalingConfig2Schema)),
      cooldownPeriod: s.optional(s.string()),
      sparkStandaloneConfig: s.optional(s.lazy(() => sparkStandaloneAutoscalingConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
