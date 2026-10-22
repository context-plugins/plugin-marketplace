import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the import integrations related import job */
export const Status4 = {
  Complete: "complete",
  Importing: "importing",
  Pending: "pending",
  Failed: "failed",
  Partial: "partial",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
