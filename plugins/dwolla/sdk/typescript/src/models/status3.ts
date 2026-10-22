import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status3 = {
  Verified: "verified",
  Suspended: "suspended",
  Deactivated: "deactivated",
  Document: "document",
  Retry: "retry",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
