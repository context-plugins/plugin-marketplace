import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the high availability monitoring test. If a test hasn't been performed, the value
 * of this field is null.
 */
export const Status = {
  Complete: "COMPLETE",
  Failed: "FAILED",
  Pending: "PENDING",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
