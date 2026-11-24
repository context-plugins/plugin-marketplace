import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorCelestiaWebsiteContactApiSchema,
  type ErrorCelestiaWebsiteContactApi,
} from "../models/error-celestia-website-contact-api.js";
import { healthSchema, type Health } from "../models/health.js";
import type { Servers } from "../servers.js";

export class HealthApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Check website liveness
   *
   * @remarks
   * Confirms that the Next.js runtime can answer requests. Does not check external services. No
   * authentication required.
   *
   * @returns Runtime is accepting requests.
   *
   * @throws {@link HealthApi.GetWebsiteHealthError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CelestiaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebsiteHealth(options?: RequestOptions): ApiPromise<Health, HealthApi.GetWebsiteHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCelestiaWebsiteContactApi("/api/health/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: HealthApi.GetWebsiteHealthError,
      },
      options,
    );
  }

  /**
   * Check website liveness without a body
   *
   * @remarks
   * The same runtime liveness signal as GET, with an empty response body.
   *
   * @returns Runtime is accepting requests; no body.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CelestiaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  headWebsiteHealth(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "HEAD",
        urlTemplate: this.#servers.defaultCelestiaWebsiteContactApi("/api/health/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace HealthApi {
  export class GetWebsiteHealthError extends ApiError {
    declare readonly payload:
      | Declared<"errorCelestiaWebsiteContactApi", ErrorCelestiaWebsiteContactApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWebsiteHealthError> = [
      {
        on: 405,
        kind: "errorCelestiaWebsiteContactApi",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
    ];
  }
}
