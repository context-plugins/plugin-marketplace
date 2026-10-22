import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of a communication request. */
export const RequestStatus = {
  Pending: "PENDING",
  Duplicate: "DUPLICATE",
  Initiated: "INITIATED",
  Connected: "CONNECTED",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Invalid: "INVALID",
  Skipped: "SKIPPED",
} as const;
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus] | (string & {});

export const requestStatusSchema: EnumSchema<RequestStatus> = s.enumOf<RequestStatus>(RequestStatus);
