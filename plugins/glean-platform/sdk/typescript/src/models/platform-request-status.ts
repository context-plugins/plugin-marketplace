import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stored request state. */
export const PlatformRequestStatus = {
  Pending: "PENDING",
  Approved: "APPROVED",
  Denied: "DENIED",
} as const;
export type PlatformRequestStatus =
  | (typeof PlatformRequestStatus)[keyof typeof PlatformRequestStatus]
  | (string & {});

export const platformRequestStatusSchema: EnumSchema<PlatformRequestStatus> =
  s.enumOf<PlatformRequestStatus>(PlatformRequestStatus);
