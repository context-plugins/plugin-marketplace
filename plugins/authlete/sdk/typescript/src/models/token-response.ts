import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action4Schema, type Action4 } from "./action4.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { pairSchema, type Pair } from "./pair.js";
import { propertySchema, type Property } from "./property.js";
import { tokenInfoSchema, type TokenInfo } from "./token-info.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";

export type TokenResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action4;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /**
   * The value of `username` request parameter in the token request. The client application must
   * specify username when it uses [Resource Owner Password
   * Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.3). In other words, when the
   * value of `grant_type` request parameter is `password`, `username` request parameter must come
   * along.
   *
   * This parameter has a value only if the value of `grant_type` request parameter is `password`
   * and the token request is valid.
   */
  username?: string;
  /**
   * The value of `password` request parameter in the token request. The client application must
   * specify password when it uses [Resource Owner Password
   * Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.3). In other words, when the
   * value of `grant_type` request parameter is `password`, `password` request parameter must come
   * along.
   *
   * This parameter has a value only if the value of `grant_type` request parameter is `password`
   * and the token request is valid.
   */
  password?: string;
  /**
   * The ticket which is necessary to call Authlete's `/auth/token/fail` API or `/auth/token/issue`
   * API.
   *
   * This parameter has a value only if the value of `grant_type` request parameter is `password`
   * and the token request is valid.
   */
  ticket?: string;
  /** The newly issued access token. */
  accessToken?: string;
  /**
   * The datetime at which the newly issued access token will expire. The value is represented in
   * milliseconds since the Unix epoch (1970-01-01).
   */
  accessTokenExpiresAt?: number;
  /** The duration of the newly issued access token in seconds. */
  accessTokenDuration?: number;
  /** The newly issued refresh token. */
  refreshToken?: string;
  /**
   * The datetime at which the newly issued refresh token will expire. The value is represented in
   * milliseconds since the Unix epoch (1970-01-01).
   */
  refreshTokenExpiresAt?: number;
  /** The duration of the newly issued refresh token in seconds. */
  refreshTokenDuration?: number;
  /**
   * The newly issued ID token. Note that an ID token is issued from a token endpoint only when the
   * `response_type` request parameter of the authorization request to an authorization endpoint has
   * contained `code` and the `scope` request parameter has contained `openid`.
   */
  idToken?: string;
  /** The grant type of the token request. */
  grantType?: string;
  /** The client ID. */
  clientId?: number;
  /**
   * The client ID alias when the token request was made. If the client did not have an alias, this
   * parameter is `null`. Also, if the token request was invalid and it failed to identify a client,
   * this parameter is `null`.
   */
  clientIdAlias?: string;
  /**
   * The flag which indicates whether the client ID alias was used when the token request was made.
   * `true` if the client ID alias was used when the token request was made.
   */
  clientIdAliasUsed?: boolean;
  /**
   * The subject (= resource owner's ID) of the access token. Even if an access token has been
   * issued by the call of `/api/auth/token` API, this parameter is `null` if the flow of the token
   * request was [Client Credentials
   * Flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)
   * (`grant_type=client_credentials`) because it means the access token is not associated with any
   * specific end-user.
   */
  subject?: string;
  /** The scopes covered by the access token. */
  scopes?: string[];
  /**
   * The extra properties associated with the access token. This parameter is `null` when no extra
   * property is associated with the issued access token.
   */
  properties?: Property[];
  /**
   * The newly issued access token in JWT format. If the authorization server is configured to issue
   * JWT-based access tokens (= if the service's `accessTokenSignAlg` value is a non-null value), a
   * JWT-based access token is issued along with the original random-string one.
   */
  jwtAccessToken?: string;
  /**
   * The resources specified by the `resource` request parameters in the token request. See
   * "Resource Indicators for OAuth 2.0" for details.
   */
  resources?: string[];
  /**
   * The target resources of the access token being issued. See "Resource Indicators for OAuth 2.0"
   * for details.
   */
  accessTokenResources?: string[];
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
  /** Additional claims to be embedded in an ID token. */
  additionalClaims?: string;
  /** The attributes of this service that the client application belongs to. */
  serviceAttributes?: Pair[];
  /** The attributes of the client. */
  clientAttributes?: Pair[];
  /** The client authentication method that was performed at the token endpoint. */
  clientAuthMethod?: string;
  /**
   * the value of the `grant_id` request parameter of the device authorization request.
   *
   * The `grant_id` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3
   * and newer versions.
   */
  grantId?: string;
  /** The audiences on the token exchange request */
  audiences?: string[];
  /**
   * The token type identifier used in OAuth 2.0 Token Exchange (RFC 8693). The API returns short
   * codes (enum constant names) in response fields.
   */
  requestedTokenType?: TokenType;
  subjectToken?: string;
  /**
   * The token type identifier used in OAuth 2.0 Token Exchange (RFC 8693). The API returns short
   * codes (enum constant names) in response fields.
   */
  subjectTokenType?: TokenType;
  subjectTokenInfo?: TokenInfo;
  actorToken?: string;
  /**
   * The token type identifier used in OAuth 2.0 Token Exchange (RFC 8693). The API returns short
   * codes (enum constant names) in response fields.
   */
  actorTokenType?: TokenType;
  actorTokenInfo?: TokenInfo;
  /**
   * For RFC 7523 JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization
   * Grants
   */
  assertion?: string;
  /**
   * Indicate whether the previous refresh token that had been kept in the database for a short time
   * was used
   */
  previousRefreshTokenUsed?: boolean;
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /** Duration of the `c_nonce` in seconds. */
  cnonceDuration?: number;
  /**
   * Get the expected nonce value for DPoP proof JWT, which should be used as the value of the
   * `DPoP-Nonce` HTTP header.
   */
  dpopNonce?: string;
  /** Get the `c_nonce`. */
  cnonce?: string;
  /**
   * Get the time at which the `c_nonce` expires in milliseconds since the Unix epoch (1970-01-01).
   */
  cnonceExpiresAt?: number;
  /**
   * Get the names of the claims that the authorization request (which resulted in generation of the
   * access token) requested to be embedded in ID tokens.
   */
  requestedIdTokenClaims?: string[];
  /** Scopes associated with the refresh token. */
  refreshTokenScopes?: string[];
  /**
   * The session ID, which is the ID of the user's authentication session, associated with a newly
   * created access token.
   */
  sessionId?: string;
  /**
   * If the response from the `/auth/token` API contains the `deviceSecret` parameter, its value
   * should be used as the value of this `deviceSecret` request parameter to the `/nativesso` API.
   * The authorization server may choose to issue a new device secret; in that case, it is free to
   * generate a new device secret and specify the new value.
   */
  deviceSecret?: string;
  /**
   * The authorization server should compute the hash value of the device secret based on its own
   * logic and specify the computed hash as the value of this `deviceSecretHash` request parameter
   * to the `/nativesso` API.
   */
  deviceSecretHash?: string;
  /**
   * The location of the client's metadata document that was used to resolve client metadata.
   *
   * This property is set when client metadata was retrieved via the [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD) mechanism.
   */
  metadataDocumentLocation?: string;
  /**
   * Flag indicating whether a metadata document was used to resolve client metadata for this
   * request.
   *
   * When `true`, the client metadata was retrieved via the CIMD mechanism rather than from the
   * Authlete database.
   */
  metadataDocumentUsed?: boolean;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action4Schema)),
  responseContent: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  ticket: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  accessTokenExpiresAt: s.optional(s.int()),
  accessTokenDuration: s.optional(s.int()),
  refreshToken: s.optional(s.string()),
  refreshTokenExpiresAt: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  idToken: s.optional(s.string()),
  grantType: s.optional(s.string()),
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasUsed: s.optional(s.boolean()),
  subject: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  jwtAccessToken: s.optional(s.string()),
  resources: s.optional(s.array(s.string())),
  accessTokenResources: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  additionalClaims: s.optional(s.string()),
  serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientAuthMethod: s.optional(s.string()),
  grantId: s.optional(s.string()),
  audiences: s.optional(s.array(s.string())),
  requestedTokenType: s.optional(s.lazy(() => tokenTypeSchema)),
  subjectToken: s.optional(s.string()),
  subjectTokenType: s.optional(s.lazy(() => tokenTypeSchema)),
  subjectTokenInfo: s.optional(s.lazy(() => tokenInfoSchema)),
  actorToken: s.optional(s.string()),
  actorTokenType: s.optional(s.lazy(() => tokenTypeSchema)),
  actorTokenInfo: s.optional(s.lazy(() => tokenInfoSchema)),
  assertion: s.optional(s.string()),
  previousRefreshTokenUsed: s.optional(s.boolean()),
  clientEntityId: s.optional(s.string()),
  clientEntityIdUsed: s.optional(s.boolean()),
  cnonceDuration: s.optional(s.int()),
  dpopNonce: s.optional(s.string()),
  cnonce: s.optional(s.string()),
  cnonceExpiresAt: s.optional(s.int()),
  requestedIdTokenClaims: s.optional(s.array(s.string())),
  refreshTokenScopes: s.optional(s.array(s.string())),
  sessionId: s.optional(s.string()),
  deviceSecret: s.optional(s.string()),
  deviceSecretHash: s.optional(s.string()),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
