import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { propertySchema, type Property } from "./property.js";

export type AuthorizationIssueRequest = {
  /** The ticket issued from Authlete `/auth/authorization` API. */
  ticket: string;
  /**
   * The subject (= a user account managed by the service) who has granted authorization to the
   * client application.
   */
  subject: string;
  /**
   * The time when the authentication of the end-user occurred. Its value is the number of seconds
   * from `1970-01-01`.
   */
  authTime?: number;
  /** The Authentication Context Class Reference performed for the end-user authentication. */
  acr?: string;
  /**
   * The claims of the end-user (= pieces of information about the end-user) in JSON format. See
   * [OpenID Connect Core 1.0, 5.1. Standard
   * Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) for details about
   * the format.
   */
  claims?: string;
  /** Extra properties to associate with an access token and/or an authorization code. */
  properties?: Property[];
  /**
   * Scopes to associate with an access token and/or an authorization code. If a non-empty string
   * array is given, it replaces the scopes specified by the original authorization request.
   */
  scopes?: string[];
  /**
   * The value of the `sub` claim to embed in an ID token. If this request parameter is `null` or
   * empty, the value of the `subject` request parameter is used as the value of the `sub` claim.
   */
  sub?: string;
  /**
   * JSON that represents additional JWS header parameters for ID tokens that may be issued based on
   * the authorization request.
   */
  idtHeaderParams?: string;
  /** Claim key-value pairs that are used to compute transformed claims. */
  claimsForTx?: string;
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
  /** Additional claims that are added to the payload part of the JWT access token. */
  jwtAtClaims?: string;
  /**
   * The representation of an access token that may be issued as a result of the Authlete API call.
   */
  accessToken?: string;
  /**
   * The duration (in seconds) of the access token that may be issued as a result of the Authlete
   * API call.
   *
   * When this request parameter holds a positive integer, it is used as the duration of the access
   * token in. In other cases, this request parameter is ignored.
   */
  accessTokenDuration?: number;
  /**
   * The session ID of the user's authentication session. The specified value will be embedded in
   * the ID token as the value of the `sid` claim. This parameter needs to be provided only if you
   * want to support the [OpenID Connect Native SSO for Mobile Apps
   * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (a.k.a. "Native
   * SSO"). To enable support for the Native SSO specification, the `nativeSsoSupported` property of
   * your service must be set to `true`.
   */
  sessionId?: string;
  /**
   * The type of the `aud` claim of the ID token being issued. Valid values are as follows.
   *
   * | Value | Description |
   * | ----- | ----------- |
   * | "array" | The type of the aud claim is always an array of strings. |
   * | "string" | The type of the aud claim is always a single string. |
   * | null | The type of the aud claim remains the same as before. |
   *
   * This request parameter takes precedence over the `idTokenAudType` property of the service.
   */
  idTokenAudType?: string;
  /** Values of verified claims requested indirectly by "transformed claims". */
  verifiedClaimsForTx?: string[];
};

export const authorizationIssueRequestSchema: Schema<AuthorizationIssueRequest> =
  s.object<AuthorizationIssueRequest>({
    ticket: s.string(),
    subject: s.string(),
    authTime: s.optional(s.int()),
    acr: s.optional(s.string()),
    claims: s.optional(s.string()),
    properties: s.optional(s.array(s.lazy(() => propertySchema))),
    scopes: s.optional(s.array(s.string())),
    sub: s.optional(s.string()),
    idtHeaderParams: s.optional(s.string()),
    claimsForTx: s.optional(s.string()),
    consentedClaims: s.optional(s.array(s.string())),
    authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
    jwtAtClaims: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    accessTokenDuration: s.optional(s.int()),
    sessionId: s.optional(s.string()),
    idTokenAudType: s.optional(s.string()),
    verifiedClaimsForTx: s.optional(s.array(s.string())),
  });
