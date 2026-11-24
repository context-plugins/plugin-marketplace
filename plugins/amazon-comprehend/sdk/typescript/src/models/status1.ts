import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The dataset status. While the system creates the dataset, the status is CREATING. When the
 * dataset is ready to use, the status changes to COMPLETED.
 */
export const Status1 = {
  Creating: "CREATING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
