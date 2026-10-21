import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  pushedAuthorizationResponseSchema,
  type PushedAuthorizationResponse,
} from "../models/pushed-authorization-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Pushed Authorization Requests (PAR).
 */
export class PushedAuthorizationEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Pushed Authorization Request
   *
   * @remarks
   * This API creates a pushed request authorization. It authenticates the client and creates a
   * authorization_uri to be returned by the authorization server.
   *
   * @throws {@link PushedAuthorizationEndpoint.PushedAuthReqApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pushedAuthReqApi(
    request: PushedAuthorizationEndpoint.PushedAuthReqApiRequest,
    options?: RequestOptions,
  ): ApiPromise<PushedAuthorizationResponse, PushedAuthorizationEndpoint.PushedAuthReqApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/pushed_auth_req"),
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
            { name: "dpop", value: request.dpop, schema: s.optional(s.string()) },
            { name: "htm", value: request.htm, schema: s.optional(s.string()) },
            { name: "htu", value: request.htu, schema: s.optional(s.string()) },
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
            { name: "dpopNonceRequired", value: request.dpopNonceRequired, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: pushedAuthorizationResponseSchema },
        errorFactory: PushedAuthorizationEndpoint.PushedAuthReqApiError,
      },
      options,
    );
  }
}

export namespace PushedAuthorizationEndpoint {
  export type PushedAuthReqApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The pushed authorization request body received from the client application.
     *
     * The value of parameters is the entire entity body (which is formatted in
     * `application/x-www-form-urlencoded`) of the request from the client application.
     */
    parameters: string;
    /**
     * The client ID extracted from `Authorization` header of the pushed request from the client
     * application.
     */
    clientId?: string;
    /**
     * The client secret extracted from `Authorization` header of the pushed authorization request
     * from the client application.
     */
    clientSecret?: string;
    /**
     * The client certificate from the MTLS connection to pushed authorization endpoint from the
     * client application.
     */
    clientCertificate?: string;
    /**
     * The certificate path presented by the client during client authentication. These certificates
     * are strings in PEM format.
     */
    clientCertificatePath?: string[];
    /** DPoP Header */
    dpop?: string;
    /** HTTP Method (for DPoP validation). */
    htm?: string;
    /** HTTP URL base (for DPoP validation). */
    htu?: string;
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
     * The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even
     * if the service's `dpopNonceRequired` property is `false`, calling the `/pushed_auth_req` API
     * with this `dpopNonceRequired` parameter `true` will force the Authlete API to check whether
     * the DPoP proof JWT includes the expected `nonce` value.
     */
    dpopNonceRequired?: boolean;
  };

  export class PushedAuthReqApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<PushedAuthReqApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
