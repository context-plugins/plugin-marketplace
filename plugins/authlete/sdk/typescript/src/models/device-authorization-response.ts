import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action20Schema, type Action20 } from "./action20.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { dynamicScopeSchema, type DynamicScope } from "./dynamic-scope.js";
import { grantManagementActionSchema, type GrantManagementAction } from "./grant-management-action.js";
import { grantSchema, type Grant } from "./grant.js";
import { pairSchema, type Pair } from "./pair.js";
import { scopeSchema, type Scope } from "./scope.js";

export type DeviceAuthorizationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action20;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /** The client ID of the client application that has made the device authorization request. */
  clientId?: number;
  /**
   * The client ID alias of the client application that has made the device authorization request.
   */
  clientIdAlias?: string;
  /**
   * `true` if the value of the client_id request parameter included in the device authorization
   * request is the client ID alias. `false` if the value is the original numeric client ID.
   */
  clientIdAliasUsed?: boolean;
  /** The name of the client application which has made the device authorization request. */
  clientName?: string;
  /**
   * The client authentication method that should be performed at the device authorization endpoint.
   */
  clientAuthMethod?: string;
  /** The scopes requested by the device authorization request. */
  scopes?: Scope[];
  /**
   * The names of the claims which were requested indirectly via some special scopes. See [5.4.
   * Requesting Claims using Scope
   * Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) in OpenID Connect
   * Core 1.0 for details.
   */
  claimNames?: string[];
  /**
   * The list of ACR values requested by the device authorization request.
   *
   * Basically, this property holds the value of the `acr_values` request parameter in the device
   * authorization request. However, because unsupported ACR values are dropped on Authlete side, if
   * the `acr_values` request parameter contains unrecognized ACR values, the list returned by this
   * property becomes different from the value of the `acr_values` request parameter.
   */
  acrs?: string[];
  /**
   * The device verification code. This corresponds to the `device_code` property in the response to
   * the client.
   */
  deviceCode?: string;
  /**
   * The end-user verification code. This corresponds to the `user_code` property in the response to
   * the client.
   */
  userCode?: string;
  /**
   * The end-user verification URI. This corresponds to the `verification_uri` property in the
   * response to the client.
   */
  verificationUri?: string;
  /**
   * The end-user verification URI that includes the end-user verification code. This corresponds to
   * the `verification_uri_complete` property in the response to the client.
   */
  verificationUriComplete?: string;
  /**
   * The duration of the device verification code in seconds. This corresponds to the `expires_in`
   * property in the response to the client.
   */
  expiresIn?: number;
  /**
   * The minimum amount of time in seconds that the client must wait for between polling requests to
   * the token endpoint. This corresponds to the `interval` property in the response to the client.
   */
  interval?: number;
  /** The warnings raised during processing the backchannel authentication request. */
  warnings?: string[];
  /**
   * The resources specified by the `resource` request parameters. See "Resource Indicators for
   * OAuth 2.0" for details.
   */
  resources?: string[];
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
  /** The dynamic scopes which the client application requested by the scope request parameter. */
  dynamicScopes?: DynamicScope[];
  /**
   * The grant management action of the device authorization request.
   *
   * The `grant_management_action` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html).
   */
  gmAction?: GrantManagementAction;
  /**
   * the value of the `grant_id` request parameter of the device authorization request.
   *
   * The `grant_id` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3
   * and newer versions.
   */
  grantId?: string;
  grant?: Grant;
  /**
   * The subject identifying the user who has given the grant identified by the `grant_id` request
   * parameter of the device authorization request. Authlete 2.3 and newer versions support [Grant
   * Management for OAuth 2.0](https://openid.net/specs/fapi-grant-management.html). An
   * authorization request may contain a `grant_id` request parameter which is defined in the
   * specification. If the value of the request parameter is valid, &#123;@link
   * #getGrantSubject()&#125; will return the subject of the user who has given the grant to the
   * client application. Authorization server implementations may use the value returned from
   * &#123;@link #getGrantSubject()&#125; in order to determine the user to authenticate. The user
   * your system will authenticate during the authorization process (or has already authenticated)
   * may be different from the user of the grant. The first implementer's draft of "Grant Management
   * for OAuth 2.0" does not mention anything about the case, so the behavior in the case is left to
   * implementations. Authlete will not perform the grant management action when the `subject`
   * passed to Authlete does not match the user of the grant.
   */
  grantSubject?: string;
  /** The entity ID of the client. */
  clientEntityId?: string;
  /**
   * Flag which indicates whether the entity ID of the client was used when the request for the
   * access token was made.
   */
  clientEntityIdUsed?: boolean;
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

export const deviceAuthorizationResponseSchema: Schema<DeviceAuthorizationResponse> =
  s.object<DeviceAuthorizationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action20Schema)),
    responseContent: s.optional(s.string()),
    clientId: s.optional(s.int()),
    clientIdAlias: s.optional(s.string()),
    clientIdAliasUsed: s.optional(s.boolean()),
    clientName: s.optional(s.string()),
    clientAuthMethod: s.optional(s.string()),
    scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
    claimNames: s.optional(s.array(s.string())),
    acrs: s.optional(s.array(s.string())),
    deviceCode: s.optional(s.string()),
    userCode: s.optional(s.string()),
    verificationUri: s.optional(s.string()),
    verificationUriComplete: s.optional(s.string()),
    expiresIn: s.optional(s.int()),
    interval: s.optional(s.int()),
    warnings: s.optional(s.array(s.string())),
    resources: s.optional(s.array(s.string())),
    authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
    serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    dynamicScopes: s.optional(s.array(s.lazy(() => dynamicScopeSchema))),
    gmAction: s.optional(s.lazy(() => grantManagementActionSchema)),
    grantId: s.optional(s.string()),
    grant: s.optional(s.lazy(() => grantSchema)),
    grantSubject: s.optional(s.string()),
    clientEntityId: s.optional(s.string()),
    clientEntityIdUsed: s.optional(s.boolean()),
    metadataDocumentLocation: s.optional(s.string()),
    metadataDocumentUsed: s.optional(s.boolean()),
  });
