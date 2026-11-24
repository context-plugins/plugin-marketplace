import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH,
 * PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER.
 */
export const AuthType1 = {
  Oauth: "OAUTH",
  BasicAuth: "BASIC_AUTH",
  PersonalAccessToken: "PERSONAL_ACCESS_TOKEN",
  Codeconnections: "CODECONNECTIONS",
  SecretsManager: "SECRETS_MANAGER",
} as const;
export type AuthType1 = (typeof AuthType1)[keyof typeof AuthType1] | (string & {});

export const authType1Schema: EnumSchema<AuthType1> = s.enumOf<AuthType1>(AuthType1);
