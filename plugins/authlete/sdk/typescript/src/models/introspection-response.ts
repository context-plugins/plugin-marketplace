import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action7Schema, type Action7 } from "./action7.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { grantSchema, type Grant } from "./grant.js";
import { pairSchema, type Pair } from "./pair.js";
import { propertySchema, type Property } from "./property.js";
import { scopeSchema, type Scope } from "./scope.js";

export type IntrospectionResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action7;
  /**
   * The content that the authorization server implementation can use as the value of
   * `WWW-Authenticate` header on errors.
   */
  responseContent?: string;
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
   * The time at which the access token expires. The value is represented in milliseconds since the
   * Unix epoch (1970-01-01).
   */
  expiresAt?: number;
  /**
   * The subject who is associated with the access token. The value of this property is `null` if
   * the access token was issued using the flow of [Client Credentials
   * Grant](tools.ietf.org/html/rfc6749#section-4.4).
   */
  subject?: string;
  /** The scopes covered by the access token. */
  scopes?: string[];
  /** `true` if the access token exists. */
  existent?: boolean;
  /** true` if the access token is usable (= exists and has not expired). */
  usable?: boolean;
  /** `true` if the access token exists. */
  sufficient?: boolean;
  /**
   * `true` if the access token can be refreshed using the associated refresh token which had been
   * issued along with the access token. `false` if the refresh token for the access token has
   * expired or the access token has no associated refresh token.
   */
  refreshable?: boolean;
  /** The extra properties associated with the access token. */
  properties?: Property[];
  /** The client certificate thumbprint used to validate the access token. */
  certificateThumbprint?: string;
  /**
   * The target resources. This represents the resources specified by the `resource` request
   * parameters or by the `resource` property in the request object.
   *
   * See "Resource Indicators for OAuth 2.0" for details.
   */
  resources?: string[];
  /**
   * The target resources this proeprty holds may be the same as or different from the ones
   * `resource` property holds.
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
  /**
   * The scopes property of this class is a list of scope names. The property does not hold
   * information about scope attributes. This scopeDetails property was newly created to convey
   * information about scope attributes.
   */
  scopeDetails?: Scope[];
  /**
   * The value of the `grant_id` request parameter of the device authorization request.
   *
   * The `grant_id` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3
   * and newer versions.
   */
  grantId?: string;
  grant?: Grant;
  /** the flag which indicates whether the access token is for an external attachment. */
  forExternalAttachment?: boolean;
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
  /** The grant type of the access token when the access token was created. */
  grantType?: GrantType;
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
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
  /** The flag indicating whether the token is for credential issuance. */
  forCredentialIssuance?: boolean;
  /** The c_nonce */
  cnonce?: string;
  /** The time at which the `c_nonce` expires. */
  cnonceExpiresAt?: number;
  /** The credentials that can be obtained by presenting the access token. */
  issuableCredentials?: string;
  /**
   * The expected nonce value for DPoP proof JWT, which should be used as the value of the
   * `DPoP-Nonce` HTTP header.
   */
  dpopNonce?: string;
  /**
   * The flag indicating whether the HTTP response from the protected resource endpoint must include
   * an HTTP message signature ([RFC 9421 HTTP Message
   * Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)) in compliance with [FAPI 2.0 Message
   * Signing](https://openid.bitbucket.io/fapi/fapi-2_0-message-signing.html).
   *
   * When this response parameter is `true`, the HTTP response from the protected resource endpoint
   * must include the `Signature` and `Signature-Input` HTTP fields.
   */
  responseSigningRequired?: boolean;
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

export const introspectionResponseSchema: Schema<IntrospectionResponse> = s.object<IntrospectionResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action7Schema)),
  responseContent: s.optional(s.string()),
  clientId: s.optional(s.int()),
  clientIdAlias: s.optional(s.string()),
  clientIdAliasUsed: s.optional(s.boolean()),
  expiresAt: s.optional(s.int()),
  subject: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  existent: s.optional(s.boolean()),
  usable: s.optional(s.boolean()),
  sufficient: s.optional(s.boolean()),
  refreshable: s.optional(s.boolean()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  certificateThumbprint: s.optional(s.string()),
  resources: s.optional(s.array(s.string())),
  accessTokenResources: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
  scopeDetails: s.optional(s.array(s.lazy(() => scopeSchema))),
  grantId: s.optional(s.string()),
  grant: s.optional(s.lazy(() => grantSchema)),
  forExternalAttachment: s.optional(s.boolean()),
  consentedClaims: s.optional(s.array(s.string())),
  grantType: s.optional(s.lazy(() => grantTypeSchema)),
  acr: s.optional(s.string()),
  authTime: s.optional(s.int()),
  clientEntityId: s.optional(s.string()),
  clientEntityIdUsed: s.optional(s.boolean()),
  forCredentialIssuance: s.optional(s.boolean()),
  cnonce: s.optional(s.string()),
  cnonceExpiresAt: s.optional(s.int()),
  issuableCredentials: s.optional(s.string()),
  dpopNonce: s.optional(s.string()),
  responseSigningRequired: s.optional(s.boolean()),
  metadataDocumentLocation: s.optional(s.string()),
  metadataDocumentUsed: s.optional(s.boolean()),
});
