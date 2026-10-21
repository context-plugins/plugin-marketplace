import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** App status */
export const Status = {
  Active: "active",
  Suspended: "suspended",
  Revoked: "revoked",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
