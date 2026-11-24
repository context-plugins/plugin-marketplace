import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for
 * each created insight.
 */
export const OptInStatus = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type OptInStatus = (typeof OptInStatus)[keyof typeof OptInStatus] | (string & {});

export const optInStatusSchema: EnumSchema<OptInStatus> = s.enumOf<OptInStatus>(OptInStatus);
