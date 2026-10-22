import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of request */
export const RequestStatus2 = {
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
export type RequestStatus2 = (typeof RequestStatus2)[keyof typeof RequestStatus2] | (string & {});

export const requestStatus2Schema: EnumSchema<RequestStatus2> = s.enumOf<RequestStatus2>(RequestStatus2);
