import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current stored request state. */
export const PlatformRequestStatus2 = {
  Pending: "PENDING",
  Approved: "APPROVED",
  Denied: "DENIED",
} as const;
export type PlatformRequestStatus2 =
  | (typeof PlatformRequestStatus2)[keyof typeof PlatformRequestStatus2]
  | (string & {});

export const platformRequestStatus2Schema: EnumSchema<PlatformRequestStatus2> =
  s.enumOf<PlatformRequestStatus2>(PlatformRequestStatus2);
