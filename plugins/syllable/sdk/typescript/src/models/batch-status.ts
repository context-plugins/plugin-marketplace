import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of a communication batch. */
export const BatchStatus = {
  Pending: "PENDING",
  Active: "ACTIVE",
  Paused: "PAUSED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Expired: "EXPIRED",
} as const;
export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus] | (string & {});

export const batchStatusSchema: EnumSchema<BatchStatus> = s.enumOf<BatchStatus>(BatchStatus);
