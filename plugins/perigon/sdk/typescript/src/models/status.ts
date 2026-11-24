import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current lifecycle status of the contact point. */
export const Status = {
  Active: "ACTIVE",
  Stopped: "STOPPED",
  Failing: "FAILING",
  Archived: "ARCHIVED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
