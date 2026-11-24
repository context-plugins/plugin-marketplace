import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingStatus = {
  Pending: "pending",
  Available: "available",
  Unknown: "unknown",
} as const;
export type PendingStatus = (typeof PendingStatus)[keyof typeof PendingStatus] | (string & {});

export const pendingStatusSchema: EnumSchema<PendingStatus> = s.enumOf<PendingStatus>(PendingStatus);
