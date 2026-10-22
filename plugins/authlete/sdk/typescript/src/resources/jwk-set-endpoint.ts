import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { resultSchema, type Result } from "../models/result.js";
import {
  serviceJwksGetResponseSchema,
  type ServiceJwksGetResponse,
} from "../models/service-jwks-get-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for to generate JSON Web Key Set (JWKS) for a service.
 */
export class JwkSetEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get JWK Set
   *
   * @remarks
   * This API gathers JWK Set information for a service so that its client applications can verify
   * signatures by the service and encrypt their requests to the service.
   *
   * This API is supposed to be called from within the implementation of the jwk set endpoint of the
   * service where the service that supports OpenID Connect must expose its JWK Set information so
   * that client applications can verify signatures by the service and encrypt their requests to the
   * service. The URI of the endpoint can be found as the value of `jwks_uri` in [OpenID Provider
   * Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) if the
   * service supports [OpenID Connect Discovery
   * 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html).
   *
   * @throws {@link JwkSetEndpoint.ServiceJwksGetApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serviceJwksGetApi(
    request: JwkSetEndpoint.ServiceJwksGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceJwksGetResponse, JwkSetEndpoint.ServiceJwksGetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/service/jwks/get"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [
          { name: "includePrivateKeys", value: request.includePrivateKeys, schema: s.optional(s.boolean()) },
          { name: "pretty", value: request.pretty, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceJwksGetResponseSchema },
        errorFactory: JwkSetEndpoint.ServiceJwksGetApiError,
      },
      options,
    );
  }
}

export namespace JwkSetEndpoint {
  export type ServiceJwksGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    /**
     * The boolean value that indicates whether the response should include the private keys
     * associated with the service or not. If `true`, the private keys are included in the response.
     * The default value is `false`.
     */
    includePrivateKeys?: boolean;
    /**
     * This boolean value indicates whether the JSON in the response should be formatted or not. If
     * `true`, the JSON in the response is pretty-formatted. The default value is `false`.
     */
    pretty?: boolean;
  };

  export class ServiceJwksGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServiceJwksGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
