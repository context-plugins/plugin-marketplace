import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Checkout Session's status. */
export const SessionStatus = {
  Open: "open",
  Completed: "completed",
  Expired: "expired",
} as const;
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus] | (string & {});

export const sessionStatusSchema: EnumSchema<SessionStatus> = s.enumOf<SessionStatus>(SessionStatus);
