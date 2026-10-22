import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  unmatchedCreditTransferMatchRequestSchema,
  type UnmatchedCreditTransferMatchRequest,
} from "../models/unmatched-credit-transfer-match-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Unmatched Credit Transfers API
 */
export class UnmatchedCreditTransfersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get unmatched credit transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in private beta, and the final specification
   * may still change.
   *
   * Retrieves a single unmatched credit transfer by its identifier.
   *
   * @returns The unmatched credit transfer object.
   *
   * @throws {@link UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUnmatchedCreditTransfer(
    request: UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/unmatched-credit-transfers/{unmatchedCreditTransferId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "unmatchedCreditTransferId", value: request.unmatchedCreditTransferId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UnmatchedCreditTransfersApi.GetUnmatchedCreditTransferError,
      },
      options,
    );
  }

  /**
   * List unmatched credit transfers
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in private beta, and the final specification
   * may still change.
   *
   * Retrieves a list of unmatched credit transfers for the profile.
   *
   * The results are paginated.
   *
   * @returns A list of unmatched credit transfer objects.
   *
   * @throws {@link UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUnmatchedCreditTransfers(
    request: UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/unmatched-credit-transfers"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UnmatchedCreditTransfersApi.ListUnmatchedCreditTransfersError,
      },
      options,
    );
  }

  /**
   * Match unmatched credit transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in private beta, and the final specification
   * may still change.
   *
   * Matches an unmatched credit transfer to one or more payments, settling the funds accordingly.
   *
   * @returns The unmatched credit transfer action object.
   *
   * @throws {@link UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  matchUnmatchedCreditTransfer(
    request: UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/unmatched-credit-transfers/{unmatchedCreditTransferId}/match",
        ),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "unmatchedCreditTransferId", value: request.unmatchedCreditTransferId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => unmatchedCreditTransferMatchRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: UnmatchedCreditTransfersApi.MatchUnmatchedCreditTransferError,
      },
      options,
    );
  }

  /**
   * Return unmatched credit transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in private beta, and the final specification
   * may still change.
   *
   * Returns an unmatched credit transfer, sending the funds back to the original sender.
   *
   * @returns The unmatched credit transfer action object.
   *
   * @throws {@link UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  returnUnmatchedCreditTransfer(
    request: UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/unmatched-credit-transfers/{unmatchedCreditTransferId}/return",
        ),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "unmatchedCreditTransferId", value: request.unmatchedCreditTransferId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UnmatchedCreditTransfersApi.ReturnUnmatchedCreditTransferError,
      },
      options,
    );
  }
}

export namespace UnmatchedCreditTransfersApi {
  export type GetUnmatchedCreditTransferRequest = {
    /** Provide the ID of the related unmatched credit transfer. */
    unmatchedCreditTransferId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetUnmatchedCreditTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetUnmatchedCreditTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListUnmatchedCreditTransfersRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListUnmatchedCreditTransfersError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListUnmatchedCreditTransfersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type MatchUnmatchedCreditTransferRequest = {
    /** Provide the ID of the related unmatched credit transfer. */
    unmatchedCreditTransferId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: UnmatchedCreditTransferMatchRequest;
  };

  export class MatchUnmatchedCreditTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MatchUnmatchedCreditTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ReturnUnmatchedCreditTransferRequest = {
    /** Provide the ID of the related unmatched credit transfer. */
    unmatchedCreditTransferId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ReturnUnmatchedCreditTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ReturnUnmatchedCreditTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
