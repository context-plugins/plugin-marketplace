import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The token type identifier used in OAuth 2.0 Token Exchange (RFC 8693). The API returns short
 * codes (enum constant names) in response fields.
 */
export const TokenType = {
  Jwt: "JWT",
  AccessToken: "ACCESS_TOKEN",
  RefreshToken: "REFRESH_TOKEN",
  IdToken: "ID_TOKEN",
  Saml1: "SAML1",
  Saml2: "SAML2",
  DeviceSecret: "DEVICE_SECRET",
  DeviceCode: "DEVICE_CODE",
  TokenExchange: "TOKEN_EXCHANGE",
  JwtBearer: "JWT_BEARER",
} as const;
export type TokenType = (typeof TokenType)[keyof typeof TokenType] | (string & {});

export const tokenTypeSchema: EnumSchema<TokenType> = s.enumOf<TokenType>(TokenType);
