import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  v1BestOfferPricesResponseSchema,
  type V1BestOfferPricesResponse,
} from "../models/v1-best-offer-prices-response.js";
import type { Servers } from "../servers.js";

export class BestOfferPrices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Look up saved accepted Best Offer prices
   *
   * @remarks
   * Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier
   * bestOfferPrice=true searches. Free: does not count against monthly requests. Uses the normal
   * per-minute rate limit.
   *
   * @returns One entry per item ID with acceptedOfferPrice (string or null) and
   * acceptedOfferPriceStatus (found, pending, not_available or unknown).
   *
   * @throws {@link BestOfferPrices.GetBestOfferPricesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBestOfferPrices(
    request: BestOfferPrices.GetBestOfferPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BestOfferPricesResponse, BestOfferPrices.GetBestOfferPricesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/best-offer-prices"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "itemIds", value: request.itemIds, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BestOfferPricesResponseSchema },
        errorFactory: BestOfferPrices.GetBestOfferPricesError,
      },
      options,
    );
  }
}

export namespace BestOfferPrices {
  export type GetBestOfferPricesRequest = {
    /** 1 to 100 eBay item IDs, separated by commas. */
    itemIds: string;
  };

  export class GetBestOfferPricesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBestOfferPricesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
