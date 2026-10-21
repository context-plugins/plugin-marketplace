import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The grant type of the access token when the access token was created. */
export const GrantType = {
  AuthorizationCode: "AUTHORIZATION_CODE",
  Implicit: "IMPLICIT",
  Password: "PASSWORD",
  ClientCredentials: "CLIENT_CREDENTIALS",
  RefreshToken: "REFRESH_TOKEN",
  Ciba: "CIBA",
  DeviceCode: "DEVICE_CODE",
  TokenExchange: "TOKEN_EXCHANGE",
  JwtBearer: "JWT_BEARER",
  PreAuthorizedCode: "PRE_AUTHORIZED_CODE",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
