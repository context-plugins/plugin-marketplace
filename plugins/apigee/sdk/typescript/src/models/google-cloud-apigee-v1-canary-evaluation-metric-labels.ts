import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Labels that can be used to filter Apigee metrics. */
export type GoogleCloudApigeeV1CanaryEvaluationMetricLabels = {
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

export const googleCloudApigeeV1CanaryEvaluationMetricLabelsSchema: Schema<GoogleCloudApigeeV1CanaryEvaluationMetricLabels> =
  s.object<GoogleCloudApigeeV1CanaryEvaluationMetricLabels>(
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
