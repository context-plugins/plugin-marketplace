import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Queued: "queued",
  Running: "running",
  Done: "done",
  Partial: "partial",
  Cancelled: "cancelled",
  Failed: "failed",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
