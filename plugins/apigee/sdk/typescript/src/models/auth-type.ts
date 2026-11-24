import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The authentication type. */
export const AuthType = {
  AuthTypeUnspecified: "AUTH_TYPE_UNSPECIFIED",
  NoAuth: "NO_AUTH",
  GoogleServiceAccount: "GOOGLE_SERVICE_ACCOUNT",
  UserPassword: "USER_PASSWORD",
  ApiKey: "API_KEY",
  Oauth2ClientCredentials: "OAUTH2_CLIENT_CREDENTIALS",
} as const;
export type AuthType = (typeof AuthType)[keyof typeof AuthType] | (string & {});

export const authTypeSchema: EnumSchema<AuthType> = s.enumOf<AuthType>(AuthType);
