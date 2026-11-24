import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the ACME account. */
export const Status = {
  Valid: "VALID",
  Deactivated: "DEACTIVATED",
  Revoked: "REVOKED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
