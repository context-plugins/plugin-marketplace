import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { apiV1MetaResponseSchema, type ApiV1MetaResponse } from "../models/api-v1-meta-response.js";
import { problemDetailsSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

export class Meta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get API metadata
   *
   * @remarks
   * Returns API metadata including version, capabilities, supported fields, content types, and rate
   * limit policy.
   *
   * @returns API metadata retrieved
   *
   * @throws {@link Meta.GetApiV1MetaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link NordicFinancialNewsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Meta(options?: RequestOptions): ApiPromise<ApiV1MetaResponse, Meta.GetApiV1MetaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MetaResponseSchema },
        errorFactory: Meta.GetApiV1MetaError,
      },
      options,
    );
  }
}

export namespace Meta {
  export class GetApiV1MetaError extends ApiError {
    declare readonly payload: Declared<"problemDetails", ProblemDetails> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1MetaError> = [
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsSchema } },
    ];
  }
}
