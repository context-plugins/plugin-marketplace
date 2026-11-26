import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for risk verification processing status. */
export const VerificationProcessingStatus = {
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
} as const;
export type VerificationProcessingStatus =
  | (typeof VerificationProcessingStatus)[keyof typeof VerificationProcessingStatus]
  | (string & {});

export const verificationProcessingStatusSchema: EnumSchema<VerificationProcessingStatus> =
  s.enumOf<VerificationProcessingStatus>(VerificationProcessingStatus);
