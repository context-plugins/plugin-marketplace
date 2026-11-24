import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Shielded Instance Config for clusters using Compute Engine Shielded VMs
 * (https://cloud.google.com/security/shielded-cloud/shielded-vm).
 */
export type ShieldedInstanceConfig = {
  /** Optional. Defines whether instances have Secure Boot enabled. */
  enableSecureBoot?: boolean;
  /** Optional. Defines whether instances have the vTPM enabled. */
  enableVtpm?: boolean;
  /** Optional. Defines whether instances have integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shieldedInstanceConfigSchema: Schema<ShieldedInstanceConfig> = s.object<ShieldedInstanceConfig>(
  {
    enableSecureBoot: s.optional(s.boolean()),
    enableVtpm: s.optional(s.boolean()),
    enableIntegrityMonitoring: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
