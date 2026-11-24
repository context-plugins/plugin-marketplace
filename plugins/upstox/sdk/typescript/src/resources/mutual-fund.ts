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
  getMutualFundHoldingsResponseSchema,
  type GetMutualFundHoldingsResponse,
} from "../models/get-mutual-fund-holdings-response.js";
import {
  getMutualFundOrderDetailsResponseSchema,
  type GetMutualFundOrderDetailsResponse,
} from "../models/get-mutual-fund-order-details-response.js";
import {
  getMutualFundOrdersResponseSchema,
  type GetMutualFundOrdersResponse,
} from "../models/get-mutual-fund-orders-response.js";
import {
  getMutualFundSipsResponseSchema,
  type GetMutualFundSipsResponse,
} from "../models/get-mutual-fund-sips-response.js";
import type { Servers } from "../servers.js";

export class MutualFund {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get mutual fund holdings
   *
   * @remarks
   * Returns mutual fund holdings for the authenticated user.
   *
   * @returns Successful
   *
   * @throws {@link MutualFund.GetMutualFundHoldingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMutualFundHoldings(
    options?: RequestOptions,
  ): ApiPromise<GetMutualFundHoldingsResponse, MutualFund.GetMutualFundHoldingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/mf/holdings"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMutualFundHoldingsResponseSchema },
        errorFactory: MutualFund.GetMutualFundHoldingsError,
      },
      options,
    );
  }

  /**
   * Get mutual fund order by id
   *
   * @remarks
   * Returns a single mutual fund order by order id.
   *
   * @returns Successful
   *
   * @throws {@link MutualFund.GetMutualFundOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMutualFundOrder(
    request: MutualFund.GetMutualFundOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMutualFundOrderDetailsResponse, MutualFund.GetMutualFundOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/mf/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMutualFundOrderDetailsResponseSchema },
        errorFactory: MutualFund.GetMutualFundOrderError,
      },
      options,
    );
  }

  /**
   * Get mutual fund orders
   *
   * @remarks
   * Returns mutual fund orders from the last 7 days for the authenticated user.
   *
   * @returns Successful
   *
   * @throws {@link MutualFund.GetMutualFundOrdersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMutualFundOrders(
    request: MutualFund.GetMutualFundOrdersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMutualFundOrdersResponse, MutualFund.GetMutualFundOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/mf/orders"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.defaulted(s.string(), "ALL") },
          {
            name: "transaction_type",
            value: request.transactionType,
            schema: s.defaulted(s.string(), "ALL"),
          },
          { name: "page_number", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "records", value: request.records, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMutualFundOrdersResponseSchema },
        errorFactory: MutualFund.GetMutualFundOrdersError,
      },
      options,
    );
  }

  /**
   * Get mutual fund SIPs
   *
   * @remarks
   * Returns active and paused SIP orders for the authenticated user.
   *
   * @returns Successful
   *
   * @throws {@link MutualFund.GetMutualFundSipsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMutualFundSips(
    request: MutualFund.GetMutualFundSipsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMutualFundSipsResponse, MutualFund.GetMutualFundSipsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/mf/sips"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "page_number", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "records", value: request.records, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMutualFundSipsResponseSchema },
        errorFactory: MutualFund.GetMutualFundSipsError,
      },
      options,
    );
  }
}

export namespace MutualFund {
  export class GetMutualFundHoldingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMutualFundHoldingsError> = [
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

  export type GetMutualFundOrderRequest = {
    /** Mutual fund order id */
    orderId: string;
  };

  export const getMutualFundOrderRequestSchema: Schema<GetMutualFundOrderRequest> = s.lazySchema(() =>
    s.object<GetMutualFundOrderRequest>({
      orderId: s.string().check(s.pattern("^[-a-zA-Z0-9]+")),
    }),
  );

  export class GetMutualFundOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMutualFundOrderError> = [
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

  export type GetMutualFundOrdersRequest = {
    /** Mutual fund order status @default "ALL" */
    status?: string;
    /** Mutual fund order transaction type @default "ALL" */
    transactionType?: string;
    /** Page number for pagination. @default 1 */
    pageNumber?: number;
    /** no of records in a single page @default 10 */
    records?: number;
  };

  export const getMutualFundOrdersRequestSchema: Schema<GetMutualFundOrdersRequest> = s.lazySchema(() =>
    s.object<GetMutualFundOrdersRequest>({
      status: s.defaulted(
        s
          .string()
          .check(
            s.pattern(
              "^(ALL|ARCHIVED|NEW|PENDING|OPEN|INPROCESS|COMPLETED|PLACED|REJECTED|CREATED|PAYMENT_PENDING|FAILED|CANCELLED|VERIFIED)$",
            ),
          ),
        "ALL",
      ),
      transactionType: s.defaulted(s.string(), "ALL"),
      pageNumber: s.defaulted(s.int(), 1),
      records: s.defaulted(s.int(), 10),
    }),
  );

  export class GetMutualFundOrdersError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMutualFundOrdersError> = [
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

  export type GetMutualFundSipsRequest = {
    /** Page number for pagination. @default 1 */
    pageNumber?: number;
    /** no of records in a single page @default 10 */
    records?: number;
  };

  export class GetMutualFundSipsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMutualFundSipsError> = [
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
