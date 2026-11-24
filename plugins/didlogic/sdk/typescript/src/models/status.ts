import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Task status */
export const Status = {
  Pending: "pending",
  Completed: "completed",
  Failed: "failed",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
