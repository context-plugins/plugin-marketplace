import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the status of the endpoint being returned. Possible values are: Creating, Ready,
 * Updating, Deleting, Failed.
 */
export const Status8 = {
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
  InService: "IN_SERVICE",
  Updating: "UPDATING",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
