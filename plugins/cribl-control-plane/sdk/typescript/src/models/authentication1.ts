import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Authentication method for Discover and Collect REST calls. You can specify API Key–based
 * authentication by adding the appropriate Collect headers.
 */
export const Authentication1 = {
  None: "none",
  Basic: "basic",
  BasicSecret: "basicSecret",
  Login: "login",
  LoginSecret: "loginSecret",
  Oauth: "oauth",
  OauthSecret: "oauthSecret",
} as const;
export type Authentication1 = (typeof Authentication1)[keyof typeof Authentication1] | (string & {});

export const authentication1Schema: EnumSchema<Authentication1> = s.enumOf<Authentication1>(Authentication1);
