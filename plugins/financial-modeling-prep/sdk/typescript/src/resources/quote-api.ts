import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { quoteSchema, type Quote } from "../models/quote.js";
import type { Servers } from "../servers.js";

export class QuoteApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get real-time stock quote
   *
   * @remarks
   * Returns the latest price and market data for a given ticker symbol.
   *
   * @returns Quote data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinancialModelingPrepError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getQuote(request: QuoteApi.GetQuoteRequest, options?: RequestOptions): ApiPromise<Quote[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/quote/{symbol}"),
        auth: this.#auth.apiKeyQuery,
        pathParams: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => quoteSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace QuoteApi {
  export type GetQuoteRequest = {
    /** Ticker symbol (e.g., AAPL, MSFT) */
    symbol: string;
  };
}
