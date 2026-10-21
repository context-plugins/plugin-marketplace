import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cimdOptionsSchema, type CimdOptions } from "../models/cimd-options.js";
import {
  idtokenReissueRequestSchema,
  type IdtokenReissueRequest,
} from "../models/idtoken-reissue-request.js";
import {
  idtokenReissueResponseSchema,
  type IdtokenReissueResponse,
} from "../models/idtoken-reissue-response.js";
import { propertySchema, type Property } from "../models/property.js";
import { reason1Schema, type Reason1 } from "../models/reason1.js";
import { resultSchema, type Result } from "../models/result.js";
import { tokenFailResponseSchema, type TokenFailResponse } from "../models/token-fail-response.js";
import { tokenIssueResponseSchema, type TokenIssueResponse } from "../models/token-issue-response.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Token Endpoint.
 */
export class TokenEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Token Request
   *
   * @remarks
   * This API parses request parameters of an authorization request and returns necessary data for
   * the authorization server implementation to process the authorization request further.
   *
   * @returns Token operation completed successfully
   *
   * @throws {@link TokenEndpoint.AuthTokenApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenApi(
    request: TokenEndpoint.AuthTokenApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, TokenEndpoint.AuthTokenApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token"),
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
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "dpop", value: request.dpop, schema: s.optional(s.string()) },
            { name: "htm", value: request.htm, schema: s.optional(s.string()) },
            { name: "htu", value: request.htu, schema: s.optional(s.string()) },
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
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
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
            { name: "dpopNonceRequired", value: request.dpopNonceRequired, schema: s.optional(s.boolean()) },
            {
              name: "cimdOptions",
              value: request.cimdOptions,
              schema: s.optional(s.lazy(() => cimdOptionsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: TokenEndpoint.AuthTokenApiError,
      },
      options,
    );
  }

  /**
   * Fail Token Request
   *
   * @remarks
   * This API generates a content of an error token response that the authorization server
   * implementation returns to the client application.
   *
   * @throws {@link TokenEndpoint.AuthTokenFailApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenFailApi(
    request: TokenEndpoint.AuthTokenFailApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenFailResponse, TokenEndpoint.AuthTokenFailApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/fail"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "reason", value: request.reason, schema: reason1Schema },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenFailResponseSchema },
        errorFactory: TokenEndpoint.AuthTokenFailApiError,
      },
      options,
    );
  }

  /**
   * Issue Token Response
   *
   * @remarks
   * This API generates a content of a successful token response that the authorization server
   * implementation returns to the client application.
   *
   * @returns Token issued successfully
   *
   * @throws {@link TokenEndpoint.AuthTokenIssueApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authTokenIssueApi(
    request: TokenEndpoint.AuthTokenIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenIssueResponse, TokenEndpoint.AuthTokenIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/token/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ticket", value: request.ticket, schema: s.string() },
            { name: "subject", value: request.subject, schema: s.string() },
            {
              name: "properties",
              value: request.properties,
              schema: s.optional(s.array(s.lazy(() => propertySchema))),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
            { name: "accessToken", value: request.accessToken, schema: s.optional(s.string()) },
            { name: "accessTokenDuration", value: request.accessTokenDuration, schema: s.optional(s.int()) },
            {
              name: "refreshTokenDuration",
              value: request.refreshTokenDuration,
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenIssueResponseSchema },
        errorFactory: TokenEndpoint.AuthTokenIssueApiError,
      },
      options,
    );
  }

  /**
   * Reissue ID Token
   *
   * @remarks
   * The API is expected to be called only when the value of the `action` parameter in a response
   * from the `/auth/token` API is
   * [ID_TOKEN_REISSUABLE](https://authlete.github.io/authlete-java-common/com/authlete/common/dto/TokenResponse.Action.html#ID_TOKEN_REISSUABLE).
   * The purpose of the `/idtoken/reissue` API is to generate a token response that includes a new
   * ID token together with a new access token and a refresh token.
   *
   * @returns ID token reissued successfully
   *
   * @throws {@link TokenEndpoint.IdtokenReissueApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  idtokenReissueApi(
    request: TokenEndpoint.IdtokenReissueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<IdtokenReissueResponse, TokenEndpoint.IdtokenReissueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/idtoken/reissue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => idtokenReissueRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: idtokenReissueResponseSchema },
        errorFactory: TokenEndpoint.IdtokenReissueApiError,
      },
      options,
    );
  }
}

export namespace TokenEndpoint {
  export type AuthTokenApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * OAuth 2.0 token request parameters which are the request parameters that the OAuth 2.0 token
     * endpoint of the authorization server implementation received from the client application.
     *
     * The value of parameters is the entire entity body (which is formatted in
     * `application/x-www-form-urlencoded`) of the request from the client application.
     */
    parameters: string;
    /**
     * The client ID extracted from `Authorization` header of the token request from the client
     * application.
     *
     * If the token endpoint of the authorization server implementation supports basic
     * authentication as a means of client authentication, and the request from the client
     * application contained its client ID in `Authorization` header, the value should be extracted
     * and set to this parameter.
     */
    clientId?: string;
    /**
     * The client secret extracted from `Authorization` header of the token request from the client
     * application.
     *
     * If the token endpoint of the authorization server implementation supports basic
     * authentication as a means of client authentication, and the request from the client
     * application contained its client secret in `Authorization` header, the value should be
     * extracted and set to this parameter.
     */
    clientSecret?: string;
    /** The client certificate from the MTLS of the token request from the client application. */
    clientCertificate?: string;
    /**
     * The certificate path presented by the client during client authentication. These certificates
     * are strings in PEM format.
     */
    clientCertificatePath?: string[];
    /**
     * Extra properties to associate with an access token. See [Extra
     * Properties](https://www.authlete.com/developers/definitive_guide/extra_properties/) for
     * details.
     */
    properties?: Property[];
    /**
     * `DPoP` header presented by the client during the request to the token endpoint.
     *
     * The header contains a signed JWT which includes the public key that is paired with the
     * private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
     * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
     * details.
     */
    dpop?: string;
    /**
     * HTTP method of the token request. This field is used to validate the `DPoP` header.
     *
     * In normal cases, the value is `POST`. When this parameter is omitted, `POST` is used as the
     * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
     * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     */
    htm?: string;
    /**
     * URL of the token endpoint. This field is used to validate the `DPoP` header.
     *
     * If this parameter is omitted, the `tokenEndpoint` property of the Service is used as the
     * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
     * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     */
    htu?: string;
    /**
     * The representation of an access token that may be issued as a result of the Authlete API
     * call.
     */
    accessToken?: string;
    /**
     * Additional claims that are added to the payload part of the JWT access token.
     *
     * Effective only in the client_credentials grant flow (and the Native SSO branch of Token
     * Exchange). For other grant flows, set additional JWT claims via the corresponding API:
     * /auth/authorization/issue (authorization_code), /auth/backchannel/authentication/complete
     * (CIBA), /auth/device/complete (device_code). The parameter is silently ignored when sent with
     * other grants.
     */
    jwtAtClaims?: string;
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
     * The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even
     * if the service's `dpopNonceRequired` property is `false`, calling the `/auth/token` API with
     * this `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the
     * DPoP proof JWT includes the expected `nonce` value.
     */
    dpopNonceRequired?: boolean;
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

  export class AuthTokenApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenFailApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket issued from Authlete `/auth/token` API. */
    ticket: string;
    /** The reason of the failure of the token request. */
    reason: Reason1;
  };

  export class AuthTokenFailApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenFailApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthTokenIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The ticket issued from Authlete `/auth/token` API. */
    ticket: string;
    /** The subject (= unique identifier) of the authenticated user. */
    subject: string;
    /**
     * Extra properties to associate with a newly created access token. Note that properties
     * parameter is accepted only when `Content-Type` of the request is `application/json`, so don't
     * use `application/x-www-form-urlencoded` if you want to specify properties.
     */
    properties?: Property[];
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
  };

  export class AuthTokenIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthTokenIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type IdtokenReissueApiRequest = {
    /** A service ID. */
    serviceId: string;
    body?: IdtokenReissueRequest;
  };

  export class IdtokenReissueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdtokenReissueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
