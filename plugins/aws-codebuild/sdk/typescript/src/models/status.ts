import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED:
 * CloudWatch Logs are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for
 * this build project.
 */
export const Status = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
