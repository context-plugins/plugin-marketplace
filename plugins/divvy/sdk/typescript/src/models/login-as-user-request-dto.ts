import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API login as user */
export type LoginAsUserRequestDto = {
  /** BILL-generated ID of the user you want to sign in as */
  userId: string;
  /** BILL-generated ID of the organization you want to sign in to */
  organizationId: string;
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
   * Mobile device name. This is a nickname for your mobile device. This field is required when you
   * set `rememberMeId`.
   */
  device?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const loginAsUserRequestDtoProperties: s.Shape<LoginAsUserRequestDto> = {
  userId: s.string(),
  organizationId: s.string(),
  rememberMeId: s.optional(s.string()),
  device: s.optional(s.string()),
};

export const loginAsUserRequestDtoInternalSchema: Schema<LoginAsUserRequestDto> =
  s.object<LoginAsUserRequestDto>(loginAsUserRequestDtoProperties, { additionalProperties: s.json() });

export const loginAsUserRequestDtoSchema: Schema<LoginAsUserRequestDto> = s.lazySchema(() =>
  s.object<LoginAsUserRequestDto>(
    {
      ...loginAsUserRequestDtoProperties,
      userId: s.string().check(s.minLength(1)),
      organizationId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
