import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  getApiV1ResultsResultidResponseSchema,
  type GetApiV1ResultsResultidResponse,
} from "../models/get-api-v1-results-resultid-response.js";
import type { Servers } from "../servers.js";

export class Results {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve full output data and metadata for a single stored result by ID
   *
   * @returns Success (status as documented)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ResultsResultId(
    request: Results.GetApiV1ResultsResultIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetApiV1ResultsResultidResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/results/{resultId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "resultId", value: request.resultId, schema: s.string() }],
        query: [{ name: "include_html", value: request.includeHtml, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getApiV1ResultsResultidResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Results {
  export type GetApiV1ResultsResultIdRequest = {
    resultId: string;
    /** Includes stored HTML. */
    includeHtml?: boolean;
  };
}
