import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiFederationConfigurationRequestSchema,
  type ApiFederationConfigurationRequest,
} from "../models/api-federation-configuration-request.js";
import {
  federationConfigurationResponseSchema,
  type FederationConfigurationResponse,
} from "../models/federation-configuration-response.js";
import {
  federationRegistrationResponseSchema,
  type FederationRegistrationResponse,
} from "../models/federation-registration-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OpenID Federation using Authlete.
 */
export class FederationEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Entity Configuration Request
   *
   * @remarks
   * This API gathers the federation configuration about a service. The authorization server
   * implementation should retrieve the value of the `action` response parameter from the API
   * response and take the following steps according to the value.
   *
   * @returns Federation configuration retrieved successfully
   *
   * @throws {@link FederationEndpoint.FederationConfigurationApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  federationConfigurationApi(
    request: FederationEndpoint.FederationConfigurationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<FederationConfigurationResponse, FederationEndpoint.FederationConfigurationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/federation/configuration"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiFederationConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: federationConfigurationResponseSchema },
        errorFactory: FederationEndpoint.FederationConfigurationApiError,
      },
      options,
    );
  }

  /**
   * Process Federation Registration Request
   *
   * @remarks
   * The Authlete API is for implementations of the **federation registration endpoint** that
   * accepts "explicit client registration". Its details are defined in [OpenID Connect Federation
   * 1.0](https://openid.net/specs/openid-connect-federation-1_0.html). The endpoint accepts `POST`
   * requests whose `Content-Type` is either of the following.
   * 1. `application/entity-statement+jwt`- `application/trust-chain+json` When the `Content-Type`
   *    of a request is `application/entity-statement+jwt`, the content of the request is the entity
   *    configuration of a relying party that is to be registered. In this case, the implementation
   *    of the federation registration endpoint should call Authlete's `/federation/registration`
   *    API with the entity configuration set to the `entityConfiguration` request parameter. On the
   *    other hand, when the `Content-Type` of a request is `application/trust-chain+json`, the
   *    content of the request is a JSON array that contains entity statements in JWT format. The
   *    sequence of the entity statements composes the trust chain of a relying party that is to be
   *    registered. In this case, the implementation of the federation registration endpoint should
   *    call Authlete's `/federation/registration` API with the trust chain set to the `trustChain`
   *    request parameter.
   *
   * @throws {@link FederationEndpoint.FederationRegistrationApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  federationRegistrationApi(
    request: FederationEndpoint.FederationRegistrationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<FederationRegistrationResponse, FederationEndpoint.FederationRegistrationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/federation/registration"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "entityConfiguration",
              value: request.entityConfiguration,
              schema: s.optional(s.string()),
            },
            { name: "trustChain", value: request.trustChain, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: federationRegistrationResponseSchema },
        errorFactory: FederationEndpoint.FederationRegistrationApiError,
      },
      options,
    );
  }
}

export namespace FederationEndpoint {
  export type FederationConfigurationApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: ApiFederationConfigurationRequest;
  };

  export class FederationConfigurationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<FederationConfigurationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type FederationRegistrationApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The entity configuration of a relying party. */
    entityConfiguration?: string;
    /** The trust chain of a relying party. */
    trustChain?: string;
  };

  export class FederationRegistrationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<FederationRegistrationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
