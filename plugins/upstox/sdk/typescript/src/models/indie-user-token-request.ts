import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IndieUserTokenRequest = {
  /** OAuth API key that is a public identifier for app */
  clientId?: string;
  /** OAuth client secret that is a private secret known only to app and authorization server */
  clientSecret?: string;
  /** To enable/disable otp auth flow */
  otpVerificationDisabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indieUserTokenRequestSchema: Schema<IndieUserTokenRequest> = s.object<IndieUserTokenRequest>(
  {
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    otpVerificationDisabled: s.optional(s.boolean()),
    _keysMap: {
      clientId: "client_id",
      clientSecret: "client_secret",
      otpVerificationDisabled: "otp_verification_disabled",
    },
  },
  { additionalProperties: s.json() },
);
