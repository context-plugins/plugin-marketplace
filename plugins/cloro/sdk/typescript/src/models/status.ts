import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current task status. */
export const Status = {
  Queued: "QUEUED",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
