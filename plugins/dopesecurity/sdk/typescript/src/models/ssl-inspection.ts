import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Effective SSL inspection status for this policy. If SSL inspection is not explicitly configured
 * on this policy, the value is inherited from the Base Policy.
 */
export const SslInspection = {
  Enabled: "enabled",
  Disabled: "disabled",
} as const;
export type SslInspection = (typeof SslInspection)[keyof typeof SslInspection] | (string & {});

export const sslInspectionSchema: EnumSchema<SslInspection> = s.enumOf<SslInspection>(SslInspection);
