import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action18Schema, type Action18 } from "./action18.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { deliveryModeSchema, type DeliveryMode } from "./delivery-mode.js";
import { pairSchema, type Pair } from "./pair.js";

export type BackchannelAuthenticationCompleteResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action18;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /**
   * The client ID of the client application that has made the backchannel authentication request.
   */
  clientId?: number;
  /**
   * The client ID alias of the client application that has made the backchannel authentication
   * request.
   */
  clientIdAlias?: string;
  /**
   * `true` if the value of the client_id request parameter included in the backchannel
   * authentication request is the client ID alias. `false` if the value is the original numeric
   * client ID.
   */
  clientIdAliasUsed?: boolean;
  /** The name of the client application which has made the backchannel authentication request. */
  clientName?: string;
  deliveryMode?: DeliveryMode;
  /**
   * The client notification endpoint to which a notification needs to be sent. This corresponds to
   * the `client_notification_endpoint` metadata of the client application.
   */
  clientNotificationEndpoint?: string;
  /**
   * The client notification token which needs to be embedded as a Bearer token in the Authorization
   * header in the notification. This is the value of the `client_notification_token` request
   * parameter included in the backchannel authentication request.
   */
  clientNotificationToken?: string;
  /** The newly issued authentication request ID. */
  authReqId?: string;
  /** The issued access token. */
  accessToken?: string;
  /** The issued refresh token. */
  refreshToken?: string;
  /** The issued ID token. */
  idToken?: string;
  /** The duration of the access token in seconds. */
  accessTokenDuration?: number;
  /** The duration of the refresh token in seconds. */
  refreshTokenDuration?: number;
  /** The duration of the ID token in seconds. */
  idTokenDuration?: number;
  /** The issued access token in JWT format. */
  jwtAccessToken?: string;
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
  /**
   * the value of the `grant_id` request parameter of the device authorization request.
   *
   * The `grant_id` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3
   * and newer versions.
   */
  grantId?: string;
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
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
};

export const backchannelAuthenticationCompleteResponseSchema: Schema<BackchannelAuthenticationCompleteResponse> =
  s.object<BackchannelAuthenticationCompleteResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action18Schema)),
    responseContent: s.optional(s.string()),
    clientId: s.optional(s.int()),
    clientIdAlias: s.optional(s.string()),
    clientIdAliasUsed: s.optional(s.boolean()),
    clientName: s.optional(s.string()),
    deliveryMode: s.optional(s.lazy(() => deliveryModeSchema)),
    clientNotificationEndpoint: s.optional(s.string()),
    clientNotificationToken: s.optional(s.string()),
    authReqId: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    refreshToken: s.optional(s.string()),
    idToken: s.optional(s.string()),
    accessTokenDuration: s.optional(s.int()),
    refreshTokenDuration: s.optional(s.int()),
    idTokenDuration: s.optional(s.int()),
    jwtAccessToken: s.optional(s.string()),
    resources: s.optional(s.array(s.string())),
    authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
    serviceAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    clientAttributes: s.optional(s.array(s.lazy(() => pairSchema))),
    grantId: s.optional(s.string()),
    clientEntityId: s.optional(s.string()),
    clientEntityIdUsed: s.optional(s.boolean()),
    metadataDocumentLocation: s.optional(s.string()),
    metadataDocumentUsed: s.optional(s.boolean()),
    consentedClaims: s.optional(s.array(s.string())),
  });
