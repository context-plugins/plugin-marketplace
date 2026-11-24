import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. Snapshot of current workload resource usage. */
export type UsageSnapshot2 = {
  /**
   * Optional. Milli (one-thousandth) accelerator for A100-80 accelerators. (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing))
   */
  milliAcceleratorA10080?: string;
  /**
   * Optional. Milli (one-thousandth) accelerator for L4 accelerators. (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing))
   */
  milliAcceleratorL4?: string;
  /**
   * Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see
   * Dataproc Serverless pricing (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliDcuPremium?: string;
  /**
   * Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing))
   */
  shuffleStorageGb?: string;
  /**
   * Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing)).
   */
  milliDcu?: string;
  /**
   * Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime
   * versions below 3.0.
   */
  acceleratorType?: string;
  /**
   * Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing
   * (https://cloud.google.com/dataproc-serverless/pricing)) Deprecated: This field is only used in
   * runtime versions below 3.0.
   */
  milliAccelerator?: string;
  /** Optional. The timestamp of the usage snapshot. */
  snapshotTime?: string;
  /**
   * Optional. Milli (one-thousandth) accelerator for A100-40 accelerators. (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing))
   */
  milliAcceleratorA10040?: string;
  /**
   * Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless
   * pricing (https://cloud.google.com/dataproc-serverless/pricing))
   */
  shuffleStorageGbPremium?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSnapshot2Schema: Schema<UsageSnapshot2> = s.object<UsageSnapshot2>(
  {
    milliAcceleratorA10080: s.optional(s.string()),
    milliAcceleratorL4: s.optional(s.string()),
    milliDcuPremium: s.optional(s.string()),
    shuffleStorageGb: s.optional(s.string()),
    milliDcu: s.optional(s.string()),
    acceleratorType: s.optional(s.string()),
    milliAccelerator: s.optional(s.string()),
    snapshotTime: s.optional(s.string()),
    milliAcceleratorA10040: s.optional(s.string()),
    shuffleStorageGbPremium: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
