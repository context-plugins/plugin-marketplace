import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ServiceNow Table API authentication method */
export const AuthenticationType8 = {
  None: "none",
  BasicSecret: "basicSecret",
  OauthSecret: "oauthSecret",
} as const;
export type AuthenticationType8 =
  | (typeof AuthenticationType8)[keyof typeof AuthenticationType8]
  | (string & {});

export const authenticationType8Schema: EnumSchema<AuthenticationType8> =
  s.enumOf<AuthenticationType8>(AuthenticationType8);
