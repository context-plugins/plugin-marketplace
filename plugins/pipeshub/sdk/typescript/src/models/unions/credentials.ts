import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { oAuthCredentialsSchema, type OAuthCredentials } from "../oauth-credentials.js";
import { otpCredentialsSchema, type OtpCredentials } from "../otp-credentials.js";
import { passwordCredentialsSchema, type PasswordCredentials } from "../password-credentials.js";

/** Credentials based on the authentication method */
export type Credentials = PasswordCredentials | OtpCredentials | OAuthCredentials | string;

export const credentialsSchema: Schema<Credentials> = s.of<Credentials>(
  s.union([
    s.lazy(() => passwordCredentialsSchema),
    s.lazy(() => otpCredentialsSchema),
    s.lazy(() => oAuthCredentialsSchema),
    s.string(),
  ]),
);
