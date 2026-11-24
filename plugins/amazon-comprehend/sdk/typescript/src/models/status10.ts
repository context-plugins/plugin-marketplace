import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter the flywheels based on the flywheel status. */
export const Status10 = {
  Creating: "CREATING",
  Active: "ACTIVE",
  Updating: "UPDATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
export type Status10 = (typeof Status10)[keyof typeof Status10] | (string & {});

export const status10Schema: EnumSchema<Status10> = s.enumOf<Status10>(Status10);
