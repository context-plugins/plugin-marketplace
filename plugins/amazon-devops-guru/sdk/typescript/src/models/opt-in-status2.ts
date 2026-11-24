import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies if DevOps Guru is enabled for customer managed keys. */
export const OptInStatus2 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type OptInStatus2 = (typeof OptInStatus2)[keyof typeof OptInStatus2] | (string & {});

export const optInStatus2Schema: EnumSchema<OptInStatus2> = s.enumOf<OptInStatus2>(OptInStatus2);
