import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self
 * Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be
 * created using the CodeBuild console.
 */
export const AuthType = {
  Oauth: "OAUTH",
  BasicAuth: "BASIC_AUTH",
  PersonalAccessToken: "PERSONAL_ACCESS_TOKEN",
  Codeconnections: "CODECONNECTIONS",
  SecretsManager: "SECRETS_MANAGER",
} as const;
export type AuthType = (typeof AuthType)[keyof typeof AuthType] | (string & {});

export const authTypeSchema: EnumSchema<AuthType> = s.enumOf<AuthType>(AuthType);
