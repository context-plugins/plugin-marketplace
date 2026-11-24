import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies if DevOps Guru is enabled for KMS integration. */
export const OptInStatus3 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type OptInStatus3 = (typeof OptInStatus3)[keyof typeof OptInStatus3] | (string & {});

export const optInStatus3Schema: EnumSchema<OptInStatus3> = s.enumOf<OptInStatus3>(OptInStatus3);
