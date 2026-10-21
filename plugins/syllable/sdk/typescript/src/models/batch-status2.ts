import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of batch */
export const BatchStatus2 = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Paused: "PAUSED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Expired: "EXPIRED",
} as const;
export type BatchStatus2 = (typeof BatchStatus2)[keyof typeof BatchStatus2] | (string & {});

export const batchStatus2Schema: EnumSchema<BatchStatus2> = s.enumOf<BatchStatus2>(BatchStatus2);
