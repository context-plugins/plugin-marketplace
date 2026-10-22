import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of authentication being used. Use 'OAUTH_*' when Glean calls an external API (e.g.,
 * Jira) on behalf of a user to obtain an OAuth token. 'OAUTH_ADMIN' utilizes an admin token for
 * external API calls on behalf all users. 'OAUTH_USER' uses individual user tokens for external API
 * calls. 'DWD' refers to domain wide delegation.
 */
export const Type3 = {
  None: "NONE",
  OauthUser: "OAUTH_USER",
  OauthAdmin: "OAUTH_ADMIN",
  ApiKey: "API_KEY",
  BasicAuth: "BASIC_AUTH",
  Dwd: "DWD",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
