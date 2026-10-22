import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  entityBalanceTransferSchema,
  type EntityBalanceTransfer,
} from "../models/entity-balance-transfer.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Balance Transfers API
 */
export class BalanceTransfersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Connect balance transfer
   *
   * @remarks
   * This API endpoint allows you to create a balance transfer from your organization's balance to a
   * connected organization's balance, or vice versa. You can also create a balance transfer between
   * two connected organizations. To create a balance transfer, you must be authenticated as the
   * source organization, and the destination organization must be a connected organization that has
   * authorized the `balance-transfers.write` scope for your organization.
   *
   * @returns The balance transfer object.
   *
   * @throws {@link BalanceTransfersApi.CreateConnectBalanceTransferError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConnectBalanceTransfer(
    request: BalanceTransfersApi.CreateConnectBalanceTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalanceTransfersApi.CreateConnectBalanceTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/connect/balance-transfers"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => entityBalanceTransferSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalanceTransfersApi.CreateConnectBalanceTransferError,
      },
      options,
    );
  }

  /**
   * Get a Connect balance transfer
   *
   * @remarks
   * Retrieve a single Connect balance transfer object by its ID.
   *
   * @returns The Connect balance transfer object.
   *
   * @throws {@link BalanceTransfersApi.GetConnectBalanceTransferError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectBalanceTransfer(
    request: BalanceTransfersApi.GetConnectBalanceTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalanceTransfersApi.GetConnectBalanceTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/connect/balance-transfers/{balanceTransferId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "balanceTransferId", value: request.balanceTransferId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalanceTransfersApi.GetConnectBalanceTransferError,
      },
      options,
    );
  }

  /**
   * List all Connect balance transfers
   *
   * @remarks
   * Returns a paginated list of balance transfers associated with your organization. These may be a
   * balance transfer that was received or sent from your balance, or a balance transfer that you
   * initiated on behalf of your clients. If no balance transfers are available, the resulting array
   * will be empty. This request should never throw an error.
   *
   * @returns A list of Connect balance transfers. For a complete reference of the Connect balance
   * transfer object, refer to the [Get balance transfer endpoint](get-balance-transfer)
   * documentation.
   *
   * @throws {@link BalanceTransfersApi.ListConnectBalanceTransfersError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConnectBalanceTransfers(
    request: BalanceTransfersApi.ListConnectBalanceTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalanceTransfersApi.ListConnectBalanceTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/connect/balance-transfers"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalanceTransfersApi.ListConnectBalanceTransfersError,
      },
      options,
    );
  }
}

export namespace BalanceTransfersApi {
  export type CreateConnectBalanceTransferRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: EntityBalanceTransfer;
  };

  export class CreateConnectBalanceTransferError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateConnectBalanceTransferError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetConnectBalanceTransferRequest = {
    /** Provide the ID of the related balance transfer. */
    balanceTransferId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetConnectBalanceTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectBalanceTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListConnectBalanceTransfersRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListConnectBalanceTransfersError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListConnectBalanceTransfersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
