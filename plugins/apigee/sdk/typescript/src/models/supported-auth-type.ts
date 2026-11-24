import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedAuthType = {
  AuthTypeUnspecified: "AUTH_TYPE_UNSPECIFIED",
  NoAuth: "NO_AUTH",
  GoogleServiceAccount: "GOOGLE_SERVICE_ACCOUNT",
  UserPassword: "USER_PASSWORD",
  ApiKey: "API_KEY",
  Oauth2ClientCredentials: "OAUTH2_CLIENT_CREDENTIALS",
} as const;
export type SupportedAuthType = (typeof SupportedAuthType)[keyof typeof SupportedAuthType] | (string & {});

export const supportedAuthTypeSchema: EnumSchema<SupportedAuthType> =
  s.enumOf<SupportedAuthType>(SupportedAuthType);
