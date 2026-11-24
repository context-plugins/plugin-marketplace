import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { marketSchema, type Market } from "../models/unions/market.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class MarketHours {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Market Hours
   *
   * @remarks
   * Is the market open right now? Live open/closed + next open/close for major exchanges (plus
   * crypto 24/7 and forex 24/5). Tells an AI whether a price is live or a closed-market last-print.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link MarketHours.MarketHoursMarketHoursGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marketHoursMarketHoursGet(
    request: MarketHours.MarketHoursMarketHoursGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, MarketHours.MarketHoursMarketHoursGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/market-hours"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "market", value: request.market, schema: s.optional(s.lazy(() => marketSchema)) }],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: MarketHours.MarketHoursMarketHoursGetError,
      },
      options,
    );
  }
}

export namespace MarketHours {
  export type MarketHoursMarketHoursGetRequest = {
    /** NYSE, NASDAQ, LSE, XETRA, TSE, HKEX, ASX, Crypto, Forex */
    market?: Market;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class MarketHoursMarketHoursGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<MarketHoursMarketHoursGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
