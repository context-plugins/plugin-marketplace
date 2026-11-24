import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  expandRazorpayInstantSettlementsApiSchema,
  type ExpandRazorpayInstantSettlementsApi,
} from "../models/expand-razorpay-instant-settlements-api.js";
import { instantSettlementInternalSchema, type InstantSettlement } from "../models/instant-settlement.js";
import {
  settlementsOndemandRequestInternalSchema,
  type SettlementsOndemandRequest,
} from "../models/settlements-ondemand-request.js";
import {
  settlementsOndemandResponseInternalSchema,
  type SettlementsOndemandResponse,
} from "../models/settlements-ondemand-response.js";
import type { Servers } from "../servers.js";

/**
 * On-demand settlements let you transfer your available Razorpay balance to your bank account
 * immediately, outside the normal settlement cycle. Fees apply. Requires Instant Settlements to be
 * enabled on your account.
 */
export class InstantSettlements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an instant settlement
   *
   * @remarks
   * Request an on-demand (instant) settlement of your available Razorpay balance to your bank
   * account. Fees apply. Use settle_full_balance=true to settle everything available, or specify an
   * amount.
   *
   * @returns Instant settlement initiated.
   *
   * @throws {@link InstantSettlements.CreateInstantSettlementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInstantSettlement(
    request: InstantSettlements.CreateInstantSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<InstantSettlement, InstantSettlements.CreateInstantSettlementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/settlements/ondemand"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: settlementsOndemandRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: instantSettlementInternalSchema },
        errorFactory: InstantSettlements.CreateInstantSettlementError,
      },
      options,
    );
  }

  /**
   * Fetch all instant settlements
   *
   * @remarks
   * Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include
   * individual payout records inline.
   *
   * @returns Collection of instant settlements.
   *
   * @throws {@link InstantSettlements.FetchAllInstantSettlementsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllInstantSettlements(
    request: InstantSettlements.FetchAllInstantSettlementsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SettlementsOndemandResponse, InstantSettlements.FetchAllInstantSettlementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlements/ondemand"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => expandRazorpayInstantSettlementsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementsOndemandResponseInternalSchema },
        errorFactory: InstantSettlements.FetchAllInstantSettlementsError,
      },
      options,
    );
  }

  /**
   * Fetch instant settlement by ID
   *
   * @remarks
   * Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to
   * include payout records.
   *
   * @returns Instant settlement details.
   *
   * @throws {@link InstantSettlements.FetchInstantSettlementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInstantSettlement(
    request: InstantSettlements.FetchInstantSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<InstantSettlement, InstantSettlements.FetchInstantSettlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlements/ondemand/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => expandRazorpayInstantSettlementsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: instantSettlementInternalSchema },
        errorFactory: InstantSettlements.FetchInstantSettlementError,
      },
      options,
    );
  }
}

export namespace InstantSettlements {
  export type CreateInstantSettlementRequest = {
    body: SettlementsOndemandRequest;
  };

  export class CreateInstantSettlementError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInstantSettlementError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllInstantSettlementsRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
    /** Set to ondemand_payouts to include payout details. */
    expand?: ExpandRazorpayInstantSettlementsApi;
  };

  export const fetchAllInstantSettlementsRequestSchema: Schema<FetchAllInstantSettlementsRequest> =
    s.lazySchema(() =>
      s.object<FetchAllInstantSettlementsRequest>({
        from: s.optional(s.int()),
        to: s.optional(s.int()),
        count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        skip: s.defaulted(s.int().check(s.gte(0)), 0),
        expand: s.optional(s.lazy(() => expandRazorpayInstantSettlementsApiSchema)),
      }),
    );

  export class FetchAllInstantSettlementsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllInstantSettlementsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchInstantSettlementRequest = {
    /** Instant settlement ID (setlod_*). */
    id: string;
    /** Set to ondemand_payouts to include payout details. */
    expand?: ExpandRazorpayInstantSettlementsApi;
  };

  export class FetchInstantSettlementError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchInstantSettlementError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
