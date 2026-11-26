import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API login */
export type LoginRequestDto = {
  /** Developer key sent to you by BILL when you create a developer account */
  devKey: string;
  /** Email address used to sign in to your BILL account */
  username: string;
  /** Password used to sign in to your BILL account */
  password?: string;
  /**
   * Console API token.
   *
   * As a BILL Accountant Console user, use `POST /v3/login` to sign in to a client organization.
   * * `username`: Your BILL Accountant Console email address
   * * `consoleApiToken`: Your Console API token
   * * `devKey`: Developer key of the client organization
   * * `organizationId`: Organization ID of the client organization
   *
   * See [BILL Accountant Console
   * operations](https://developer.bill.com/docs/bill-accountant-console-operations) for more
   * information.
   */
  consoleApiToken?: string;
  /** Organization ID */
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
   * Mobile device name. This is a nickname for your mobile device. Set this field when you set
   * `rememberMeId`.
   */
  device?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loginRequestDtoSchema: Schema<LoginRequestDto> = s.object<LoginRequestDto>(
  {
    devKey: s.string(),
    username: s.string(),
    password: s.optional(s.string()),
    consoleApiToken: s.optional(s.string()),
    organizationId: s.string(),
    rememberMeId: s.optional(s.string()),
    device: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
