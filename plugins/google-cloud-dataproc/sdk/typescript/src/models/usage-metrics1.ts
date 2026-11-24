import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Output only. Approximate workload resource usage, calculated when the workload completes (see
 * Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).Note: This
 * metric calculation may change in the future, for example, to capture cumulative workload resource
 * consumption during workload execution (see the Dataproc Serverless release notes
 * (https://cloud.google.com/dataproc-serverless/docs/release-notes) for announcements, changes,
 * fixes and other Dataproc developments).
 */
export type UsageMetrics1 = {
  /**
   * Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  shuffleStorageGbSeconds?: string;
  /**
   * Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime
   * versions below 3.0.
   */
  acceleratorType?: string;
  /**
   * Optional. L4 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliAcceleratorSecondsL4?: string;
  /**
   * Optional. A100-40 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliAcceleratorSecondsA10040?: string;
  /** Optional. The timestamp of the usage metrics. */
  updateTime?: string;
  /**
   * Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing)). Deprecated: This field is only used in
   * runtime versions below 3.0.
   */
  milliAcceleratorSeconds?: string;
  /**
   * Optional. A100-80 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliAcceleratorSecondsA10080?: string;
  /**
   * Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliDcuSeconds?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageMetrics1Schema: Schema<UsageMetrics1> = s.object<UsageMetrics1>(
  {
    shuffleStorageGbSeconds: s.optional(s.string()),
    acceleratorType: s.optional(s.string()),
    milliAcceleratorSecondsL4: s.optional(s.string()),
    milliAcceleratorSecondsA10040: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    milliAcceleratorSeconds: s.optional(s.string()),
    milliAcceleratorSecondsA10080: s.optional(s.string()),
    milliDcuSeconds: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
