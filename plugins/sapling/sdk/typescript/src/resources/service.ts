import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import {
  apiV1LivenessResponseSchema,
  type ApiV1LivenessResponse,
} from "../models/api-v1-liveness-response.js";
import { apiV1VersionResponseSchema, type ApiV1VersionResponse } from "../models/api-v1-version-response.js";
import type { Servers } from "../servers.js";

/**
 * Health and version probes (no API key).
 */
export class Service {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Liveness probe
   *
   * @remarks
   * Answers 200 while the API process is up.
   *
   * @returns Alive.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingLiveness(options?: RequestOptions): ApiPromise<ApiV1LivenessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/liveness"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1LivenessResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Server version
   *
   * @remarks
   * Release and build identifiers of the serving deployment.
   *
   * @returns Version.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingVersion(options?: RequestOptions): ApiPromise<ApiV1VersionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/version"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1VersionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
