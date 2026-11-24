import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The
 * effect of the new job status takes place during a subsequent job run. For example, if you change
 * the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the
 * status change would not affect the current operation.
 */
export const Status3 = {
  StatusUnspecified: "STATUS_UNSPECIFIED",
  Enabled: "ENABLED",
  Disabled: "DISABLED",
  Deleted: "DELETED",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
