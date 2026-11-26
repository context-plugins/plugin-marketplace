import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mfaSetupTypeSchema, type MfaSetupType } from "./mfa-setup-type.js";

/** Add phone for MFA setup */
export type MfaSetupRequestDto = {
  /** Phone number for MFA setup. The validation `token` is sent to this number. */
  phone: string;
  type: MfaSetupType;
  /**
   * Set as `true` to mark the phone number as the primary mobile device. The default value is
   * `true`.
   *
   * @deprecated
   */
  primary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaSetupRequestDtoSchema: Schema<MfaSetupRequestDto> = s.object<MfaSetupRequestDto>(
  {
    phone: s.string(),
    type: mfaSetupTypeSchema,
    primary: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
