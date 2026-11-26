import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mfaPhoneTypeSchema, type MfaPhoneType } from "./mfa-phone-type.js";

/** MFA Phone. */
export type MfaPhoneResponseDto = {
  type?: MfaPhoneType;
  /** Phone number last four digits */
  last4Digits?: string;
  /**
   * Set as `true` to mark the phone number as the primary mobile device
   *
   * @deprecated
   */
  primary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaPhoneResponseDtoSchema: Schema<MfaPhoneResponseDto> = s.object<MfaPhoneResponseDto>(
  {
    type: s.optional(s.lazy(() => mfaPhoneTypeSchema)),
    last4Digits: s.optional(s.string()),
    primary: s.optional(s.boolean()),
    _keysMap: {
      last4Digits: "last4digits",
    },
  },
  { additionalProperties: s.json() },
);
