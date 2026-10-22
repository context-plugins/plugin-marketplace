import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A machine-readable code indicating the reason for the transfer's terminal status. */
export const StatusReasonCodeResponse = {
  InsufficientFunds: "insufficient-funds",
  Rejected: "rejected",
  Error: "error",
} as const;
export type StatusReasonCodeResponse =
  | (typeof StatusReasonCodeResponse)[keyof typeof StatusReasonCodeResponse]
  | (string & {});

export const statusReasonCodeResponseSchema: EnumSchema<StatusReasonCodeResponse> =
  s.enumOf<StatusReasonCodeResponse>(StatusReasonCodeResponse);
