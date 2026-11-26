import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MFA Setup response. */
export type MfaSetupResponseDto = {
  /**
   * MFA setup ID. This value is required for completing your MFA setup validation with `POST
   * /v3/mfa/setup/validate`.
   */
  setupId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaSetupResponseDtoSchema: Schema<MfaSetupResponseDto> = s.object<MfaSetupResponseDto>(
  {
    setupId: s.string(),
  },
  { additionalProperties: s.json() },
);
