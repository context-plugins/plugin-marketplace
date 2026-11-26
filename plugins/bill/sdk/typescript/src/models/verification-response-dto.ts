import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  verificationDecisionTypeSchema,
  type VerificationDecisionType,
} from "./verification-decision-type.js";
import {
  verificationProcessingStatusSchema,
  type VerificationProcessingStatus,
} from "./verification-processing-status.js";

/** Risk verification response. */
export type VerificationResponseDto = {
  processingStatus?: VerificationProcessingStatus;
  decision?: VerificationDecisionType;
  /** BILL-generated ID to uniquely identify the risk verification request for the organization */
  referenceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const verificationResponseDtoSchema: Schema<VerificationResponseDto> =
  s.object<VerificationResponseDto>(
    {
      processingStatus: s.optional(s.lazy(() => verificationProcessingStatusSchema)),
      decision: s.optional(s.lazy(() => verificationDecisionTypeSchema)),
      referenceId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
