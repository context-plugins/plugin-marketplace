import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { periodSchema, type Period } from "../models/period.js";
import { usageResponseInternalSchema, type UsageResponse } from "../models/usage-response.js";
import type { Servers } from "../servers.js";

export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get API key usage statistics
   *
   * @remarks
   * Return the remaining credit balance for the authenticated account. Use it to check headroom
   * before starting an expensive job such as a deepcrawl, or to confirm an API key works. Free to
   * call.
   *
   * @returns Successful response
   *
   * @throws {@link Account.UsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link S1Error} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  usage(
    request: Account.UsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UsageResponse, Account.UsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "period", value: request.period, schema: s.optional(s.lazy(() => periodSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageResponseInternalSchema },
        errorFactory: Account.UsageError,
      },
      options,
    );
  }
}

export namespace Account {
  export type UsageRequest = {
    period?: Period;
  };

  export class UsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsageError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
