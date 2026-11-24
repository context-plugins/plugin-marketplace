import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs
 * (https://cloud.google.com/security/shielded-cloud/shielded-vm).
 */
export type ShieldedInstanceConfig2 = {
  /** Optional. Defines whether instances have Secure Boot enabled. */
  enableSecureBoot?: boolean;
  /** Optional. Defines whether instances have the vTPM enabled. */
  enableVtpm?: boolean;
  /** Optional. Defines whether instances have integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shieldedInstanceConfig2Schema: Schema<ShieldedInstanceConfig2> =
  s.object<ShieldedInstanceConfig2>(
    {
      enableSecureBoot: s.optional(s.boolean()),
      enableVtpm: s.optional(s.boolean()),
      enableIntegrityMonitoring: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
