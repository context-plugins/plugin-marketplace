import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import type { Servers } from "../servers.js";

/**
 * Root API operations
 */
export class RootApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * root
   *
   * @remarks
   * Retrieve the API root entry point to discover available resources and endpoints based on your
   * OAuth access token permissions. Returns HAL+JSON with navigation links to accessible resources
   * including accounts, customers, events, and webhook subscriptions depending on token scope.
   * Essential for API exploration, dynamic resource discovery, and building adaptive client
   * applications that respond to available permissions.
   *
   * @returns successful operation
   *
   * @throws {@link RootApi.GetRootError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRoot(
    request: RootApi.GetRootRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RootApi.GetRootError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RootApi.GetRootError,
      },
      options,
    );
  }
}

export namespace RootApi {
  export type GetRootRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetRootError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetRootError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
