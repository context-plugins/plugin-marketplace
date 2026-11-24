import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status31 = {
  Queued: "QUEUED",
  Running: "RUNNING",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Skipped: "SKIPPED",
} as const;
export type Status31 = (typeof Status31)[keyof typeof Status31] | (string & {});

export const status31Schema: EnumSchema<Status31> = s.enumOf<Status31>(Status31);
