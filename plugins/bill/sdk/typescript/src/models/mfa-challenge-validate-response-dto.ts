import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for MFA challenge validation. */
export type MfaChallengeValidateResponseDto = {
  /**
   * MFA ID. This value expires in 30 days.
   *
   * When your API session is expiring, this value is required for generating a new MFA-trusted API
   * session with `POST /v3/login`.
   */
  rememberMeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaChallengeValidateResponseDtoSchema: Schema<MfaChallengeValidateResponseDto> =
  s.object<MfaChallengeValidateResponseDto>(
    {
      rememberMeId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
