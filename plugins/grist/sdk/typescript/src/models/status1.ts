import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * - disabled: timing is not enabled
 * - pending: timing is enabled but no data yet
 * - active: timing is enabled and data is available
 */
export const Status1 = {
  Disabled: "disabled",
  Pending: "pending",
  Active: "active",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
