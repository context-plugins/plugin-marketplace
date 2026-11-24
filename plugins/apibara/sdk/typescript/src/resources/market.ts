import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auctionSchema, type Auction } from "../models/auction.js";
import {
  marketSoldPriceStatsResponseInternalSchema,
  type MarketSoldPriceStatsResponse,
} from "../models/market-sold-price-stats-response.js";
import type { Servers } from "../servers.js";

export class Market {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Market sold-price statistics
   *
   * @remarks
   * Aggregate retained positive sold-history prices by make and optional
   * model/year/damage/source/date period. Responses are cached briefly.
   *
   * @returns Sold-price statistics
   *
   * @throws {@link Market.MarketSoldPriceStatsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marketSoldPriceStats(
    request: Market.MarketSoldPriceStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketSoldPriceStatsResponse, Market.MarketSoldPriceStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/market/sold-prices"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "make", value: request.make, schema: s.string() },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
          { name: "damage", value: request.damage, schema: s.optional(s.string()) },
          { name: "auction", value: request.auction, schema: s.optional(s.lazy(() => auctionSchema)) },
          { name: "sale_date_from", value: request.saleDateFrom, schema: s.optional(s.dateOnly()) },
          { name: "sale_date_to", value: request.saleDateTo, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketSoldPriceStatsResponseInternalSchema },
        errorFactory: Market.MarketSoldPriceStatsError,
      },
      options,
    );
  }
}

export namespace Market {
  export type MarketSoldPriceStatsRequest = {
    make: string;
    model?: string;
    year?: number;
    damage?: string;
    auction?: Auction;
    saleDateFrom?: string;
    saleDateTo?: string;
  };

  export const marketSoldPriceStatsRequestSchema: Schema<MarketSoldPriceStatsRequest> = s.lazySchema(() =>
    s.object<MarketSoldPriceStatsRequest>({
      make: s.string(),
      model: s.optional(s.string()),
      year: s.optional(s.int().check(s.gte(1900), s.lte(2100))),
      damage: s.optional(s.string()),
      auction: s.optional(s.lazy(() => auctionSchema)),
      saleDateFrom: s.optional(s.dateOnly()),
      saleDateTo: s.optional(s.dateOnly()),
    }),
  );

  export class MarketSoldPriceStatsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<MarketSoldPriceStatsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
