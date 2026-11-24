import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { settlementSchema, type Settlement } from "../models/settlement.js";
import {
  settlementsReconCombinedResponseSchema,
  type SettlementsReconCombinedResponse,
} from "../models/settlements-recon-combined-response.js";
import { settlementsResponseSchema, type SettlementsResponse } from "../models/settlements-response.js";
import type { Servers } from "../servers.js";

/**
 * Settlements represent batch transfers of collected payment funds to your bank account. Use the
 * recon endpoint for transaction-level reconciliation reports mapping each payment, refund, and
 * adjustment to its settlement.
 */
export class SettlementsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch all settlements
   *
   * @remarks
   * Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your
   * bank account. Maximum 100 per call.
   *
   * @returns Collection of settlements.
   *
   * @throws {@link SettlementsApi.FetchAllSettlementsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllSettlements(
    request: SettlementsApi.FetchAllSettlementsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SettlementsResponse, SettlementsApi.FetchAllSettlementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlements"),
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementsResponseSchema },
        errorFactory: SettlementsApi.FetchAllSettlementsError,
      },
      options,
    );
  }

  /**
   * Fetch settlement by ID
   *
   * @remarks
   * Retrieve details of a specific settlement transaction.
   *
   * @returns Settlement details.
   *
   * @throws {@link SettlementsApi.FetchSettlementError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSettlement(
    request: SettlementsApi.FetchSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<Settlement, SettlementsApi.FetchSettlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlements/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementSchema },
        errorFactory: SettlementsApi.FetchSettlementError,
      },
      options,
    );
  }

  /**
   * Fetch settlement reconciliation report
   *
   * @remarks
   * Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each
   * record maps a payment, refund, transfer, or adjustment to its settlement. Use for accounting
   * reconciliation. Maximum 1000 records per call.
   *
   * @returns Reconciliation report records.
   *
   * @throws {@link SettlementsApi.FetchSettlementReconError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSettlementRecon(
    request: SettlementsApi.FetchSettlementReconRequest,
    options?: RequestOptions,
  ): ApiPromise<SettlementsReconCombinedResponse, SettlementsApi.FetchSettlementReconError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlements/recon/combined"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "year", value: request.year, schema: s.int() },
          { name: "month", value: request.month, schema: s.int() },
          { name: "day", value: request.day, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementsReconCombinedResponseSchema },
        errorFactory: SettlementsApi.FetchSettlementReconError,
      },
      options,
    );
  }
}

export namespace SettlementsApi {
  export type FetchAllSettlementsRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchAllSettlementsRequestSchema: Schema<FetchAllSettlementsRequest> = s.lazySchema(() =>
    s.object<FetchAllSettlementsRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchAllSettlementsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllSettlementsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchSettlementRequest = {
    /** Settlement ID (setl_*). */
    id: string;
  };

  export class FetchSettlementError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchSettlementError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchSettlementReconRequest = {
    /** Settlement year in YYYY format. */
    year: number;
    /** Settlement month in MM format (01–12). */
    month: number;
    /** Settlement day in DD format (1–31). Omit to fetch the full month. */
    day?: number;
    /** Records per call. Maximum 1000. Default 10. @default 10 */
    count?: number;
    /** Records to skip for pagination. @default 0 */
    skip?: number;
  };

  export const fetchSettlementReconRequestSchema: Schema<FetchSettlementReconRequest> = s.lazySchema(() =>
    s.object<FetchSettlementReconRequest>({
      year: s.int(),
      month: s.int().check(s.gte(1), s.lte(12)),
      day: s.optional(s.int().check(s.gte(1), s.lte(31))),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 10),
      skip: s.defaulted(s.int(), 0),
    }),
  );

  export class FetchSettlementReconError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchSettlementReconError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
