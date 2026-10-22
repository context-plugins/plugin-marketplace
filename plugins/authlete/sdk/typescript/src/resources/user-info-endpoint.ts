import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { pairSchema, type Pair } from "../models/pair.js";
import { resultSchema, type Result } from "../models/result.js";
import {
  userinfoIssueResponseSchema,
  type UserinfoIssueResponse,
} from "../models/userinfo-issue-response.js";
import { userinfoResponseSchema, type UserinfoResponse } from "../models/userinfo-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OpenID Connect UserInfo Endpoint.
 */
export class UserInfoEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process UserInfo Request
   *
   * @remarks
   * This API gathers information about a user.
   *
   * @returns User info retrieved successfully
   *
   * @throws {@link UserInfoEndpoint.AuthUserinfoApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authUserinfoApi(
    request: UserInfoEndpoint.AuthUserinfoApiRequest,
    options?: RequestOptions,
  ): ApiPromise<UserinfoResponse, UserInfoEndpoint.AuthUserinfoApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/userinfo"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "clientCertificate", value: request.clientCertificate, schema: s.optional(s.string()) },
            { name: "dpop", value: request.dpop, schema: s.optional(s.string()) },
            { name: "htm", value: request.htm, schema: s.optional(s.string()) },
            { name: "htu", value: request.htu, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: userinfoResponseSchema },
        errorFactory: UserInfoEndpoint.AuthUserinfoApiError,
      },
      options,
    );
  }

  /**
   * Issue UserInfo Response
   *
   * @remarks
   * This API generates an ID token.
   *
   * @returns User info issued successfully
   *
   * @throws {@link UserInfoEndpoint.AuthUserinfoIssueApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authUserinfoIssueApi(
    request: UserInfoEndpoint.AuthUserinfoIssueApiRequest,
    options?: RequestOptions,
  ): ApiPromise<UserinfoIssueResponse, UserInfoEndpoint.AuthUserinfoIssueApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/userinfo/issue"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "claims", value: request.claims, schema: s.optional(s.string()) },
            { name: "sub", value: request.sub, schema: s.optional(s.string()) },
            { name: "claimsForTx", value: request.claimsForTx, schema: s.optional(s.string()) },
            { name: "requestSignature", value: request.requestSignature, schema: s.optional(s.string()) },
            {
              name: "headers",
              value: request.headers,
              schema: s.optional(s.array(s.lazy(() => pairSchema))),
            },
            {
              name: "verifiedClaimsForTx",
              value: request.verifiedClaimsForTx,
              schema: s.optional(s.array(s.string())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: userinfoIssueResponseSchema },
        errorFactory: UserInfoEndpoint.AuthUserinfoIssueApiError,
      },
      options,
    );
  }
}

export namespace UserInfoEndpoint {
  export type AuthUserinfoApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** An access token. */
    token: string;
    /**
     * Client certificate used in the TLS connection established between the client application and
     * the userinfo endpoint.
     *
     * The value of this request parameter is referred to when the access token given to the
     * userinfo endpoint was bound to a client certificate when it was issued. See [OAuth 2.0 Mutual
     * TLS Client Authentication and Certificate-Bound Access Tokens]
     * (https://datatracker.ietf.org/doc/rfc8705/) for details about the specification of
     * certificate-bound access tokens.
     */
    clientCertificate?: string;
    /**
     * `DPoP` header presented by the client during the request to the user info endpoint.
     *
     * The header contains a signed JWT which includes the public key that is paired with the
     * private key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
     * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
     * details.
     */
    dpop?: string;
    /**
     * HTTP method of the user info request. This field is used to validate the DPoP header. In
     * normal cases, the value is either `GET` or `POST`.
     */
    htm?: string;
    /**
     * URL of the user info endpoint. This field is used to validate the DPoP header.
     *
     * If this parameter is omitted, the `userInfoEndpoint` property of the service is used as the
     * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
     * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
     */
    htu?: string;
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
    /** The target URI of the userinfo request, including the query part, if any. */
    targetUri?: string;
    /**
     * The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce`
     * value.
     *
     * If this request parameter is set to `true` or if the service's `dpopNonceRequired` property
     * is set to `true`, the `/auth/userinfo` API checks if the DPoP proof JWT includes the expected
     * `nonce` value. In this case, the response from the `/auth/userinfo` API will include the
     * `dpopNonce` response parameter, which should be used as the value of the DPoP-Nonce HTTP
     * header.
     */
    dpopNonceRequired?: boolean;
    /** The flag indicating whether the userinfo request contains a request body. */
    requestBodyContained?: boolean;
  };

  export class AuthUserinfoApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthUserinfoApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type AuthUserinfoIssueApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The access token that has been passed to the userinfo endpoint by the client application. In
     * other words, the access token which was contained in the userinfo request.
     */
    token: string;
    /**
     * Claims in JSON format. As for the format, see [OpenID Connect Core 1.0, 5.1. Standard
     * Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims).
     */
    claims?: string;
    /**
     * The value of the `sub` claim. If the value of this request parameter is not empty, it is used
     * as the value of the `sub` claim. Otherwise, the value of the subject associated with the
     * access token is used.
     */
    sub?: string;
    /** Claim key-value pairs that are used to compute transformed claims. */
    claimsForTx?: string;
    /** The Signature header value from the request. */
    requestSignature?: string;
    /**
     * HTTP headers to be included in processing the signature. If this is a signed request, this
     * must include the Signature and Signature-Input headers, as well as any additional headers
     * covered by the signature.
     */
    headers?: Pair[];
    /** Values of verified claims requested indirectly by "transformed claims". */
    verifiedClaimsForTx?: string[];
  };

  export class AuthUserinfoIssueApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthUserinfoIssueApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
