import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** authorization_code or refresh_token. */
export const GrantType1 = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type GrantType1 = (typeof GrantType1)[keyof typeof GrantType1] | (string & {});

export const grantType1Schema: EnumSchema<GrantType1> = s.enumOf<GrantType1>(GrantType1);
