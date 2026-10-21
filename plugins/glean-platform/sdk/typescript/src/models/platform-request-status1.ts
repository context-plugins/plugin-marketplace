import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** One supported request status. */
export const PlatformRequestStatus1 = {
  Pending: "PENDING",
  Approved: "APPROVED",
  Denied: "DENIED",
} as const;
export type PlatformRequestStatus1 =
  | (typeof PlatformRequestStatus1)[keyof typeof PlatformRequestStatus1]
  | (string & {});

export const platformRequestStatus1Schema: EnumSchema<PlatformRequestStatus1> =
  s.enumOf<PlatformRequestStatus1>(PlatformRequestStatus1);
