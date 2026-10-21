import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  backchannelAuthenticationCompleteResponseSchema,
  type BackchannelAuthenticationCompleteResponse,
} from "../models/backchannel-authentication-complete-response.js";
import {
  backchannelAuthenticationFailResponseSchema,
  type BackchannelAuthenticationFailResponse,
} from "../models/backchannel-authentication-fail-response.js";
import {
  backchannelAuthenticationIssueResponseSchema,
  type BackchannelAuthenticationIssueResponse,
} from "../models/backchannel-authentication-issue-response.js";
import {
  backchannelAuthenticationResponseSchema,
  type BackchannelAuthenticationResponse,
} from "../models/backchannel-authentication-response.js";
import { cimdOptionsSchema, type CimdOptions } from "../models/cimd-options.js";
import { propertySchema, type Property } from "../models/property.js";
import { reason2Schema, type Reason2 } from "../models/reason2.js";
import { resultSchema, type Result } from "../models/result.js";
import { result1Schema, type Result1 } from "../models/result1.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing Client-Initiated Backchannel Authentication (CIBA).
 */
export class Ciba {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Backchannel Authentication Request
   *
   * @remarks
   * This API parses request parameters of a [backchannel authentication
   * request](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_request)
   * and returns necessary data for the authorization server implementation to process the
   * backchannel authentication request further.
   *
   * @throws {@link Ciba.BackchannelAuthenticationApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backchannelAuthenticationApi(
    request: Ciba.BackchannelAuthenticationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<BackchannelAuthenticationResponse, Ciba.BackchannelAuthenticationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/backchannel/authentication"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "parameters", value: request.parameters, schema: s.string() },
            { name: "clientId", value: request.clientId, schema: s.optional(s.string()) },
            { name: "clientSecret", value: request.clientSecret, schema: s.optional(s.string()) },
            { name: "clientCertificate", value: request.clientCertificate, schema: s.optional(s.string()) },
            {
              name: "clientCertificatePath",
              value: request.clientCertificatePath,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "oauthClientAttestation",
              value: request.oauthClientAttestation,
              schema: s.optional(s.string()),
            },
            {
              name: "oauthClientAttestationPop",
              value: request.oauthClientAttestationPop,
              schema: s.optional(s.string()),
            },
            {
              name: "cimdOptions",
              value: request.cimdOptions,
              schema: s.optional(s.lazy(() => cimdOptionsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: backchannelAuthenticationResponseSchema },
        errorFactory: Ciba.BackchannelAuthenticationApiError,
      },
      options,
    );
  }

  /**
   * Complete Backchannel Authentication
   *
   * @remarks
   * This API returns information about what action the authorization server should take after it
   * receives the result of end-user's decision about whether the end-user has approved or rejected
   * a client application's request on the authentication device.
   *
   * @returns Backchannel authentication completed successfully
   *
   * @throws {@link Ciba.BackchannelAuthenticationCompleteApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backchannelAuthenticationCompleteApi(
    request: Ciba.BackchannelAuthenticationCompleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<BackchannelAuthenticationCompleteResponse, Ciba.BackchannelAuthenticationCompleteApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/backchannel/authentication/complete"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "result", value: request.result, schema: result1Schema },
            { name: "subject", value: request.subject, schema: s.string() },
            { name: "sub", value: request.sub, schema: s.optional(s.string()) },
            { name: "authTime", value: request.authTime, schema: s.optional(s.int()) },
            { name: "acr", value: request.acr, schema: s.optional(s.string()) },
            { name: "claims", value: request.claims, schema: s.optional(s.string()) },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
            { name: "idtHeaderParams", value: request.idtHeaderParams, schema: s.optional(s.string()) },
            { name: "errorDescription", value: request.errorDescription, schema: s.optional(s.string()) },
            { name: "errorUri", value: request.errorUri, schema: s.optional(s.string()) },
            {
              name: "consentedClaims",
              value: request.consentedClaims,
              schema: s.optional(s.array(s.string())),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
            { name: "idTokenAudType", value: request.idTokenAudType, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: backchannelAuthenticationCompleteResponseSchema },
        errorFactory: Ciba.BackchannelAuthenticationCompleteApiError,
      },
      options,
    );
  }

  /**
   * Fail Backchannel Authentication Request
   *
   * @remarks
   * The API prepares JSON that contains an error. The JSON should be used as the response body of
   * the response which is returned to the client from the [backchannel authentication
   * endpoint](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_backchannel_endpoint).
   *
   * @throws {@link Ciba.BackchannelAuthenticationFailApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backchannelAuthenticationFailApi(
    request: Ciba.BackchannelAuthenticationFailApiRequest,
    options?: RequestOptions,
  ): ApiPromise<BackchannelAuthenticationFailResponse, Ciba.BackchannelAuthenticationFailApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/backchannel/authentication/fail"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "reason", value: request.reason, schema: reason2Schema },
            { name: "errorDescription", value: request.errorDescription, schema: s.optional(s.string()) },
            { name: "errorUri", value: request.errorUri, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: backchannelAuthenticationFailResponseSchema },
        errorFactory: Ciba.BackchannelAuthenticationFailApiError,
      },
      options,
    );
  }

  /**
   * Issue Backchannel Authentication Response
   *
   * @remarks
   * This API prepares JSON that contains an `auth_req_id`. The JSON should be used as the response
   * body of the response which is returned to the client from the [backchannel authentication
   * endpoint](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html#auth_backchannel_endpoint)
   *
   * @returns Backchannel authentication issued successfully
   *
   * @throws {@link Ciba.BackchannelAuthenticationIssueApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backchannelAuthenticationIssueApi(
    request: Ciba.BackchannelAuthenticationIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<BackchannelAuthenticationIssueResponse, Ciba.BackchannelAuthenticationIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/backchannel/authentication/issue"),
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
        success: { kind: "json", schema: backchannelAuthenticationIssueResponseSchema },
        errorFactory: Ciba.BackchannelAuthenticationIssueApiError,
      },
      options,
    );
  }
}

export namespace Ciba {
  export type BackchannelAuthenticationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * Parameters of a backchannel authentication request which are the request parameters that the
     * backchannel authentication endpoint of the OpenID provider implementation received from the
     * client application.
     *
     * The value of `parameters` is the entire entity body (which is formatted in
     * `application/x-www-form-urlencoded`) of the request from the client application.
     */
    parameters: string;
    /**
     * The client ID extracted from Authorization header of the backchannel authentication request
     * from the client application.
     *
     * If the backchannel authentication endpoint of the OpenID provider implementation supports
     * Basic Authentication as a means of client authentication, and the request from the client
     * application contained its client ID in Authorization header, the value should be extracted
     * and set to this parameter.
     */
    clientId?: string;
    /**
     * The client secret extracted from Authorization header of the backchannel authentication
     * request from the client application.
     *
     * If the backchannel authentication endpoint of the OpenID provider implementation supports
     * Basic Authentication as a means of client authentication, and the request from the client
     * application contained its client secret in Authorization header, the value should be
     * extracted and set to this parameter.
     */
    clientSecret?: string;
    /**
     * The client certification used in the TLS connection between the client application and the
     * backchannel authentication endpoint of the OpenID provider.
     */
    clientCertificate?: string;
    /**
     * The client certificate path presented by the client during client authentication. Each
     * element is a string in PEM format.
     */
    clientCertificatePath?: string[];
    /**
     * The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the
     * specification of [OAuth 2.0 Attestation-Based Client
     * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
     */
    oauthClientAttestation?: string;
    /**
     * The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the
     * specification of [OAuth 2.0 Attestation-Based Client
     * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
     */
    oauthClientAttestationPop?: string;
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

  export class BackchannelAuthenticationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<BackchannelAuthenticationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type BackchannelAuthenticationCompleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket issued by Authlete's `/backchannel/authentication` API. */
    ticket: string;
    /**
     * The result of the end-user authentication and authorization. One of the following. Details
     * are described in the description.
     */
    result: Result1;
    /** The subject (= unique identifier) of the end-user. */
    subject: string;
    /** The value of the sub claim that should be used in the ID token. */
    sub?: string;
    /**
     * The time at which the end-user was authenticated. Its value is the number of seconds from
     * `1970-01-01`.
     */
    authTime?: number;
    /**
     * The reference of the authentication context class which the end-user authentication
     * satisfied.
     */
    acr?: string;
    /** Additional claims which will be embedded in the ID token. */
    claims?: string;
    /** The extra properties associated with the access token. */
    properties?: Property[];
    /**
     * Scopes to replace the scopes specified in the original backchannel authentication request
     * with. When nothing is specified for this parameter, replacement is not performed.
     */
    scopes?: string[];
    /** JSON that represents additional JWS header parameters for ID tokens. */
    idtHeaderParams?: string;
    /**
     * The description of the error. If this optional request parameter is given, its value is used
     * as the value of the `error_description` property, but it is used only when the result is not
     * `AUTHORIZED`. To comply with the specification strictly, the description must not include
     * characters outside the set `%x20-21 / %x23-5B / %x5D-7E`.
     */
    errorDescription?: string;
    /**
     * The URI of a document which describes the error in detail. This corresponds to the
     * `error_uri` property in the response to the client.
     */
    errorUri?: string;
    /** the claims that the user has consented for the client application to know. */
    consentedClaims?: string[];
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
     * The duration (in seconds) of the refresh token that may be issued as a result of the Authlete
     * API call.
     *
     * When this request parameter holds a positive integer, it is used as the duration of the
     * refresh token in. In other cases, this request parameter is ignored.
     */
    refreshTokenDuration?: number;
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
  };

  export class BackchannelAuthenticationCompleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<BackchannelAuthenticationCompleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type BackchannelAuthenticationFailApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The ticket which should be deleted on a call of Authlete's `/backchannel/authentication/fail`
     * API. This request parameter is not mandatory but optional. If this request parameter is given
     * and the ticket belongs to the service, the specified ticket is deleted from the database.
     * Giving this parameter is recommended to clean up the storage area for the service.
     */
    ticket: string;
    /**
     * The reason of the failure of the backchannel authentication request. This request parameter
     * is not mandatory but optional. However, giving this parameter is recommended. If omitted,
     * `SERVER_ERROR` is used as a reason.
     */
    reason: Reason2;
    /**
     * The description of the error. This corresponds to the `error_description` property in the
     * response to the client.
     */
    errorDescription?: string;
    /**
     * The URI of a document which describes the error in detail. If this optional request parameter
     * is given, its value is used as the value of the `error_uri` property.
     */
    errorUri?: string;
  };

  export class BackchannelAuthenticationFailApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<BackchannelAuthenticationFailApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type BackchannelAuthenticationIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket issued from Authlete's `/backchannel/authentication` API. */
    ticket: string;
  };

  export class BackchannelAuthenticationIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<BackchannelAuthenticationIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
