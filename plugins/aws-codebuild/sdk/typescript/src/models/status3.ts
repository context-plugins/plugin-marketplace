import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the report group. This property is read-only. This can be one of the following
 * values: ACTIVE The report group is active. DELETING The report group is in the process of being
 * deleted.
 */
export const Status3 = {
  Active: "ACTIVE",
  Deleting: "DELETING",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
