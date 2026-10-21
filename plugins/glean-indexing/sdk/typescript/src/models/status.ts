import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the upload, an enum of ACTIVE, SUCCESSFUL */
export const Status = {
  Active: "ACTIVE",
  Successful: "SUCCESSFUL",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
