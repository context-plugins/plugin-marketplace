import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Why the QR code was closed. */
export const CloseReason = {
  OnDemand: "on_demand",
  Paid: "paid",
} as const;
export type CloseReason = (typeof CloseReason)[keyof typeof CloseReason] | (string & {});

export const closeReasonSchema: EnumSchema<CloseReason> = s.enumOf<CloseReason>(CloseReason);
