import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { authorizationTicketInfoSchema, type AuthorizationTicketInfo } from "./authorization-ticket-info.js";

export type AuthorizationIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action1;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
  /**
   * The newly issued access token. Note that an access token is issued from an authorization
   * endpoint only when `response_type` contains token.
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
   * The newly issued ID token. Note that an ID token is issued from an authorization endpoint only
   * when `response_type` contains `id_token`.
   */
  idToken?: string;
  /**
   * The newly issued authorization code. Note that an authorization code is issued only when
   * `response_type` contains code.
   */
  authorizationCode?: string;
  /**
   * The newly issued access token in JWT format. If the service is not configured to issue
   * JWT-based access tokens, this property is always set to `null`.
   */
  jwtAccessToken?: string;
  ticketInfo?: AuthorizationTicketInfo;
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
};

export const authorizationIssueResponseSchema: Schema<AuthorizationIssueResponse> =
  s.object<AuthorizationIssueResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action1Schema)),
    responseContent: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    accessTokenExpiresAt: s.optional(s.int()),
    accessTokenDuration: s.optional(s.int()),
    idToken: s.optional(s.string()),
    authorizationCode: s.optional(s.string()),
    jwtAccessToken: s.optional(s.string()),
    ticketInfo: s.optional(s.lazy(() => authorizationTicketInfoSchema)),
    consentedClaims: s.optional(s.array(s.string())),
  });
