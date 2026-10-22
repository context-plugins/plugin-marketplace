import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Authentication method for Discover and Collect REST calls. You can specify API key–based
 * authentication by adding the appropriate Collect headers.
 */
export const Authentication5 = {
  None: "none",
  Basic: "basic",
  BasicSecret: "basicSecret",
  Login: "login",
  LoginSecret: "loginSecret",
  Oauth: "oauth",
  OauthSecret: "oauthSecret",
  GoogleOauth: "google_oauth",
  GoogleOauthSecret: "google_oauthSecret",
  Hmac: "hmac",
} as const;
export type Authentication5 = (typeof Authentication5)[keyof typeof Authentication5] | (string & {});

export const authentication5Schema: EnumSchema<Authentication5> = s.enumOf<Authentication5>(Authentication5);
