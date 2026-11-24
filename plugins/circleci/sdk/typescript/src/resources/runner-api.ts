import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { runnerResponseSchema, type RunnerResponse } from "../models/runner-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for listing and querying self-hosted runners and their status within a namespace or
 * resource class.
 */
export class RunnerApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List self-hosted runners
   *
   * @remarks
   * Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one
   * filter parameter must be provided to return results. Returns details including hostname, name,
   * connection timestamps, version, and resource class.
   *
   * @returns Successfully retrieved runners
   *
   * @throws {@link RunnerApi.ListRunnersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRunners(
    request: RunnerApi.ListRunnersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<RunnerResponse, RunnerApi.ListRunnersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runner"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "namespace", value: request.namespace, schema: s.optional(s.string()) },
          { name: "resource-class", value: request.resourceClass, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runnerResponseSchema },
        errorFactory: RunnerApi.ListRunnersError,
      },
      options,
    );
  }
}

export namespace RunnerApi {
  export type ListRunnersRequest = {
    /** The namespace to filter runners by. Cannot be used together with resource-class. */
    namespace?: string;
    /** The resource class to filter runners by. Cannot be used together with namespace. */
    resourceClass?: string;
  };

  export class ListRunnersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRunnersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
