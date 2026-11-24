import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiDiscoveredDatasetsResponseSchema,
  type PublicApiDiscoveredDatasetsResponse,
} from "../models/public-api-discovered-datasets-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Discovered Dataset Endpoints
 */
export class DiscoveredDatasets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Discovered datasets
   *
   * @remarks
   * This endpoint enables you to list datasets that Soda has discovered in your data sources.
   * Discovered datasets are datasets that have been found during a discovery scan but may not yet
   * be onboarded.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 1 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `datasourceId`: Optionally, use this parameter to collect only the discovered datasets
   *   associated with a specific data source.
   *
   * - `search`: Optionally, use this parameter to perform a search on the dataset name.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Discovered Datasets`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link DiscoveredDatasets.GetApiV1DiscoveredDatasetsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1DiscoveredDatasets(
    request: DiscoveredDatasets.GetApiV1DiscoveredDatasetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiDiscoveredDatasetsResponse, DiscoveredDatasets.GetApiV1DiscoveredDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/discoveredDatasets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "datasourceId", value: request.datasourceId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDiscoveredDatasetsResponseSchema },
        errorFactory: DiscoveredDatasets.GetApiV1DiscoveredDatasetsError,
      },
      options,
    );
  }
}

export namespace DiscoveredDatasets {
  export type GetApiV1DiscoveredDatasetsRequest = {
    datasourceId?: string;
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1DiscoveredDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1DiscoveredDatasetsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
