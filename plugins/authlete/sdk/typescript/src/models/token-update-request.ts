import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { propertySchema, type Property } from "./property.js";

export type TokenUpdateRequest = {
  /** An access token. */
  accessToken?: string;
  /**
   * A new date at which the access token will expire in milliseconds since the Unix epoch
   * (1970-01-01). If the `accessTokenExpiresAt` request parameter is not included in a request or
   * its value is 0 (or negative), the expiration date of the access token is not changed.
   */
  accessTokenExpiresAt?: number;
  /**
   * A new set of scopes assigned to the access token. Scopes that are not supported by the service
   * and those that the client application associated with the access token is not allowed to
   * request are ignored on the server side. If the `scopes` request parameter is not included in a
   * request or its value is `null`, the scopes of the access token are not changed. Note that
   * `properties` parameter is accepted only when `Content-Type` of the request is
   * `application/json`, so don't use `application/x-www-form-urlencoded` if you want to specify
   * `properties`.
   */
  scopes?: string[];
  /**
   * A new set of properties assigned to the access token. If the `properties` request parameter is
   * not included in a request or its value is null, the properties of the access token are not
   * changed.
   */
  properties?: Property[];
  /**
   * A boolean request parameter which indicates whether the API attempts to update the expiration
   * date of the access token when the scopes linked to the access token are changed by this
   * request.
   */
  accessTokenExpiresAtUpdatedOnScopeUpdate?: boolean;
  /**
   * The hash of the access token value. Used when the hash of the token is known (perhaps from
   * lookup) but the value of the token itself is not. The value of the `accessToken` parameter
   * takes precedence.
   */
  accessTokenHash?: string;
  /**
   * A boolean request parameter which indicates whether to update the value of the access token in
   * the data store. If this parameter is set to `true` then a new access token value is generated
   * by the server and returned in the response.
   */
  accessTokenValueUpdated?: boolean;
  /**
   * The flag which indicates whether the access token expires or not. By default, all access tokens
   * expire after a period of time determined by their service. If this request parameter is `true`
   * then the access token will not automatically expire and must be revoked or deleted manually at
   * the service.
   *
   * If this request parameter is `true`, the `accessTokenExpiresAt` request parameter is ignored.
   * If this request parameter is `false`, the `accessTokenExpiresAt` request parameter is processed
   * normally.
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
  /** the flag which indicates whether the access token is for an external attachment. */
  forExternalAttachment?: boolean;
  /**
   * A new date at which the access token will expire in milliseconds since the Unix epoch
   * (1970-01-01). If the `refreshTokenExpiresAt` request parameter is not included in a request or
   * its value is 0 (or negative), the expiration date of the refresh token is not changed.
   */
  refreshTokenExpiresAt?: number;
  /**
   * A boolean request parameter which indicates whether the API attempts to update the expiration
   * date of the refresh token when the scopes linked to the refresh token are changed by this
   * request.
   */
  refreshTokenExpiresAtUpdatedOnScopeUpdate?: boolean;
  /** The token identifier. */
  tokenId?: string;
};

export const tokenUpdateRequestSchema: Schema<TokenUpdateRequest> = s.object<TokenUpdateRequest>({
  accessToken: s.optional(s.string()),
  accessTokenExpiresAt: s.optional(s.int()),
  scopes: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  accessTokenExpiresAtUpdatedOnScopeUpdate: s.optional(s.boolean()),
  accessTokenHash: s.optional(s.string()),
  accessTokenValueUpdated: s.optional(s.boolean()),
  accessTokenPersistent: s.optional(s.boolean()),
  certificateThumbprint: s.optional(s.string()),
  dpopKeyThumbprint: s.optional(s.string()),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  forExternalAttachment: s.optional(s.boolean()),
  refreshTokenExpiresAt: s.optional(s.int()),
  refreshTokenExpiresAtUpdatedOnScopeUpdate: s.optional(s.boolean()),
  tokenId: s.optional(s.string()),
});
