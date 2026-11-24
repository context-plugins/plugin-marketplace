import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { usageInternalSchema, type Usage } from "../models/usage.js";
import type { Servers } from "../servers.js";

/**
 * Your plan and this month's usage.
 */
export class UsageApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get usage
   *
   * @remarks
   * The workspace's plan and what it has used in the current calendar month (UTC). The same numbers
   * with a live key and a test key.
   *
   * @returns Usage this month.
   *
   * @throws {@link UsageApi.GetUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsage(options?: RequestOptions): ApiPromise<Usage, UsageApi.GetUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/usage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageInternalSchema },
        errorFactory: UsageApi.GetUsageError,
      },
      options,
    );
  }
}

export namespace UsageApi {
  export class GetUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
