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
import { getNewsResponseSchema, type GetNewsResponse } from "../models/get-news-response.js";
import type { Servers } from "../servers.js";

export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get News
   *
   * @remarks
   * Fetches news articles for the given instrument keys, or the user's current positions or
   * holdings.
   *
   * @returns Successful
   *
   * @throws {@link News.GetNewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNews(
    request: News.GetNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNewsResponse, News.GetNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/news"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "instrument_keys", value: request.instrumentKeys, schema: s.optional(s.string()) },
          { name: "page_number", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getNewsResponseSchema },
        errorFactory: News.GetNewsError,
      },
      options,
    );
  }
}

export namespace News {
  export type GetNewsRequest = {
    /** Category of news to fetch. Allowed values: instrument_keys, positions, holdings */
    category: string;
    /** Comma-separated list of instrument keys. Required when category is instrument_keys. */
    instrumentKeys?: string;
    /** Page number for pagination @default 1 */
    pageNumber?: number;
    /** Number of records per page @default 100 */
    pageSize?: number;
  };

  export const getNewsRequestSchema: Schema<GetNewsRequest> = s.lazySchema(() =>
    s.object<GetNewsRequest>({
      category: s.string(),
      instrumentKeys: s.optional(s.string()),
      pageNumber: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
    }),
  );

  export class GetNewsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetNewsError> = [
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
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }
}
