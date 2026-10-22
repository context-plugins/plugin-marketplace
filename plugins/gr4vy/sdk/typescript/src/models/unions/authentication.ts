import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { basicAuthenticationSchema, type BasicAuthentication } from "../basic-authentication.js";
import {
  credentialsOAuthAuthenticationSchema,
  type CredentialsOAuthAuthentication,
} from "../credentials-oauth-authentication.js";
import {
  passwordOAuthAuthenticationSchema,
  type PasswordOAuthAuthentication,
} from "../password-oauth-authentication.js";

/** Optional authentication configuration for webhook requests. */
export type Authentication =
  | BasicAuthentication
  | CredentialsOAuthAuthentication
  | PasswordOAuthAuthentication;

export const authenticationSchema: Schema<Authentication> = s.of<Authentication>(
  s.union([
    s.lazy(() => basicAuthenticationSchema),
    s.lazy(() => credentialsOAuthAuthenticationSchema),
    s.lazy(() => passwordOAuthAuthenticationSchema),
  ]),
);
