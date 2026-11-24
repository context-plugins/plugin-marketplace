import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorEnvelopeSchema, type ErrorEnvelope } from "../models/error-envelope.js";
import { healthSchema, type Health } from "../models/health.js";
import { successEnvelopeInternalSchema, type SuccessEnvelope } from "../models/success-envelope.js";
import type { Servers } from "../servers.js";

/**
 * Service health and metadata
 */
export class System {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Health check
   *
   * @remarks
   * Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No
   * authentication required and no credits used.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV2Health(options?: RequestOptions): ApiPromise<Health, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Validate your key & check balance
   *
   * @remarks
   * Validates the API key and returns the account's remaining credit balance. Free - never billed.
   * Useful for programmatic balance checks and as a credential test in integrations.
   *
   * @returns Success
   *
   * @throws {@link System.GetApiV2MeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV2Me(options?: RequestOptions): ApiPromise<SuccessEnvelope, System.GetApiV2MeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/me"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: System.GetApiV2MeError,
      },
      options,
    );
  }

  /**
   * Health check
   *
   * @remarks
   * Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No
   * authentication required and no credits used.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  healthCheck(options?: RequestOptions): ApiPromise<Health, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/health"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Validate your key & check balance
   *
   * @remarks
   * Validates the API key and returns the account's remaining credit balance. Free - never billed.
   * Useful for programmatic balance checks and as a credential test in integrations.
   *
   * @returns Success
   *
   * @throws {@link System.MeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link TranscriptFetchError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  me(options?: RequestOptions): ApiPromise<SuccessEnvelope, System.MeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/me"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successEnvelopeInternalSchema },
        errorFactory: System.MeError,
      },
      options,
    );
  }
}

export namespace System {
  export class GetApiV2MeError extends ApiError {
    declare readonly payload: Declared<"errorEnvelope", ErrorEnvelope> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV2MeError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }

  export class MeError extends ApiError {
    declare readonly payload: Declared<"errorEnvelope", ErrorEnvelope> | Undeclared;

    static readonly errors: ErrorDecoders<MeError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeSchema } },
    ];
  }
}
