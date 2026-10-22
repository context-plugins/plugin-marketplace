import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cimdOptionsSchema, type CimdOptions } from "./cimd-options.js";
import { propertySchema, type Property } from "./property.js";

export type TokenRequest = {
  /**
   * OAuth 2.0 token request parameters which are the request parameters that the OAuth 2.0 token
   * endpoint of the authorization server implementation received from the client application.
   *
   * The value of parameters is the entire entity body (which is formatted in
   * `application/x-www-form-urlencoded`) of the request from the client application.
   */
  parameters: string;
  /**
   * The client ID extracted from `Authorization` header of the token request from the client
   * application.
   *
   * If the token endpoint of the authorization server implementation supports basic authentication
   * as a means of client authentication, and the request from the client application contained its
   * client ID in `Authorization` header, the value should be extracted and set to this parameter.
   */
  clientId?: string;
  /**
   * The client secret extracted from `Authorization` header of the token request from the client
   * application.
   *
   * If the token endpoint of the authorization server implementation supports basic authentication
   * as a means of client authentication, and the request from the client application contained its
   * client secret in `Authorization` header, the value should be extracted and set to this
   * parameter.
   */
  clientSecret?: string;
  /** The client certificate from the MTLS of the token request from the client application. */
  clientCertificate?: string;
  /**
   * The certificate path presented by the client during client authentication. These certificates
   * are strings in PEM format.
   */
  clientCertificatePath?: string[];
  /**
   * Extra properties to associate with an access token. See [Extra
   * Properties](https://www.authlete.com/developers/definitive_guide/extra_properties/) for
   * details.
   */
  properties?: Property[];
  /**
   * `DPoP` header presented by the client during the request to the token endpoint.
   *
   * The header contains a signed JWT which includes the public key that is paired with the private
   * key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
   * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
   * details.
   */
  dpop?: string;
  /**
   * HTTP method of the token request. This field is used to validate the `DPoP` header.
   *
   * In normal cases, the value is `POST`. When this parameter is omitted, `POST` is used as the
   * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
   * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
   */
  htm?: string;
  /**
   * URL of the token endpoint. This field is used to validate the `DPoP` header.
   *
   * If this parameter is omitted, the `tokenEndpoint` property of the Service is used as the
   * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
   * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
   */
  htu?: string;
  /**
   * The representation of an access token that may be issued as a result of the Authlete API call.
   */
  accessToken?: string;
  /**
   * Additional claims that are added to the payload part of the JWT access token.
   *
   * Effective only in the client_credentials grant flow (and the Native SSO branch of Token
   * Exchange). For other grant flows, set additional JWT claims via the corresponding API:
   * /auth/authorization/issue (authorization_code), /auth/backchannel/authentication/complete
   * (CIBA), /auth/device/complete (device_code). The parameter is silently ignored when sent with
   * other grants.
   */
  jwtAtClaims?: string;
  /**
   * The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification
   * of [OAuth 2.0 Attestation-Based Client
   * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
   */
  oauthClientAttestation?: string;
  /**
   * The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the
   * specification of [OAuth 2.0 Attestation-Based Client
   * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
   */
  oauthClientAttestationPop?: string;
  /**
   * The duration (in seconds) of the access token that may be issued as a result of the Authlete
   * API call.
   *
   * When this request parameter holds a positive integer, it is used as the duration of the access
   * token in. In other cases, this request parameter is ignored.
   */
  accessTokenDuration?: number;
  /**
   * The duration (in seconds) of the refresh token that may be issued as a result of the Authlete
   * API call.
   *
   * When this request parameter holds a positive integer, it is used as the duration of the refresh
   * token in. In other cases, this request parameter is ignored.
   */
  refreshTokenDuration?: number;
  /**
   * The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even if
   * the service's `dpopNonceRequired` property is `false`, calling the `/auth/token` API with this
   * `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the DPoP
   * proof JWT includes the expected `nonce` value.
   */
  dpopNonceRequired?: boolean;
  /**
   * Options for [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD).
   *
   * These options allow per-request control over CIMD behavior, taking precedence over
   * service-level configuration when provided.
   */
  cimdOptions?: CimdOptions;
};

export const tokenRequestSchema: Schema<TokenRequest> = s.object<TokenRequest>({
  parameters: s.string(),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  clientCertificate: s.optional(s.string()),
  clientCertificatePath: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  dpop: s.optional(s.string()),
  htm: s.optional(s.string()),
  htu: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  jwtAtClaims: s.optional(s.string()),
  oauthClientAttestation: s.optional(s.string()),
  oauthClientAttestationPop: s.optional(s.string()),
  accessTokenDuration: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  dpopNonceRequired: s.optional(s.boolean()),
  cimdOptions: s.optional(s.lazy(() => cimdOptionsSchema)),
});
