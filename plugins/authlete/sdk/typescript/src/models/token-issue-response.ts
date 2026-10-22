import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action6Schema, type Action6 } from "./action6.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { pairSchema, type Pair } from "./pair.js";
import { propertySchema, type Property } from "./property.js";

export type TokenIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action6;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format is JSON.
   */
  responseContent?: string;
  /**
   * The newly issued access token. This parameter is a non-null value only when the value of
   * `action` parameter is `OK`.
   */
  accessToken?: string;
  /**
   * The datetime at which the newly issued access token will expire. The value is represented in
   * milliseconds since the Unix epoch (1970-01-01).
   */
  accessTokenExpiresAt?: number;
  /** The duration of the newly issued access token in seconds. */
  accessTokenDuration?: number;
  /**
   * The refresh token. This parameter is a non-null value only when `action` is `OK` and the
   * service supports the refresh token flow. If `refreshTokenKept` is set to `false`, a new refresh
   * token is issued and the old refresh token used in the refresh token flow is invalidated. On the
   * contrary, if `refreshTokenKept` is set to `true`, the refresh token itself is not refreshed.
   */
  refreshToken?: string;
  /**
   * The datetime at which the newly issued refresh token will expire. The value is represented in
   * milliseconds since the Unix epoch (1970-01-01).
   */
  refreshTokenExpiresAt?: number;
  /** The duration of the newly issued refresh token in seconds. */
  refreshTokenDuration?: number;
  /** The client ID. */
  clientId?: number;
  /** The client ID alias. If the client did not have an alias, this parameter is `null`. */
  clientIdAlias?: string;
  /**
   * The flag which indicates whether the client ID alias was used when the token request was made.
   * `true` if the client ID alias was used when the token request was made.
   */
  clientIdAliasUsed?: boolean;
  /**
   * The subject (= resource owner's ID) of the access token. Even if an access token has been
   * issued by calling `/api/auth/token` API, this parameter is `null` if the flow of the token
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
  /** The attributes of this service that the client application belongs to. */
  serviceAttributes?: Pair[];
  /** The attributes of the client. */
  clientAttributes?: Pair[];
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /** The scopes associated with the refresh token. May be null. */
  refreshTokenScopes?: string[];
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

export const tokenIssueResponseSchema: Schema<TokenIssueResponse> = s.object<TokenIssueResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action6Schema)),
  responseContent: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  accessTokenExpiresAt: s.optional(s.int()),
  accessTokenDuration: s.optional(s.int()),
  refreshToken: s.optional(s.string()),
  refreshTokenExpiresAt: s.optional(s.int()),
  refreshTokenDuration: s.optional(s.int()),
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasUsed: s.optional(s.boolean()),
  subject: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  jwtAccessToken: s.optional(s.string()),
  accessTokenResources: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientEntityId: s.optional(s.string()),
  clientEntityIdUsed: s.optional(s.boolean()),
  refreshTokenScopes: s.optional(s.array(s.string())),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
