import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Validate MFA challenge */
export type MfaChallengeValidateRequestDto = {
  /** MFA `challengeId` from the `POST /v3/mfa/challenge` response */
  challengeId: string;
  /** Validation `token` sent to the registered phone number */
  token: string;
  /**
   * Mobile device name. This is a nickname for your mobile device. Set this field when `rememberMe`
   * is set as `true`.
   */
  device?: string;
  /**
   * Machine name. This is a nickname for the machine used to complete MFA sign in. Set this field
   * when `rememberMe` is set as `true`.
   */
  machineName?: string;
  /** Set as `true` for the generated MFA ID to expire in 30 days */
  rememberMe?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaChallengeValidateRequestDtoSchema: Schema<MfaChallengeValidateRequestDto> =
  s.object<MfaChallengeValidateRequestDto>(
    {
      challengeId: s.string(),
      token: s.string(),
      device: s.optional(s.string()),
      machineName: s.optional(s.string()),
      rememberMe: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
