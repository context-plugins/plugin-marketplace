import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { introspectionResponseSchema, type IntrospectionResponse } from "../models/introspection-response.js";
import { pairSchema, type Pair } from "../models/pair.js";
import { resultSchema, type Result } from "../models/result.js";
import {
  standardIntrospectionResponseSchema,
  type StandardIntrospectionResponse,
} from "../models/standard-introspection-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Introspection Endpoint.
 */
export class IntrospectionEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Introspection Request
   *
   * @remarks
   * This API gathers information about an access token.
   *
   * @throws {@link IntrospectionEndpoint.AuthIntrospectionApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authIntrospectionApi(
    request: IntrospectionEndpoint.AuthIntrospectionApiRequest,
    options?: RequestOptions,
  ): ApiPromise<IntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/introspection"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "scopes", value: request.scopes, schema: s.optional(s.array(s.string())) },
            { name: "subject", value: request.subject, schema: s.optional(s.string()) },
            { name: "clientCertificate", value: request.clientCertificate, schema: s.optional(s.string()) },
            { name: "dpop", value: request.dpop, schema: s.optional(s.string()) },
            { name: "htm", value: request.htm, schema: s.optional(s.string()) },
            { name: "htu", value: request.htu, schema: s.optional(s.string()) },
            { name: "resources", value: request.resources, schema: s.optional(s.array(s.string())) },
            { name: "acrValues", value: request.acrValues, schema: s.optional(s.array(s.string())) },
            { name: "maxAge", value: request.maxAge, schema: s.optional(s.int()) },
            {
              name: "requiredComponents",
              value: request.requiredComponents,
              schema: s.optional(s.array(s.string())),
            },
            { name: "uri", value: request.uri, schema: s.optional(s.string()) },
            { name: "message", value: request.message, schema: s.optional(s.string()) },
            {
              name: "headers",
              value: request.headers,
              schema: s.optional(s.array(s.lazy(() => pairSchema))),
            },
            { name: "targetUri", value: request.targetUri, schema: s.optional(s.string()) },
            { name: "dpopNonceRequired", value: request.dpopNonceRequired, schema: s.optional(s.boolean()) },
            {
              name: "requestBodyContained",
              value: request.requestBodyContained,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: introspectionResponseSchema },
        errorFactory: IntrospectionEndpoint.AuthIntrospectionApiError,
      },
      options,
    );
  }

  /**
   * Process OAuth 2.0 Introspection Request
   *
   * @remarks
   * This API exists to help your authorization server provide its own introspection API which
   * complies with [RFC 7662](https://tools.ietf.org/html/rfc7662) (OAuth 2.0 Token Introspection).
   *
   * @returns Token introspection completed successfully
   *
   * @throws {@link IntrospectionEndpoint.AuthIntrospectionStandardApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authIntrospectionStandardApi(
    request: IntrospectionEndpoint.AuthIntrospectionStandardApiRequest,
    options?: RequestOptions,
  ): ApiPromise<StandardIntrospectionResponse, IntrospectionEndpoint.AuthIntrospectionStandardApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/introspection/standard"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "parameters", value: request.parameters, schema: s.string() },
            {
              name: "withHiddenProperties",
              value: request.withHiddenProperties,
              schema: s.optional(s.boolean()),
            },
            { name: "rsUri", value: request.rsUri, schema: s.optional(s.string()) },
            { name: "httpAcceptHeader", value: request.httpAcceptHeader, schema: s.optional(s.string()) },
            {
              name: "introspectionSignAlg",
              value: request.introspectionSignAlg,
              schema: s.optional(s.string()),
            },
            {
              name: "introspectionEncryptionAlg",
              value: request.introspectionEncryptionAlg,
              schema: s.optional(s.string()),
            },
            {
              name: "introspectionEncryptionEnc",
              value: request.introspectionEncryptionEnc,
              schema: s.optional(s.string()),
            },
            { name: "sharedKeyForSign", value: request.sharedKeyForSign, schema: s.optional(s.string()) },
            {
              name: "sharedKeyForEncryption",
              value: request.sharedKeyForEncryption,
              schema: s.optional(s.string()),
            },
            {
              name: "publicKeyForEncryption",
              value: request.publicKeyForEncryption,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: standardIntrospectionResponseSchema },
        errorFactory: IntrospectionEndpoint.AuthIntrospectionStandardApiError,
      },
      options,
    );
  }
}

export namespace IntrospectionEndpoint {
  export type AuthIntrospectionApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** An access token to introspect. */
    token: string;
    /**
     * A string array listing names of scopes which the caller (= a protected resource endpoint of
     * the service) requires. When the content type of the request from the service is
     * `application/x-www-form-urlencoded`, the format of `scopes` is a space-separated list of
     * scope names.
     *
     * If this parameter is a non-empty array and if it contains a scope which is not covered by the
     * access token,`action=FORBIDDEN` with `error=insufficient_scope` is returned from Authlete.
     */
    scopes?: string[];
    /**
     * A subject (= a user account managed by the service) whom the caller (= a protected resource
     * endpoint of the service) requires.
     *
     * If this parameter is not `null` and if the value does not match the subject who is associated
     * with the access token, `action=FORBIDDEN` with `error=invalid_request` is returned from
     * Authlete.
     */
    subject?: string;
    /**
     * Client certificate in PEM format, used to validate binding against access tokens using the
     * TLS client certificate confirmation method.
     */
    clientCertificate?: string;
    /**
     * `DPoP` header presented by the client during the request to the resource server.
     *
     * The header contains a signed JWT which includes the public key that is paired with the
     * private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
     * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
     * details.
     */
    dpop?: string;
    /**
     * HTTP method of the request from the client to the protected resource endpoint. This field is
     * used to validate the `DPoP` header.
     *
     * See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
     * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     */
    htm?: string;
    /**
     * URL of the protected resource endpoint. This field is used to validate the `DPoP` header.
     *
     * See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
     * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     */
    htu?: string;
    /**
     * The resources specified by the `resource` request parameters in the token request. See
     * "Resource Indicators for OAuth 2.0" for details.
     */
    resources?: string[];
    /**
     * Authentication Context Class Reference values one of which the user authentication performed
     * during the course of issuing the access token must satisfy.
     */
    acrValues?: string[];
    /**
     * The maximum authentication age which is the maximum allowable elapsed time since the user
     * authentication was performed during the course of issuing the access token.
     */
    maxAge?: number;
    /**
     * HTTP Message Components required to be in the signature. If absent, defaults to [ "@method",
     * "@target-uri", "authorization" ].
     */
    requiredComponents?: string[];
    /** The full URL of the userinfo endpoint. */
    uri?: string;
    /** The HTTP message body of the request, if present. */
    message?: string;
    /**
     * HTTP headers to be included in processing the signature. If this is a signed request, this
     * must include the Signature and Signature-Input headers, as well as any additional headers
     * covered by the signature.
     */
    headers?: Pair[];
    /** The target URI of the resource request, including the query part, if any. */
    targetUri?: string;
    /**
     * The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce`
     * value.
     *
     * If this request parameter is set to `true` or if the service's `dpopNonceRequired` property
     * is set to `true`, the `/auth/introspection` API checks if the DPoP proof JWT includes the
     * expected `nonce` value. In this case, the response from the `/auth/introspection` API will
     * include the `dpopNonce` response parameter, which should be used as the value of the
     * DPoP-Nonce HTTP header.
     */
    dpopNonceRequired?: boolean;
    /**
     * The flag indicating whether the resource request contains a request body.
     *
     * When the resource request must comply with the HTTP message signing requirements defined in
     * the FAPI 2.0 Message Signing specification, the `"content-digest"` component identifier must
     * be included in the signature base of the HTTP message signature (see [RFC 9421 HTTP Message
     * Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)) if the resource request contains a
     * request body.
     *
     * When this `requestBodyContained` parameter is set to `true`, Authlete checks whether
     * `"content-digest"` is included in the signature base, if the FAPI profile applies to the
     * resource request.
     */
    requestBodyContained?: boolean;
  };

  export class AuthIntrospectionApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthIntrospectionApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthIntrospectionStandardApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * Request parameters which comply with the introspection request defined in "[2.1.
     * Introspection Request](https://datatracker.ietf.org/doc/html/rfc7662#section-2.1)" in RFC
     * 7662.
     *
     * The implementation of the introspection endpoint of your authorization server will receive an
     * HTTP POST [[RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231)] request with parameters
     * in the `application/x-www-form-urlencoded` format. It is the entity body of the request that
     * Authlete's `/api/auth/introspection/standard` API expects as the value of `parameters`.
     */
    parameters: string;
    /**
     * Flag indicating whether to include hidden properties in the output.
     *
     * Authlete has a mechanism whereby to associate arbitrary key-value pairs with an access token.
     * Each key-value pair has a hidden attribute. By default, key-value pairs whose hidden
     * attribute is set to `true` are not embedded in the standard introspection output.
     *
     * If the `withHiddenProperties` request parameter is given and its value is `true`,
     * `/api/auth/introspection/standard API includes all the associated key-value pairs into the
     * output regardless of the value of the hidden attribute.
     */
    withHiddenProperties?: boolean;
    /**
     * The URI of the resource server making the introspection request.
     *
     * If the `rsUri` request parameter is given and the token has audience values, Authlete checks
     * if the value of the `rsUri` request parameter is contained in the audience values. If not
     * contained, Authlete generates an introspection response with the `active` property set to
     * `false`.
     *
     * The `rsUri` request parameter is required when the resource server requests a JWT
     * introspection response, i.e., when the value of the `httpAcceptHeader` request parameter is
     * set to `"application/token-introspection+jwt"`.
     */
    rsUri?: string;
    /**
     * The value of the `HTTP Accept` header in the introspection request.
     *
     * If the value of the `httpAcceptHeader` request parameter is
     * `"application/token-introspection+jwt"`, Authlete generates a JWT introspection response. See
     * "[4. Requesting a JWT Response](https://www.rfc-editor.org/rfc/rfc9701.html#section-4)" of
     * "[RFC 9701: JWT Response for OAuth Token
     * Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)" for more details.
     */
    httpAcceptHeader?: string;
    /**
     * The JWS `alg` algorithm for signing the introspection response. This parameter corresponds to
     * `introspection_signed_response_alg` defined in "[6. Client
     * Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response
     * for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".
     *
     * The default value is `RS256`.
     */
    introspectionSignAlg?: string;
    /**
     * The JWE `alg` algorithm for encrypting the introspection response. This parameter corresponds
     * to `introspection_encrypted_response_alg` defined in "[6. Client
     * Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response
     * for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".
     *
     * If the `introspectionEncryptionAlg` request parameter is specified, Authlete generates a JWT
     * introspection response encrypted with the algorithm by this property and the algorithm
     * specified by the `introspectionEncryptionEnc` request parameter.
     */
    introspectionEncryptionAlg?: string;
    /**
     * The JWE `enc` algorithm for encrypting the introspection response. This parameter corresponds
     * to `introspection_encrypted_response_enc` defined in "[6. Client
     * Metadata](https://www.rfc-editor.org/rfc/rfc9701.html#section-6)" of "[RFC 9701: JWT Response
     * for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html)".
     *
     * The default value is `A128CBC_HS256`.
     */
    introspectionEncryptionEnc?: string;
    /**
     * The shared key for signing the introspection response with a symmetric algorithm.
     *
     * The `sharedKeyForSign` request parameter is required when the introspection response is
     * requested to be signed with a symmetric algorithm.
     */
    sharedKeyForSign?: string;
    /**
     * The shared key for encrypting the introspection response with a symmetric algorithm.
     *
     * The `sharedKeyForEncryption` request parameter is required when the introspection response is
     * requested to be encrypted with a symmetric algorithm.
     */
    sharedKeyForEncryption?: string;
    /**
     * The public key for signing the introspection response with an asymmetric algorithm.
     *
     * The `publicKeyForEncryption` request parameter is required when the introspection response is
     * requested to be encrypted with an asymmetric algorithm.
     */
    publicKeyForEncryption?: string;
  };

  export class AuthIntrospectionStandardApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthIntrospectionStandardApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
