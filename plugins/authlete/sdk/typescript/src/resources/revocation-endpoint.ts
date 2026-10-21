import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { resultSchema, type Result } from "../models/result.js";
import { revocationResponseSchema, type RevocationResponse } from "../models/revocation-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoint for implementing OAuth 2.0 Revocation Endpoint.
 */
export class RevocationEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Revocation Request
   *
   * @remarks
   * This API revokes access tokens and refresh tokens.
   *
   * @returns Token revoked successfully
   *
   * @throws {@link RevocationEndpoint.AuthRevocationApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authRevocationApi(
    request: RevocationEndpoint.AuthRevocationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<RevocationResponse, RevocationEndpoint.AuthRevocationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/auth/revocation"),
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
          ],
        },
      },
      {
        success: { kind: "json", schema: revocationResponseSchema },
        errorFactory: RevocationEndpoint.AuthRevocationApiError,
      },
      options,
    );
  }
}

export namespace RevocationEndpoint {
  export type AuthRevocationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * OAuth 2.0 token revocation request parameters which are the request parameters that the OAuth
     * 2.0 token revocation endpoint ([RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009)) of
     * the authorization server implementation received from the client application.
     *
     * The value of parameters is the entire entity body (which is formatted in
     * `application/x-www-form-urlencoded`) of the request from the client application.
     */
    parameters: string;
    /**
     * The client ID extracted from `Authorization` header of the revocation request from the client
     * application.
     *
     * If the revocation endpoint of the authorization server implementation supports Basic
     * Authentication as a means of client authentication, and the request from the client
     * application contains its client ID in `Authorization` header, the value should be extracted
     * and set to this parameter.
     */
    clientId?: string;
    /**
     * The client secret extracted from `Authorization` header of the revocation request from the
     * client application.
     *
     * If the revocation endpoint of the authorization server implementation supports basic
     * authentication as a means of client authentication, and the request from the client
     * application contained its client secret in `Authorization` header, the value should be
     * extracted and set to this parameter.
     */
    clientSecret?: string;
    /**
     * The client certificate used in the TLS connection between the client application and the
     * revocation endpoint.
     */
    clientCertificate?: string;
    /** The certificate path presented by the client during client authentication. */
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
  };

  export class AuthRevocationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthRevocationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
