import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  googleAnalyticsAdminV1BetaListAccountSummariesResponseSchema,
  type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse,
} from "../models/google-analytics-admin-v1-beta-list-account-summaries-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import type { Servers } from "../servers.js";

export class AccountSummaries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List accountSummaries
   *
   * @remarks
   * Returns summaries of all accounts accessible by the caller.
   *
   * @returns Successful response
   *
   * @throws {@link AccountSummaries.AnalyticsadminAccountSummariesListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountSummariesList(
    request: AccountSummaries.AnalyticsadminAccountSummariesListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaListAccountSummariesResponse,
    AccountSummaries.AnalyticsadminAccountSummariesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/accountSummaries"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListAccountSummariesResponseSchema },
        errorFactory: AccountSummaries.AnalyticsadminAccountSummariesListError,
      },
      options,
    );
  }
}

export namespace AccountSummaries {
  export type AnalyticsadminAccountSummariesListRequest = {
    /**
     * Optional. The maximum number of AccountSummary resources to return. The service may return
     * fewer than this value, even if there are additional pages. If unspecified, at most 50
     * resources will be returned. The maximum value is 200; (higher values will be coerced to the
     * maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAccountSummaries` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListAccountSummaries` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class AnalyticsadminAccountSummariesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountSummariesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
