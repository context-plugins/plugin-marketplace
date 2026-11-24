import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  runMobileFriendlyTestRequestSchema,
  type RunMobileFriendlyTestRequest,
} from "../models/run-mobile-friendly-test-request.js";
import {
  runMobileFriendlyTestResponseSchema,
  type RunMobileFriendlyTestResponse,
} from "../models/run-mobile-friendly-test-response.js";
import type { Servers } from "../servers.js";

export class UrlTestingTools {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Run mobileFriendlyTest
   *
   * @remarks
   * Runs Mobile-Friendly Test for a given URL.
   *
   * @returns Successful response
   *
   * @throws {@link UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchconsoleUrlTestingToolsMobileFriendlyTestRun(
    request: UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest,
    options?: RequestOptions,
  ): ApiPromise<
    RunMobileFriendlyTestResponse,
    UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urlTestingTools/mobileFriendlyTest:run"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runMobileFriendlyTestRequestSchema },
      },
      {
        success: { kind: "json", schema: runMobileFriendlyTestResponseSchema },
        errorFactory: UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError,
      },
      options,
    );
  }
}

export namespace UrlTestingTools {
  export type SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest = {
    body: RunMobileFriendlyTestRequest;
  };

  export class SearchconsoleUrlTestingToolsMobileFriendlyTestRunError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SearchconsoleUrlTestingToolsMobileFriendlyTestRunError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
