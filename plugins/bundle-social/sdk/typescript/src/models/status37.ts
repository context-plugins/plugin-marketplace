import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status37 = {
  Pending: "PENDING",
  Running: "RUNNING",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Skipped: "SKIPPED",
} as const;
export type Status37 = (typeof Status37)[keyof typeof Status37] | (string & {});

export const status37Schema: EnumSchema<Status37> = s.enumOf<Status37>(Status37);
