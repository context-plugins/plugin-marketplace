import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the announcement */
export const Status8 = {
  Active: "active",
  Inactive: "inactive",
  Scheduled: "scheduled",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
