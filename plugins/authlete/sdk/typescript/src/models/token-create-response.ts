import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action23Schema, type Action23 } from "./action23.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { propertySchema, type Property } from "./property.js";

export type TokenCreateResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action23;
  /** The newly issued access token. */
  accessToken?: string;
  /** The ID of the client application associated with the access token. */
  clientId?: number;
  /** The time at which the access token expires. */
  expiresAt?: number;
  /** The duration of the newly issued access token in seconds. */
  expiresIn?: number;
  /** The grant type for the newly issued access token. */
  grantType?: string;
  /** The extra properties associated with the access token. */
  properties?: Property[];
  /** The newly issued refresh token. */
  refreshToken?: string;
  /** Scopes which are associated with the access token. */
  scopes?: string[];
  /**
   * The subject (= unique identifier) of the user associated with the newly issued access token.
   */
  subject?: string;
  /** The token type of the access token. */
  tokenType?: string;
  /**
   * If the authorization server is configured to issue JWT-based access tokens (= if
   * `Service.accessTokenSignAlg` is set to a `non-null` value), a JWT-based access token is issued
   * along with the original random-string one.
   */
  jwtAccessToken?: string;
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
  /** the flag which indicates whether the access token is for an external attachment. */
  forExternalAttachment?: boolean;
  /** Set the unique token identifier. */
  tokenId?: string;
  /** The scopes associated with the refresh token. May be null. */
  refreshTokenScopes?: string[];
  /** The client Identifier that will be associated with a newly created access token. */
  clientIdentifier?: string;
  /**
   * The session ID associated with a newly created access token.
   *
   * NOTE: A refresh token must be associated with a session ID, which is the ID of the user's
   * authentication session, in order to be used to obtain a [Native
   * SSO](https://openid.net/specs/openid-connect-native-sso-1_0.html)-compliant ID token in the
   * refresh token flow.
   */
  sessionId?: string;
};

export const tokenCreateResponseSchema: Schema<TokenCreateResponse> = s.object<TokenCreateResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action23Schema)),
  accessToken: s.optional(s.string()),
  clientId: s.optional(s.int()),
  expiresAt: s.optional(s.int()),
  expiresIn: s.optional(s.int()),
  grantType: s.optional(s.string()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  refreshToken: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  subject: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  jwtAccessToken: s.optional(s.string()),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
  forExternalAttachment: s.optional(s.boolean()),
  tokenId: s.optional(s.string()),
  refreshTokenScopes: s.optional(s.array(s.string())),
  clientIdentifier: s.optional(s.string()),
  sessionId: s.optional(s.string()),
});
