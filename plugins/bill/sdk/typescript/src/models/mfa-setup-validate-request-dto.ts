import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mfaSetupTypeSchema, type MfaSetupType } from "./mfa-setup-type.js";

/** Validate MFA setup */
export type MfaSetupValidateRequestDto = {
  /** MFA `setupId` from the `POST /v3/mfa/setup` response */
  setupId: string;
  type: MfaSetupType;
  /** Validation `token` sent to the registered phone number */
  token: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaSetupValidateRequestDtoSchema: Schema<MfaSetupValidateRequestDto> =
  s.object<MfaSetupValidateRequestDto>(
    {
      setupId: s.string(),
      type: mfaSetupTypeSchema,
      token: s.string(),
    },
    { additionalProperties: s.json() },
  );
