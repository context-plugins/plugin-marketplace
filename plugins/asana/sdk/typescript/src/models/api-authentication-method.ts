import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authentication method used in the context of an API request. Only present if the
 * `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or
 * `service_account`.
 */
export const ApiAuthenticationMethod = {
  Cookie: "cookie",
  Oauth: "oauth",
  PersonalAccessToken: "personal_access_token",
  ServiceAccount: "service_account",
} as const;
export type ApiAuthenticationMethod =
  | (typeof ApiAuthenticationMethod)[keyof typeof ApiAuthenticationMethod]
  | (string & {});

export const apiAuthenticationMethodSchema: EnumSchema<ApiAuthenticationMethod> =
  s.enumOf<ApiAuthenticationMethod>(ApiAuthenticationMethod);
