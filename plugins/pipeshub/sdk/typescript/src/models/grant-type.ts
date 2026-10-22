import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * OAuth grant type:
 * - `authorization_code`: Exchange auth code for tokens
 * - `client_credentials`: Machine-to-machine auth
 * - `refresh_token`: Get new access token using refresh token
 * - `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account delegation (RFC 8693).
 *   Exchanges a service token for a short-lived token that acts as one named person. Enterprise
 *   edition; kept in this enum because the request shape is the same wherever the grant is offered.
 */
export const GrantType = {
  AuthorizationCode: "authorization_code",
  ClientCredentials: "client_credentials",
  RefreshToken: "refresh_token",
  UrnIetfParamsOauthGrantTypeTokenExchange: "urn:ietf:params:oauth:grant-type:token-exchange",
} as const;
export type GrantType = (typeof GrantType)[keyof typeof GrantType] | (string & {});

export const grantTypeSchema: EnumSchema<GrantType> = s.enumOf<GrantType>(GrantType);
