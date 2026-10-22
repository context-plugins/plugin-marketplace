import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The OAuth 2.0 token endpoint authentication method (RFC 7591). Determines how the client
 * authenticates when exchanging an authorization code for a token. Values use lowercase to match
 * the OAuth 2.0 wire format (RFC 7591 Section 2).
 */
export const TokenEndpointAuthMethod = {
  ClientSecretPost: "client_secret_post",
  ClientSecretBasic: "client_secret_basic",
  None: "none",
  PrivateKeyJwt: "private_key_jwt",
} as const;
export type TokenEndpointAuthMethod =
  | (typeof TokenEndpointAuthMethod)[keyof typeof TokenEndpointAuthMethod]
  | (string & {});

export const tokenEndpointAuthMethodSchema: EnumSchema<TokenEndpointAuthMethod> =
  s.enumOf<TokenEndpointAuthMethod>(TokenEndpointAuthMethod);
