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
  deviceAuthorizationResponseSchema,
  type DeviceAuthorizationResponse,
} from "../models/device-authorization-response.js";
import {
  deviceCompleteResponseSchema,
  type DeviceCompleteResponse,
} from "../models/device-complete-response.js";
import {
  deviceVerificationResponseSchema,
  type DeviceVerificationResponse,
} from "../models/device-verification-response.js";
import { propertySchema, type Property } from "../models/property.js";
import { resultSchema, type Result } from "../models/result.js";
import { result1Schema, type Result1 } from "../models/result1.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Device Flow
 */
export class DeviceFlow {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Device Authorization Request
   *
   * @remarks
   * This API parses request parameters of a [device authorization
   * request](https://datatracker.ietf.org/doc/html/rfc8628#section-3.1) and returns necessary data
   * for the authorization server implementation to process the device authorization request
   * further.
   *
   * @throws {@link DeviceFlow.DeviceAuthorizationApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceAuthorizationApi(
    request: DeviceFlow.DeviceAuthorizationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceAuthorizationResponse, DeviceFlow.DeviceAuthorizationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/device/authorization"),
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
        success: { kind: "json", schema: deviceAuthorizationResponseSchema },
        errorFactory: DeviceFlow.DeviceAuthorizationApiError,
      },
      options,
    );
  }

  /**
   * Complete Device Authorization
   *
   * @remarks
   * This API returns information about what action the authorization server should take after it
   * receives the result of end-user's decision about whether the end-user has approved or rejected
   * a client application's request.
   *
   * @throws {@link DeviceFlow.DeviceCompleteApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceCompleteApi(
    request: DeviceFlow.DeviceCompleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceCompleteResponse, DeviceFlow.DeviceCompleteApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/device/complete"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "userCode", value: request.userCode, schema: s.string() },
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
            { name: "errorDescription", value: request.errorDescription, schema: s.optional(s.string()) },
            { name: "errorUri", value: request.errorUri, schema: s.optional(s.string()) },
            { name: "idtHeaderParams", value: request.idtHeaderParams, schema: s.optional(s.string()) },
            {
              name: "consentedClaims",
              value: request.consentedClaims,
              schema: s.optional(s.array(s.string())),
            },
            { name: "jwtAtClaims", value: request.jwtAtClaims, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: deviceCompleteResponseSchema },
        errorFactory: DeviceFlow.DeviceCompleteApiError,
      },
      options,
    );
  }

  /**
   * Process Device Verification Request
   *
   * @remarks
   * The API returns information associated with a user code.
   *
   * @returns Device verification completed successfully
   *
   * @throws {@link DeviceFlow.DeviceVerificationApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceVerificationApi(
    request: DeviceFlow.DeviceVerificationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceVerificationResponse, DeviceFlow.DeviceVerificationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/device/verification"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "userCode", value: request.userCode, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: deviceVerificationResponseSchema },
        errorFactory: DeviceFlow.DeviceVerificationApiError,
      },
      options,
    );
  }
}

export namespace DeviceFlow {
  export type DeviceAuthorizationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * Parameters of a device authorization request which are the request parameters that the device
     * authorization endpoint of the authorization server implementation received from the client
     * application.
     *
     * The value of `parameters` is the entire entity body (which is formatted in
     * `application/x-www-form-urlencoded`) of the request from the client application.
     */
    parameters: string;
    /**
     * The client ID extracted from Authorization header of the device authorization request from
     * the client application.
     *
     * If the device authorization endpoint of the authorization server implementation supports
     * Basic `Authentication` as a means of client authentication, and the request from the client
     * application contained its client ID in `Authorization` header, the value should be extracted
     * and set to this parameter.
     */
    clientId?: string;
    /**
     * The client secret extracted from `Authorization` header of the device authorization request
     * from the client application.
     *
     * If the device authorization endpoint of the authorization server implementation supports
     * Basic Authentication as a means of client authentication, and the request from the client
     * application contained its client secret in `Authorization` header, the value should be
     * extracted and set to this parameter.
     */
    clientSecret?: string;
    /**
     * The client certificate used in the TLS connection between the client application and the
     * device authorization endpoint of the authorization server.
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

  export class DeviceAuthorizationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeviceAuthorizationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type DeviceCompleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A user code. */
    userCode: string;
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
     * Scopes to replace the scopes specified in the original device authorization request with.
     * When nothing is specified for this parameter, replacement is not performed.
     */
    scopes?: string[];
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
    /** JSON that represents additional JWS header parameters for ID tokens. */
    idtHeaderParams?: string;
    /** the claims that the user has consented for the client application to know. */
    consentedClaims?: string[];
    /** Additional claims that are added to the payload part of the JWT access token. */
    jwtAtClaims?: string;
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

  export class DeviceCompleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeviceCompleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type DeviceVerificationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A user code. */
    userCode: string;
  };

  export class DeviceVerificationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeviceVerificationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
