import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import {
  websocketAuthRedirectResponseSchema,
  type WebsocketAuthRedirectResponse,
} from "../models/websocket-auth-redirect-response.js";
import type { Servers } from "../servers.js";

export class Websocket {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Market Data Feed
   *
   * @remarks
   * This API redirects the client to the respective socket endpoint to receive Market updates.
   *
   * @throws {@link Websocket.GetMarketDataFeedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketDataFeed(options?: RequestOptions): ApiPromise<undefined, Websocket.GetMarketDataFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/feed/market-data-feed"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Websocket.GetMarketDataFeedError,
      },
      options,
    );
  }

  /**
   * Market Data Feed Authorize
   *
   * @remarks
   * This API provides the functionality to retrieve the socket endpoint URI for Market updates.
   *
   * @returns Successful
   *
   * @throws {@link Websocket.GetMarketDataFeedAuthorizeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketDataFeedAuthorize(
    options?: RequestOptions,
  ): ApiPromise<WebsocketAuthRedirectResponse, Websocket.GetMarketDataFeedAuthorizeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/feed/market-data-feed/authorize"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: websocketAuthRedirectResponseSchema },
        errorFactory: Websocket.GetMarketDataFeedAuthorizeError,
      },
      options,
    );
  }

  /**
   * Portfolio Stream Feed
   *
   * @remarks
   * This API redirects the client to the respective socket endpoint to receive Portfolio updates.
   *
   * @throws {@link Websocket.GetPortfolioStreamFeedError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioStreamFeed(
    request: Websocket.GetPortfolioStreamFeedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Websocket.GetPortfolioStreamFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/feed/portfolio-stream-feed"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "update_types", value: request.updateTypes, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Websocket.GetPortfolioStreamFeedError,
      },
      options,
    );
  }

  /**
   * Portfolio Stream Feed Authorize
   *
   * @remarks
   * This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.
   *
   * @returns Successful
   *
   * @throws {@link Websocket.GetPortfolioStreamFeedAuthorizeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPortfolioStreamFeedAuthorize(
    request: Websocket.GetPortfolioStreamFeedAuthorizeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<WebsocketAuthRedirectResponse, Websocket.GetPortfolioStreamFeedAuthorizeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/feed/portfolio-stream-feed/authorize"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "update_types", value: request.updateTypes, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: websocketAuthRedirectResponseSchema },
        errorFactory: Websocket.GetPortfolioStreamFeedAuthorizeError,
      },
      options,
    );
  }
}

export namespace Websocket {
  export class GetMarketDataFeedError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"error302", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketDataFeedError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      { on: 302, kind: "error302", decode: { kind: "empty" } },
    ];
  }

  export class GetMarketDataFeedAuthorizeError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketDataFeedAuthorizeError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetPortfolioStreamFeedRequest = {
    /** Identifiers separated by commas denote the types of updates to receive. */
    updateTypes?: string;
  };

  export const getPortfolioStreamFeedRequestSchema: Schema<GetPortfolioStreamFeedRequest> = s.lazySchema(() =>
    s.object<GetPortfolioStreamFeedRequest>({
      updateTypes: s.optional(
        s
          .string()
          .check(s.pattern("^(order|gtt_order|position|holding)(,(order|gtt_order|position|holding))*$")),
      ),
    }),
  );

  export class GetPortfolioStreamFeedError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"error302", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPortfolioStreamFeedError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      { on: 302, kind: "error302", decode: { kind: "empty" } },
    ];
  }

  export type GetPortfolioStreamFeedAuthorizeRequest = {
    /** Identifiers separated by commas denote the types of updates to receive. */
    updateTypes?: string;
  };

  export const getPortfolioStreamFeedAuthorizeRequestSchema: Schema<GetPortfolioStreamFeedAuthorizeRequest> =
    s.lazySchema(() =>
      s.object<GetPortfolioStreamFeedAuthorizeRequest>({
        updateTypes: s.optional(
          s
            .string()
            .check(s.pattern("^(order|gtt_order|position|holding)(,(order|gtt_order|position|holding))*$")),
        ),
      }),
    );

  export class GetPortfolioStreamFeedAuthorizeError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPortfolioStreamFeedAuthorizeError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }
}
