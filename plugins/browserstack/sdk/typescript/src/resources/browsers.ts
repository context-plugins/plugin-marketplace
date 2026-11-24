import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { browserSchema, type Browser } from "../models/browser.js";
import type { Servers } from "../servers.js";

/**
 * Operations describing supported browsers and devices.
 */
export class Browsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get supported browsers and devices
   *
   * @remarks
   * Returns the list of operating systems, browsers, and real mobile devices supported by Automate.
   *
   * @returns List of supported browser and device configurations
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBrowsers(options?: RequestOptions): ApiPromise<Browser[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/browsers.json"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => browserSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
