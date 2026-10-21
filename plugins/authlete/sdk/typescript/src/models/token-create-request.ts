import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { propertySchema, type Property } from "./property.js";

export type TokenCreateRequest = {
  /** The grant type of the access token when the access token was created. */
  grantType: GrantType;
  /**
   * The ID of the client application which will be associated with a newly created access token.
   */
  clientId?: number;
  /**
   * The subject (= unique identifier) of the user who will be associated with a newly created
   * access token. This parameter is required unless the grant type is `CLIENT_CREDENTIALS`. The
   * value must consist of only ASCII characters and its length must not exceed 100.
   */
  subject?: string;
  /**
   * The scopes which will be associated with a newly created access token. Scopes that are not
   * supported by the service cannot be specified and requesting them will cause an error.
   */
  scopes?: string[];
  /**
   * The duration of a newly created access token in seconds. If the value is 0, the duration is
   * determined according to the settings of the service.
   */
  accessTokenDuration?: number;
  /**
   * The duration of a newly created refresh token in seconds. If the value is 0, the duration is
   * determined according to the settings of the service.
   *
   * A refresh token is not created (1) if the service does not support `REFRESH_TOKEN`, or (2) if
   * the specified grant type is either `IMPLICIT`or `CLIENT_CREDENTIALS`.
   */
  refreshTokenDuration?: number;
  /**
   * Extra properties to associate with a newly created access token. Note that properties parameter
   * is accepted only when the HTTP method of the request is POST and Content-Type of the request is
   * `application/json`, so don't use `GET` method or `application/x-www-form-urlencoded` if you
   * want to specify properties.
   */
  properties?: Property[];
  /**
   * A boolean request parameter which indicates whether to emulate that the client ID alias is used
   * instead of the original numeric client ID when a new access token is created.
   */
  clientIdAliasUsed?: boolean;
  /** The value of the new access token. */
  accessToken?: string;
  /** The value of the new refresh token. */
  refreshToken?: string;
  /**
   * Get whether the access token expires or not. By default, all access tokens expire after a
   * period of time determined by their service.
   *
   * If this request parameter is `true`, then the access token will not automatically expire and
   * must be revoked or deleted manually at the service. If this request parameter is true, the
   * `accessTokenDuration` request parameter is ignored.
   */
  accessTokenPersistent?: boolean;
  /**
   * The thumbprint of the MTLS certificate bound to this token. If this property is set, a
   * certificate with the corresponding value MUST be presented with the access token when it is
   * used by a client. The value of this property must be a SHA256 certificate thumbprint, base64url
   * encoded.
   */
  certificateThumbprint?: string;
  /**
   * The thumbprint of the public key used for DPoP presentation of this token. If this property is
   * set, a DPoP proof signed with the corresponding private key MUST be presented with the access
   * token when it is used by a client. Additionally, the token's `token_type` will be set to
   * 'DPoP'.
   */
  dpopKeyThumbprint?: string;
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
  /**
   * The value of the resources to associate with the token. This property represents the value of
   * one or more `resource` request parameters which is defined in "RFC8707 Resource Indicators for
   * OAuth 2.0".
   */
  resources?: string[];
  /** the flag which indicates whether the access token is for an external attachment. */
  forExternalAttachment?: boolean;
  /** Additional claims that are added to the payload part of the JWT access token. */
  jwtAtClaims?: string;
  /**
   * The Authentication Context Class Reference of the user authentication that the authorization
   * server performed during the course of issuing the access token.
   */
  acr?: string;
  /**
   * The time when the user authentication was performed during the course of issuing the access
   * token.
   */
  authTime?: number;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /** The client Identifier associated with the newly issued access token. */
  clientIdentifier?: string;
  /**
   * The session ID, which is the ID of the user's authentication session, associated with a newly
   * created access token.
   */
  sessionId?: string;
  /**
   * Flag indicating whether a metadata document was used to resolve client metadata for this
   * request.
   *
   * When `true`, the client metadata was retrieved via the [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD) mechanism rather than from the Authlete database.
   */
  metadataDocumentUsed?: boolean;
};

export const tokenCreateRequestSchema: Schema<TokenCreateRequest> = s.object<TokenCreateRequest>({
  grantType: grantTypeSchema,
  clientId: s.optional(s.int()),
  subject: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  accessTokenDuration: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  clientIdAliasUsed: s.optional(s.boolean()),
  accessToken: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  accessTokenPersistent: s.optional(s.boolean()),
  certificateThumbprint: s.optional(s.string()),
  dpopKeyThumbprint: s.optional(s.string()),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  resources: s.optional(s.array(s.string())),
  forExternalAttachment: s.optional(s.boolean()),
  jwtAtClaims: s.optional(s.string()),
  acr: s.optional(s.string()),
  authTime: s.optional(s.int()),
  clientEntityIdUsed: s.optional(s.boolean()),
  clientIdentifier: s.optional(s.string()),
  sessionId: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
