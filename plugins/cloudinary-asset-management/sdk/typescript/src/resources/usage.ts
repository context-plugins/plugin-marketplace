import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { usageResponseSchema, type UsageResponse } from "../models/usage-response.js";
import type { Servers } from "../servers.js";

/**
 * Gets usage details
 */
export class Usage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieves comprehensive usage metrics and account statistics
   *
   * @remarks
   * A report on the status of product environment usage, including storage, credits, bandwidth,
   * requests, number of resources, and add-on usage. No date parameter needed to get current usage
   * statistics.
   *
   * @returns Usage details retrieved successfully
   *
   * @throws {@link Usage.GetUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getUsage(
    request: Usage.GetUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageResponse, Usage.GetUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/usage"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [{ name: "date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageResponseSchema },
        errorFactory: Usage.GetUsageError,
      },
      options,
    );
  }
}

export namespace Usage {
  export type GetUsageRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The date for which to retrieve usage details (YYYY-MM-DD). If not specified, returns the
     * current usage.
     */
    date?: string;
  };

  export class GetUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
