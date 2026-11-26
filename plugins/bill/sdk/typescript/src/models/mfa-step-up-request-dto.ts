import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Step-up request for MFA */
export type MfaStepUpRequestDto = {
  /**
   * MFA ID. Set this field for creating an MFA-trusted API session.
   *
   * This MFA ID is generated when you set `rememberMe` as `true` in your `POST
   * /v3/mfa/challenge/validate` request. This value expires in 30 days.
   *
   * See [Validate MFA challenge](https://developer.bill.com/reference/validatechallenge) for more
   * information.
   */
  rememberMeId?: string;
  /**
   * Mobile device name. This is a nickname for your mobile device. Set this field when you set
   * `rememberMeId`.
   */
  device?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mfaStepUpRequestDtoSchema: Schema<MfaStepUpRequestDto> = s.object<MfaStepUpRequestDto>(
  {
    rememberMeId: s.optional(s.string()),
    device: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
