import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The OAuth2 grant type. */
export const GrantType = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
