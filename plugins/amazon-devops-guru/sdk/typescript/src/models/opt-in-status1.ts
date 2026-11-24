import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies if DevOps Guru is configured to perform log anomaly detection on CloudWatch log groups.
 */
export const OptInStatus1 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type OptInStatus1 = (typeof OptInStatus1)[keyof typeof OptInStatus1] | (string & {});

export const optInStatus1Schema: EnumSchema<OptInStatus1> = s.enumOf<OptInStatus1>(OptInStatus1);
