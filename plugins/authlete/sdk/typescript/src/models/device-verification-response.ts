import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action21Schema, type Action21 } from "./action21.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { dynamicScopeSchema, type DynamicScope } from "./dynamic-scope.js";
import { grantManagementActionSchema, type GrantManagementAction } from "./grant-management-action.js";
import { grantSchema, type Grant } from "./grant.js";
import { pairSchema, type Pair } from "./pair.js";
import { scopeSchema, type Scope } from "./scope.js";

export type DeviceVerificationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action21;
  /** The client ID of the client application to which the user code has been issued. */
  clientId?: number;
  /** The client ID alias of the client application to which the user code has been issued. */
  clientIdAlias?: string;
  /**
   * `true` if the value of the `client_id` request parameter included in the device authorization
   * request is the client ID alias. `false` if the value is the original numeric client ID.
   */
  clientIdAliasUsed?: boolean;
  /** The name of the client application to which the user code has been issued. */
  clientName?: string;
  /**
   * The scopes requested by the device authorization request.
   *
   * Note that `description` property and `descriptions` property of each scope object in the array
   * contained in this property is always null even if descriptions of the scopes are registered.
   */
  scopes?: Scope[];
  /**
   * The names of the claims which were requested indirectly via some special scopes. See [5.4.
   * Requesting Claims using Scope
   * Values](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) in OpenID Connect
   * Core 1.0 for details.
   *
   * This property is always `null` if the `scope` request parameter of the device authorization
   * request does not include the `openid` scope even if special scopes (such as `profile`) are
   * included in the request (unless the openid scope is included in the default set of scopes which
   * is used when the `scope` request parameter is omitted).
   */
  claimNames?: string[];
  /** The list of ACR values requested by the device authorization request. */
  acrs?: string[];
  /**
   * The resources specified by the `resource` request parameters or by the `resource` property in
   * the request object. If both are given, the values in the request object should be set. See
   * "Resource Indicators for OAuth 2.0" for details.
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
   * Get the date in milliseconds since the Unix epoch (1970-01-01) at which the user code will
   * expire.
   */
  expiresAt?: number;
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

export const deviceVerificationResponseSchema: Schema<DeviceVerificationResponse> =
  s.object<DeviceVerificationResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action21Schema)),
    clientId: s.optional(s.int()),
    clientIdAlias: s.optional(s.string()),
    clientIdAliasUsed: s.optional(s.boolean()),
    clientName: s.optional(s.string()),
    scopes: s.optional(s.array(s.lazy(() => scopeSchema))),
    claimNames: s.optional(s.array(s.string())),
    acrs: s.optional(s.array(s.string())),
    resources: s.optional(s.array(s.string())),
    authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
    serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    dynamicScopes: s.optional(s.array(s.lazy(() => dynamicScopeSchema))),
    expiresAt: s.optional(s.int()),
    gmAction: s.optional(s.lazy(() => grantManagementActionSchema)),
    grantId: s.optional(s.string()),
    grant: s.optional(s.lazy(() => grantSchema)),
    grantSubject: s.optional(s.string()),
    clientEntityId: s.optional(s.string()),
    clientEntityIdUsed: s.optional(s.boolean()),
    metadataDocumentLocation: s.optional(s.string()),
    metadataDocumentUsed: s.optional(s.boolean()),
  });
