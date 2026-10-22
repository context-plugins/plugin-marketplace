import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  basicAuthenticationCreateSchema,
  type BasicAuthenticationCreate,
} from "../basic-authentication-create.js";
import {
  credentialsOAuthAuthenticationCreateSchema,
  type CredentialsOAuthAuthenticationCreate,
} from "../credentials-oauth-authentication-create.js";
import {
  passwordOAuthAuthenticationCreateSchema,
  type PasswordOAuthAuthenticationCreate,
} from "../password-oauth-authentication-create.js";

export type Authentication2 =
  | (BasicAuthenticationCreate & { kind: "basic" })
  | (CredentialsOAuthAuthenticationCreate & { kind: "oauth_client_credentials" })
  | (PasswordOAuthAuthenticationCreate & { kind: "oauth_password" });

export const authentication2Schema: Schema<Authentication2> = s.discriminatedUnion<Authentication2>("kind", {
  basic: basicAuthenticationCreateSchema,
  oauth_client_credentials: credentialsOAuthAuthenticationCreateSchema,
  oauth_password: passwordOAuthAuthenticationCreateSchema,
});
