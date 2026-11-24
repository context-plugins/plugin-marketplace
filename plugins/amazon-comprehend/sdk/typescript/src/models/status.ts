import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter the datasets based on the dataset status. */
export const Status = {
  Creating: "CREATING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
