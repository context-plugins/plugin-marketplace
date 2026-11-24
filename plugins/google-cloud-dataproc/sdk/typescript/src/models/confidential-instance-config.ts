import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  confidentialInstanceTypeSchema,
  type ConfidentialInstanceType,
} from "./confidential-instance-type.js";

/**
 * Confidential Instance Config for clusters using Confidential VMs
 * (https://cloud.google.com/confidential-computing/confidential-vm/docs)
 */
export type ConfidentialInstanceConfig = {
  /** Optional. Defines the type of Confidential Compute technology to use. */
  confidentialInstanceType?: ConfidentialInstanceType;
  /**
   * Optional. Deprecated: Use 'confidential_instance_type' instead. Defines whether the instance
   * should have confidential compute enabled.
   *
   * @deprecated
   */
  enableConfidentialCompute?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confidentialInstanceConfigSchema: Schema<ConfidentialInstanceConfig> =
  s.object<ConfidentialInstanceConfig>(
    {
      confidentialInstanceType: s.optional(s.lazy(() => confidentialInstanceTypeSchema)),
      enableConfidentialCompute: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
