import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for MFA challenge. */
export type MfaChallengeResponseDto = {
  /**
   * MFA challenge ID. This value is required for validating the MFA challenge with `POST
   * /v3/mfa/challenge/validate`.
   */
  challengeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaChallengeResponseDtoSchema: Schema<MfaChallengeResponseDto> =
  s.object<MfaChallengeResponseDto>(
    {
      challengeId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
