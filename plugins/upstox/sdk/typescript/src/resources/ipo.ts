import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import { ipoApplyRequestInternalSchema, type IpoApplyRequest } from "../models/ipo-apply-request.js";
import { ipoApplyResponseSchema, type IpoApplyResponse } from "../models/ipo-apply-response.js";
import { ipoCancelResponseSchema, type IpoCancelResponse } from "../models/ipo-cancel-response.js";
import { ipoDetailsResponseSchema, type IpoDetailsResponse } from "../models/ipo-details-response.js";
import { ipoListingResponseSchema, type IpoListingResponse } from "../models/ipo-listing-response.js";
import {
  ipoOrderDetailResponseSchema,
  type IpoOrderDetailResponse,
} from "../models/ipo-order-detail-response.js";
import { ipoOrderResponseSchema, type IpoOrderResponse } from "../models/ipo-order-response.js";
import { issueType3Schema, type IssueType3 } from "../models/issue-type3.js";
import { status9Schema, type Status9 } from "../models/status9.js";
import type { Servers } from "../servers.js";

export class Ipo {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Apply for IPO
   *
   * @remarks
   * Places an IPO application for the authenticated user.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.ApplyForIpoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  applyForIpo(
    request: Ipo.ApplyForIpoRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoApplyResponse, Ipo.ApplyForIpoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/ipos/orders"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ipoApplyRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: ipoApplyResponseSchema },
        errorFactory: Ipo.ApplyForIpoError,
      },
      options,
    );
  }

  /**
   * Cancel IPO Order
   *
   * @remarks
   * Cancels/deletes an IPO order of the authenticated user by order id.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.CancelIpoOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelIpoOrder(
    request: Ipo.CancelIpoOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoCancelResponse, Ipo.CancelIpoOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/ipos/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoCancelResponseSchema },
        errorFactory: Ipo.CancelIpoOrderError,
      },
      options,
    );
  }

  /**
   * Get IPO Details
   *
   * @remarks
   * Fetches detailed information for an IPO by its slug ID.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.GetIpoDetailsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIpoDetails(
    request: Ipo.GetIpoDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoDetailsResponse, Ipo.GetIpoDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/ipos/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoDetailsResponseSchema },
        errorFactory: Ipo.GetIpoDetailsError,
      },
      options,
    );
  }

  /**
   * Get IPO Listing
   *
   * @remarks
   * Fetches list of IPOs filtered by status.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.GetIpoListingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIpoListing(
    request: Ipo.GetIpoListingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IpoListingResponse, Ipo.GetIpoListingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/ipos"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status9Schema)) },
          {
            name: "issue_type",
            value: request.issueType,
            schema: s.optional(s.lazy(() => issueType3Schema)),
          },
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.string()) },
          { name: "records", value: request.records, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoListingResponseSchema },
        errorFactory: Ipo.GetIpoListingError,
      },
      options,
    );
  }

  /**
   * Get IPO Order
   *
   * @remarks
   * Fetches a single IPO order of the authenticated user by order id.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.GetIpoOrderByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIpoOrderById(
    request: Ipo.GetIpoOrderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IpoOrderDetailResponse, Ipo.GetIpoOrderByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/ipos/orders/{order_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoOrderDetailResponseSchema },
        errorFactory: Ipo.GetIpoOrderByIdError,
      },
      options,
    );
  }

  /**
   * Get IPO Orders
   *
   * @remarks
   * Fetches the authenticated user's IPO orders/applications.
   *
   * @returns Successful
   *
   * @throws {@link Ipo.GetIpoOrdersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIpoOrders(
    request: Ipo.GetIpoOrdersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IpoOrderResponse, Ipo.GetIpoOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/ipos/orders"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.string()) },
          { name: "records", value: request.records, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipoOrderResponseSchema },
        errorFactory: Ipo.GetIpoOrdersError,
      },
      options,
    );
  }
}

export namespace Ipo {
  export type ApplyForIpoRequest = {
    body: IpoApplyRequest;
  };

  export class ApplyForIpoError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse9", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ApplyForIpoError> = [
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
        on: 404,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse9",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type CancelIpoOrderRequest = {
    /** IPO application id, as returned in `order_id` by the apply and orders APIs */
    orderId: string;
  };

  export class CancelIpoOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse9", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelIpoOrderError> = [
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
        on: 404,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse9",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetIpoDetailsRequest = {
    /** IPO id (slug), as returned in `id` by the IPO listing API */
    id: string;
  };

  export class GetIpoDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetIpoDetailsError> = [
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

  export type GetIpoListingRequest = {
    /** IPO status to filter by */
    status?: Status9;
    /** Issue type filter. `regular` is a mainboard issue. Returns both when omitted */
    issueType?: IssueType3;
    /** Page number, starting at 1 */
    pageNumber?: string;
    /** Number of records per page */
    records?: string;
  };

  export class GetIpoListingError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetIpoListingError> = [
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

  export type GetIpoOrderByIdRequest = {
    /** IPO application id, as returned in `order_id` by the apply and orders APIs */
    orderId: string;
  };

  export class GetIpoOrderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse9", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIpoOrderByIdError> = [
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
        on: 404,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse9",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetIpoOrdersRequest = {
    /** Page number, starting at 1 */
    pageNumber?: string;
    /** Number of records per page */
    records?: string;
  };

  export class GetIpoOrdersError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetIpoOrdersError> = [
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
