import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { companyProfileSchema, type CompanyProfile } from "../models/company-profile.js";
import type { Servers } from "../servers.js";

export class Profile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get company profile
   *
   * @returns Company profile
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinancialModelingPrepError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCompanyProfile(
    request: Profile.GetCompanyProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfile[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profile/{symbol}"),
        auth: this.#auth.apiKeyQuery,
        pathParams: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyProfileSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Profile {
  export type GetCompanyProfileRequest = {
    /** Ticker symbol (e.g., AAPL, MSFT) */
    symbol: string;
  };
}
