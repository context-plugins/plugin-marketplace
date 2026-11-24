import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Labels used to filter the metrics used for a canary evaluation. */
export type GoogleCloudApigeeV1CanaryEvaluationMetricLabels2 = {
  /** The environment ID associated with the metrics. */
  env?: string;
  /**
   * Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is
   * configured during installation.
   */
  instanceId?: string;
  /** Required. The location associated with the metrics. */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CanaryEvaluationMetricLabels2Schema: Schema<GoogleCloudApigeeV1CanaryEvaluationMetricLabels2> =
  s.object<GoogleCloudApigeeV1CanaryEvaluationMetricLabels2>(
    {
      env: s.optional(s.string()),
      instanceId: s.optional(s.string()),
      location: s.optional(s.string()),
      _keysMap: {
        instanceId: "instance_id",
      },
    },
    { additionalProperties: s.json() },
  );
