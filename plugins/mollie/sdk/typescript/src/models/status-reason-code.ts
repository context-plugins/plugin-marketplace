import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code indicating the reason for the transfer's terminal status. */
export const StatusReasonCode = {
  InsufficientFunds: "insufficient-funds",
  Rejected: "rejected",
  Error: "error",
} as const;
export type StatusReasonCode = (typeof StatusReasonCode)[keyof typeof StatusReasonCode] | (string & {});

export const statusReasonCodeSchema: EnumSchema<StatusReasonCode> =
  s.enumOf<StatusReasonCode>(StatusReasonCode);
