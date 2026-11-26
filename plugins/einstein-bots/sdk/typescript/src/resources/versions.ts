import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { supportedVersionsSchema, type SupportedVersions } from "../models/supported-versions.js";
import type { Servers } from "../servers.js";

export class Versions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get API versions
   *
   * @remarks
   * Retrieve the list of supported Einstein Bots API versions.
   *
   * @returns Supported API versions
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link EinsteinBotsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiVersions(options?: RequestOptions): ApiPromise<SupportedVersions, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/versions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportedVersionsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
