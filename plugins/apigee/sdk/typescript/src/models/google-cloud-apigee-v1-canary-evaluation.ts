import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CanaryEvaluationMetricLabels2Schema,
  type GoogleCloudApigeeV1CanaryEvaluationMetricLabels2,
} from "./google-cloud-apigee-v1-canary-evaluation-metric-labels2.js";
import { state5Schema, type State5 } from "./state5.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/**
 * CanaryEvaluation represents the canary analysis between two versions of the runtime that is
 * serving requests.
 */
export type GoogleCloudApigeeV1CanaryEvaluation = {
  /** Required. End time for the evaluation's analysis. */
  endTime?: string;
  /** Required. Labels used to filter the metrics used for a canary evaluation. */
  metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels2;
  /** Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL. */
  verdict?: Verdict;
  /** Output only. The current state of the canary evaluation. */
  state?: State5;
  /** Required. The newer version that is serving requests. */
  treatment?: string;
  /** Output only. Name of the canary evalution. */
  name?: string;
  /** Required. The stable version that is serving requests. */
  control?: string;
  /** Required. Start time for the canary evaluation's analysis. */
  startTime?: string;
  /** Output only. Create time of the canary evaluation. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CanaryEvaluationSchema: Schema<GoogleCloudApigeeV1CanaryEvaluation> =
  s.object<GoogleCloudApigeeV1CanaryEvaluation>(
    {
      endTime: s.optional(s.string()),
      metricLabels: s.optional(s.lazy(() => googleCloudApigeeV1CanaryEvaluationMetricLabels2Schema)),
      verdict: s.optional(s.lazy(() => verdictSchema)),
      state: s.optional(s.lazy(() => state5Schema)),
      treatment: s.optional(s.string()),
      name: s.optional(s.string()),
      control: s.optional(s.string()),
      startTime: s.optional(s.string()),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
