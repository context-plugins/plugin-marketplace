import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the asset. */
export const Status1 = {
  Active: "active",
  Inactive: "inactive",
  Deleted: "deleted",
  Pending: "pending",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
