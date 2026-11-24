import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled for
 * this build project. DISABLED: S3 build logs are not enabled for this build project.
 */
export const Status1 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
