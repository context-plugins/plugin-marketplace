import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the flywheel. */
export const Status6 = {
  Creating: "CREATING",
  Active: "ACTIVE",
  Updating: "UPDATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
