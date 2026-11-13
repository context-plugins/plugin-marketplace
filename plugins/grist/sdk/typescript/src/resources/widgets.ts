import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { widgetsResponseSchema, type WidgetsResponse } from "../models/widgets-response.js";
import type { Servers } from "../servers.js";

export class Widgets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List available custom widgets
   *
   * @remarks
   * Get all widget definitions from the configured widget repository. Custom widgets extend Grist's
   * functionality with specialized views.
   *
   * @returns List of widgets
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWidgets(options?: RequestOptions): ApiPromise<WidgetsResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/widgets"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => widgetsResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
