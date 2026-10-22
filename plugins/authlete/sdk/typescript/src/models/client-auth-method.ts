import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The client authentication method that the client application declares that it uses at the token
 * endpoint. This property corresponds to `token_endpoint_auth_method` in [OpenID Connect Dynamic
 * Client Registration 1.0, 2. Client
 * Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
 */
export const ClientAuthMethod = {
  None: "NONE",
  ClientSecretBasic: "CLIENT_SECRET_BASIC",
  ClientSecretPost: "CLIENT_SECRET_POST",
  ClientSecretJwt: "CLIENT_SECRET_JWT",
  PrivateKeyJwt: "PRIVATE_KEY_JWT",
  TlsClientAuth: "TLS_CLIENT_AUTH",
  SelfSignedTlsClientAuth: "SELF_SIGNED_TLS_CLIENT_AUTH",
  AttestJwtClientAuth: "ATTEST_JWT_CLIENT_AUTH",
  SpiffeJwt: "SPIFFE_JWT",
} as const;
export type ClientAuthMethod = (typeof ClientAuthMethod)[keyof typeof ClientAuthMethod] | (string & {});

export const clientAuthMethodSchema: EnumSchema<ClientAuthMethod> =
  s.enumOf<ClientAuthMethod>(ClientAuthMethod);
