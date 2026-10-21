import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationFailResponseSchema,
  type AuthorizationFailResponse,
} from "../models/authorization-fail-response.js";
import {
  authorizationIssueResponseSchema,
  type AuthorizationIssueResponse,
} from "../models/authorization-issue-response.js";
import { authorizationResponseSchema, type AuthorizationResponse } from "../models/authorization-response.js";
import {
  authorizationTicketInfoResponseSchema,
  type AuthorizationTicketInfoResponse,
} from "../models/authorization-ticket-info-response.js";
import {
  authorizationTicketInfoSchema,
  type AuthorizationTicketInfo,
} from "../models/authorization-ticket-info.js";
import {
  authorizationTicketUpdateResponseSchema,
  type AuthorizationTicketUpdateResponse,
} from "../models/authorization-ticket-update-response.js";
import { authzDetailsSchema, type AuthzDetails } from "../models/authz-details.js";
import { cimdOptionsSchema, type CimdOptions } from "../models/cimd-options.js";
import { propertySchema, type Property } from "../models/property.js";
import { reasonSchema, type Reason } from "../models/reason.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Authorization Endpoint.
 */
export class AuthorizationEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Authorization Request
   *
   * @remarks
   * This API parses request parameters of an authorization request and returns necessary data for
   * the authorization server implementation to process the authorization request further.
   *
   * @returns Authorization request processed successfully
   *
   * @throws {@link AuthorizationEndpoint.AuthAuthorizationApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authAuthorizationApi(
    request: AuthorizationEndpoint.AuthAuthorizationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationResponse, AuthorizationEndpoint.AuthAuthorizationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/authorization"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "parameters", value: request.parameters, schema: s.string() },
            { name: "context", value: request.context, schema: s.optional(s.string()) },
            {
              name: "cimdOptions",
              value: request.cimdOptions,
              schema: s.optional(s.lazy(() => cimdOptionsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: authorizationResponseSchema },
        errorFactory: AuthorizationEndpoint.AuthAuthorizationApiError,
      },
      options,
    );
  }

  /**
   * Fail Authorization Request
   *
   * @remarks
   * This API generates a content of an error authorization response that the authorization server
   * implementation returns to the client application.
   *
   * @throws {@link AuthorizationEndpoint.AuthAuthorizationFailApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authAuthorizationFailApi(
    request: AuthorizationEndpoint.AuthAuthorizationFailApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationFailResponse, AuthorizationEndpoint.AuthAuthorizationFailApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/authorization/fail"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "reason", value: request.reason, schema: reasonSchema },
            { name: "description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: authorizationFailResponseSchema },
        errorFactory: AuthorizationEndpoint.AuthAuthorizationFailApiError,
      },
      options,
    );
  }

  /**
   * Issue Authorization Response
   *
   * @remarks
   * This API parses request parameters of an authorization request and returns necessary data for
   * the authorization server implementation to process the authorization request further.
   *
   * @throws {@link AuthorizationEndpoint.AuthAuthorizationIssueApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authAuthorizationIssueApi(
    request: AuthorizationEndpoint.AuthAuthorizationIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationIssueResponse, AuthorizationEndpoint.AuthAuthorizationIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/authorization/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "subject", value: request.subject, schema: s.string() },
            { name: "authTime", value: request.authTime, schema: s.optional(s.int()) },
            { name: "acr", value: request.acr, schema: s.optional(s.string()) },
            { name: "claims", value: request.claims, schema: s.optional(s.string()) },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
            { name: "sub", value: request.sub, schema: s.optional(s.string()) },
            { name: "idtHeaderParams", value: request.idtHeaderParams, schema: s.optional(s.string()) },
            { name: "claimsForTx", value: request.claimsForTx, schema: s.optional(s.string()) },
            {
              name: "consentedClaims",
              value: request.consentedClaims,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "authorizationDetails",
              value: request.authorizationDetails,
              schema: s.optional(s.lazy(() => authzDetailsSchema)),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            { name: "sessionId", value: request.sessionId, schema: s.optional(s.string()) },
            { name: "idTokenAudType", value: request.idTokenAudType, schema: s.optional(s.string()) },
            {
              name: "verifiedClaimsForTx",
              value: request.verifiedClaimsForTx,
              schema: s.optional(s.array(s.string())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: authorizationIssueResponseSchema },
        errorFactory: AuthorizationEndpoint.AuthAuthorizationIssueApiError,
      },
      options,
    );
  }

  /**
   * Get Ticket Information
   *
   * @throws {@link AuthorizationEndpoint.GetAuthorizationTicketInfoError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuthorizationTicketInfo(
    request: AuthorizationEndpoint.GetAuthorizationTicketInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationTicketInfoResponse, AuthorizationEndpoint.GetAuthorizationTicketInfoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/authorization/ticket/info"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ticket", value: request.ticket, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: authorizationTicketInfoResponseSchema },
        errorFactory: AuthorizationEndpoint.GetAuthorizationTicketInfoError,
      },
      options,
    );
  }

  /**
   * Update Ticket Information
   *
   * @returns Authorization ticket updated successfully
   *
   * @throws {@link AuthorizationEndpoint.UpdateAuthorizationTicketError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAuthorizationTicket(
    request: AuthorizationEndpoint.UpdateAuthorizationTicketRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationTicketUpdateResponse, AuthorizationEndpoint.UpdateAuthorizationTicketError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/authorization/ticket/update"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "info", value: request.info, schema: authorizationTicketInfoSchema },
          ],
        },
      },
      {
        success: { kind: "json", schema: authorizationTicketUpdateResponseSchema },
        errorFactory: AuthorizationEndpoint.UpdateAuthorizationTicketError,
      },
      options,
    );
  }
}

export namespace AuthorizationEndpoint {
  export type AuthAuthorizationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * OAuth 2.0 authorization request parameters which are the request parameters that the OAuth
     * 2.0 authorization endpoint of the authorization server implementation received from the
     * client application.
     *
     * The value of parameters is either (1) the entire query string when the HTTP method of the
     * request from the client application is `GET` or (2) the entire entity body (which is
     * formatted in `application/x-www-form-urlencoded`) when the HTTP method of the request from
     * the client application is `POST`.
     */
    parameters: string;
    /**
     * The arbitrary text to be attached to the ticket that will be issued from the
     * `/auth/authorization` API.
     *
     * The text can be retrieved later by the `/auth/authorization/ticket/info` API and can be
     * updated by the `/auth/authorization/ticket/update` API.
     *
     * The text will be compressed and encrypted when it is saved in the Authlete database.
     */
    context?: string;
    /**
     * Options for [OAuth Client ID Metadata
     * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
     * (CIMD).
     *
     * These options allow per-request control over CIMD behavior, taking precedence over
     * service-level configuration when provided.
     */
    cimdOptions?: CimdOptions;
  };

  export class AuthAuthorizationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthAuthorizationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthAuthorizationFailApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket issued from Authlete `/auth/authorization` API. */
    ticket: string;
    /**
     * The reason of the failure of the authorization request. For more details, see
     * [NO_INTERACTION] in the description of `/auth/authorization` API.
     */
    reason: Reason;
    /** The custom description about the authorization failure. */
    description?: string;
  };

  export class AuthAuthorizationFailApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthAuthorizationFailApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthAuthorizationIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
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
     * Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) for details
     * about the format.
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
     * JSON that represents additional JWS header parameters for ID tokens that may be issued based
     * on the authorization request.
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
     * The representation of an access token that may be issued as a result of the Authlete API
     * call.
     */
    accessToken?: string;
    /**
     * The duration (in seconds) of the access token that may be issued as a result of the Authlete
     * API call.
     *
     * When this request parameter holds a positive integer, it is used as the duration of the
     * access token in. In other cases, this request parameter is ignored.
     */
    accessTokenDuration?: number;
    /**
     * The session ID of the user's authentication session. The specified value will be embedded in
     * the ID token as the value of the `sid` claim. This parameter needs to be provided only if you
     * want to support the [OpenID Connect Native SSO for Mobile Apps
     * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) specification (a.k.a.
     * "Native SSO"). To enable support for the Native SSO specification, the `nativeSsoSupported`
     * property of your service must be set to `true`.
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

  export class AuthAuthorizationIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthAuthorizationIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type GetAuthorizationTicketInfoRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket that has been issued from the `/auth/authorization` API. */
    ticket: string;
  };

  export class GetAuthorizationTicketInfoError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuthorizationTicketInfoError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type UpdateAuthorizationTicketRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket. */
    ticket: string;
    info: AuthorizationTicketInfo;
  };

  export class UpdateAuthorizationTicketError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAuthorizationTicketError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
