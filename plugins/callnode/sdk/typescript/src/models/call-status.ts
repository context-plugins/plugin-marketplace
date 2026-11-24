import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallStatus = {
  Originating: "originating",
  Ringing: "ringing",
  Answered: "answered",
  Completed: "completed",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type CallStatus = (typeof CallStatus)[keyof typeof CallStatus] | (string & {});

export const callStatusSchema: EnumSchema<CallStatus> = s.enumOf<CallStatus>(CallStatus);
