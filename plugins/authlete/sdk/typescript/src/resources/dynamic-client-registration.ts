import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiClientRegistrationDeleteRequestSchema,
  type ApiClientRegistrationDeleteRequest,
} from "../models/api-client-registration-delete-request.js";
import {
  apiClientRegistrationGetRequestSchema,
  type ApiClientRegistrationGetRequest,
} from "../models/api-client-registration-get-request.js";
import {
  apiClientRegistrationRequestSchema,
  type ApiClientRegistrationRequest,
} from "../models/api-client-registration-request.js";
import {
  apiClientRegistrationUpdateRequestSchema,
  type ApiClientRegistrationUpdateRequest,
} from "../models/api-client-registration-update-request.js";
import {
  clientRegistrationResponseSchema,
  type ClientRegistrationResponse,
} from "../models/client-registration-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for implementing OAuth 2.0 Dynamic Client Registration.
 */
export class DynamicClientRegistration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Register Client
   *
   * @remarks
   * Register a client. This API is supposed to be used to implement a client registration endpoint
   * that complies with [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591) (OAuth 2.0 Dynamic
   * Client Registration Protocol).
   *
   * @returns Client registration completed successfully
   *
   * @throws {@link DynamicClientRegistration.ClientRegistrationApiError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientRegistrationApi(
    request: DynamicClientRegistration.ClientRegistrationApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/registration"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiClientRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: DynamicClientRegistration.ClientRegistrationApiError,
      },
      options,
    );
  }

  /**
   * Delete Client
   *
   * @remarks
   * Delete a dynamically registered client. This API is supposed to be used to implement a client
   * registration management endpoint that complies with [RFC
   * 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration
   * Management).
   *
   * @throws {@link DynamicClientRegistration.ClientRegistrationDeleteApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientRegistrationDeleteApi(
    request: DynamicClientRegistration.ClientRegistrationDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/registration/delete"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiClientRegistrationDeleteRequestSchema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: DynamicClientRegistration.ClientRegistrationDeleteApiError,
      },
      options,
    );
  }

  /**
   * Get Client
   *
   * @remarks
   * Get a dynamically registered client. This API is supposed to be used to implement a client
   * registration management endpoint that complies with [RFC
   * 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration
   * Management).
   *
   * @throws {@link DynamicClientRegistration.ClientRegistrationGetApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientRegistrationGetApi(
    request: DynamicClientRegistration.ClientRegistrationGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationGetApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/registration/get"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiClientRegistrationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: DynamicClientRegistration.ClientRegistrationGetApiError,
      },
      options,
    );
  }

  /**
   * Update Client
   *
   * @remarks
   * Update a dynamically registered client. This API is supposed to be used to implement a client
   * registration management endpoint that complies with [RFC
   * 7592](https://datatracker.ietf.org/doc/html/rfc7592) (OAuth 2.0 Dynamic Registration
   * Management).
   *
   * @throws {@link DynamicClientRegistration.ClientRegistrationUpdateApiError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clientRegistrationUpdateApi(
    request: DynamicClientRegistration.ClientRegistrationUpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationUpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/client/registration/update"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiClientRegistrationUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: DynamicClientRegistration.ClientRegistrationUpdateApiError,
      },
      options,
    );
  }
}

export namespace DynamicClientRegistration {
  export type ClientRegistrationApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: ApiClientRegistrationRequest;
  };

  export class ClientRegistrationApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientRegistrationApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientRegistrationDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: ApiClientRegistrationDeleteRequest;
  };

  export class ClientRegistrationDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientRegistrationDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientRegistrationGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: ApiClientRegistrationGetRequest;
  };

  export class ClientRegistrationGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientRegistrationGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type ClientRegistrationUpdateApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: ApiClientRegistrationUpdateRequest;
  };

  export class ClientRegistrationUpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClientRegistrationUpdateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
