import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  historicalPriceResponseSchema,
  type HistoricalPriceResponse,
} from "../models/historical-price-response.js";
import type { Servers } from "../servers.js";

export class HistoricalPriceFull {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get historical end-of-day prices
   *
   * @remarks
   * Returns historical daily OHLCV data for a ticker symbol.
   *
   * @returns Historical price series
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinancialModelingPrepError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getHistoricalPrice(
    request: HistoricalPriceFull.GetHistoricalPriceRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalPriceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/historical-price-full/{symbol}"),
        auth: this.#auth.apiKeyQuery,
        pathParams: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalPriceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace HistoricalPriceFull {
  export type GetHistoricalPriceRequest = {
    /** Ticker symbol (e.g., AAPL, MSFT) */
    symbol: string;
    from?: string;
    to?: string;
  };
}
