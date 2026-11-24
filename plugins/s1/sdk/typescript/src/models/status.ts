import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Queued: "queued",
  Waiting: "waiting",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  NotFound: "not_found",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
